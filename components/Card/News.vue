<template>
  <NuxtLink
    :to="localePath(`/news/${item?.slug}`)"
    class="w-full p-3 pb-4 bg-dark-100 rounded-xl group transition-300"
    :class="{ 'pointer-events-none': loading }"
  >
    <div class="aspect-video w-full rounded-xl overflow-hidden">
      <CommonPreloader v-bind="{ loading }" width="100%" height="100%">
        <img
          class="w-full h-full object-cover"
          :src="item?.image"
          :alt="item?.title"
        />
      </CommonPreloader>
    </div>
    <div class="my-3">
      <CommonPreloader
        height="42px"
        width="100%"
        margin="0 0 8px 0"
        v-bind="{ loading }"
      >
        <h2
          class="font-semibold leading-130 text-base text-white line-clamp-2 mb-2 transition-300 group-hover:text-red-100"
        >
          {{ item?.title }}
        </h2>
      </CommonPreloader>
      <CommonPreloader height="36px" width="100%" v-bind="{ loading }">
        <div></div>
        <p
          class="text-gray text-sm leading-130 line-clamp-2"
          v-html="item?.short_description"
        ></p>
      </CommonPreloader>
    </div>
    <div class="flex-center-between">
      <CommonPreloader height="18px" width="70px" v-bind="{ loading }">
        <p class="font-medium text-sm leading-130 text-white">
          {{ dayjs(item?.published_at).format('DD.MM.YYYY') }}
        </p>
      </CommonPreloader>
      <i
        class="icon-arrow-right text-xl leading-5 -translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-300 text-red-100"
      />
    </div>
  </NuxtLink>
</template>

<script setup lang="ts">
import { TNews } from '~/types/news'
import dayjs from 'dayjs'

interface Props {
  item?: TNews
  loading?: boolean
}
defineProps<Props>()
</script>

<style scoped>
.group:hover {
  box-shadow: 0 4px 34px rgba(255, 75, 85, 0.28);
}
</style>
