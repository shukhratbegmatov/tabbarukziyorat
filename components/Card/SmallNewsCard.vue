<template>
  <NuxtLink
    :to="localePath(`/news/${news?.slug}`)"
    class="flex lg:p-3 p-2 border-[1px] border-white border-opacity-20 rounded-xl bg-[#07091C] ease-all duration-300 hover:cursor-pointer hover:bg-white hover:bg-opacity-[0.04] hover:border-opacity-[0.04]"
  >
    <CommonPreloader
      :width="short ? '122px' : '268px'"
      :height="short ? '120px' : '268px'"
      border-radius="8px"
      class="!flex-shrink-0"
      preloader-class="inline-flex"
      :loading="loading"
    >
      <img
        :src="news?.image"
        :alt="news?.title"
        class="rounded-lg flex-shrink-0 object-cover"
        :class="[
          short
            ? '!w-[122px] !h-[128px]'
            : '!w-[122px] !h-[128px] lg:!w-[268px] lg:!h-[290px]',
        ]"
      />
    </CommonPreloader>
    <div class="flex flex-col justify-between pl-4">
      <div>
        <CommonPreloader
          width="100px"
          height="24px"
          border-radius="8px"
          preloader-class="mb-2"
          :loading="loading"
        >
          <h4
            class="mb-4 text-white font-semibold leading-130 text-base !line-clamp-2"
            :class="[short ? 'text-lg' : 'text-lg lg:text-2xl']"
          >
            {{ news?.title }}
          </h4>
        </CommonPreloader>
        <CommonPreloader
          width="200px"
          height="24px"
          border-radius="8px"
          :loading="loading"
        >
          <div
            v-if="!!short"
            class="news-text text-white text-base leading-130 font-medium !line-clamp-2"
            v-html="news?.short_description"
          />
        </CommonPreloader>
      </div>
      <CommonPreloader
        width="200px"
        height="24px"
        border-radius="8px"
        :loading="loading"
      >
        <p
          class="font-normal text-[13px] leading-130 text-white text-opacity-60 b-0 md:text-base"
        >
          {{ dayjs(news?.published_at).locale(locale).format('MMMM DD YYYY') }}
        </p>
      </CommonPreloader>
    </div>
  </NuxtLink>
</template>

<script setup lang="ts">
import { TNews } from '~/types/news'
import dayjs from 'dayjs'
const { locale } = useI18n()

interface Props {
  news?: TNews
  short?: boolean
  loading?: boolean
}
defineProps<Props>()
</script>
<style>
@media screen and (max-width: 1024px) {
  .news-text {
    display: none !important;
  }
}
</style>
