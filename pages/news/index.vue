<template>
  <div class="min-h-[calc(100vh-239px)]">
    <div class="pt-20 md:pt-[120px]">
      <CommonBreadcrumb v-bind="{ menu }" class="container px-0" />
      <div class="container pt-5 md:pt-9 pb-5 md:pb-8">
        <h1
          class="font-bold leading-130 text-3xl md:text-40 text-white mb-3 md:mb-6 font-playfair"
        >
          {{ $t('news') }}
        </h1>
        <Transition name="fade" mode="out-in">
          <div
            :key="loading"
            class="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 sm:gap-6"
          >
            <CardNews
              v-for="(item, i) in loading ? 12 : newsList"
              :key="i"
              :item="loading ? undefined : item"
              v-bind="{ loading }"
            />
          </div>
        </Transition>
        <CommonPagination
          v-if="!loading"
          class="justify-end mt-8"
          :per-page="12"
          v-bind="{ total }"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'

import { useNewsStore } from '~/store/news'

const route = useRoute()
const newsStore = useNewsStore()
const { t } = useI18n()

const offset = computed(() => {
  const page = Number(route.query.page) || 1
  return (page - 1) * 12
})

const loading = computed(() => newsStore.newsLoading)
const newsList = computed(() => newsStore.newsList)
const total = computed(() => newsStore.newsCount)

const fetchNews = () => {
  newsStore.fetchNewsList(offset.value)
}

watch(
  () => route.query.page,
  () => {
    fetchNews()
  },
  { immediate: true }
)

useSeoMeta({
  title: t('news'),
})

const menu = [
  {
    title: 'News',
    link: '/news',
  },
]
</script>
