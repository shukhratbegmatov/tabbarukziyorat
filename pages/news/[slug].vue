<template>
  <div class="pt-20 md:pt-[120px] pb-12 container min-h-[calc(100vh-239px)]">
    <CommonBreadcrumb v-bind="{ menu }" v-if="!loading" />
    <div class="max-w-3xl mx-auto">
      <h1 class="text-40 text-white font-semibold leading-130 text-white">
        {{ single?.title }}
      </h1>
      <div class="flex-y-center gap-7 my-4 text-gray-100">
        <div class="flex-y-center gap-1">
          <i class="icon-calendar text-2xl leading-6" />
          {{ dayjs(single?.published_at).format('DD.MM.YYYY') }}
        </div>
        <div class="flex-y-center gap-1">
          <i class="icon-eye text-2xl leading-6" />
          {{ single?.view_count }}
        </div>
      </div>
      <div class="aspect-video w-full rounded-xl overflow-hidden">
        <img
          class="w-full h-full object-cover"
          :src="single?.image"
          :alt="single?.title"
        />
      </div>
      <div class="vhtml-text py-6" v-html="single?.description" />
      <CommonSingleDetail :title="single?.title" />
    </div>
  </div>
</template>

<script setup lang="ts">
import dayjs from 'dayjs'

import { useAsyncData } from '#app'

const route = useRoute()
const loading = ref(false)

const { data: single } = useAsyncData(async () => {
  loading.value = true
  return await $api
    .$get(`/news/NewsDetail/${route.params.slug}/`)
    .catch(() => {
      showError({
        statusCode: 404,
      })
    })
    .finally(() => {
      loading.value = false
    })
})

useSeoMeta({
  title: single?.value?.title,
  description: single?.value?.short_description,
  ogDescription: single.value?.short_description,
  ogImage: single?.value?.image,
})

const menu = computed(() => [
  {
    title: 'News',
    link: '/news',
  },
  {
    title: single?.value?.title,
    link: '/news',
  },
])
</script>
