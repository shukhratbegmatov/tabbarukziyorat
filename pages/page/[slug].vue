<template>
  <div class="bg-dark pt-[90px] md:pt-[120px] container pt-9 pb-[88px]">
    <CommonBreadcrumb v-bind="{ menu }" v-if="!loading" />
    <h1 class="font-bold text-40 leading-130 text-white font-playfair">
      {{ single?.title }}
    </h1>
    <Transition name="fade" mode="out-in">
      <div v-if="loading" class="flex flex-col gap-3">
        <CommonPreloader
          v-for="i in 20"
          :key="i"
          width="100%"
          height="20px"
          loading
        />
      </div>
      <div v-else class="relative vhtml-text mt-6" v-html="single?.text" />
    </Transition>
  </div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'

import { useAsyncData } from '#app'

const route = useRoute()
const loading = ref(false)
const { data: single } = useAsyncData(async () => {
  loading.value = true
  return await $api
    .$get(`/common/StaticPageGet/${route.params.slug}`)
    .catch(() => {
      showError({
        statusCode: 404,
      })
    })
    .finally(() => {
      loading.value = false
    })
})

const menu = computed(() => [
  {
    title: single?.value?.title,
    link: '/news',
  },
])
</script>
