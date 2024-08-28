<template>
  <NuxtLink
    :to="localePath(`/religions/${religion?.id}`)"
    :class="{ 'bg-white/[0.03] mr-4': loading }"
    class="relative block p-4 border-[1px] border-white border-opacity-20 rounded-xl ease-all duration-300 hover:cursor-pointer hover:bg-white hover:bg-opacity-[0.04] hover:border-opacity-[0.04] group md:p-8"
  >
    <div class="flex mb-3 md:flex-col md:mb-0">
      <CommonPreloader
        width="60px"
        height="60px"
        border-radius="8px"
        preloader-class="mb-6"
        :loading="loading"
      >
        <div
          class="flex items-center justify-center w-14 h-14 py-3 bg-transparent border-[1px] border-white border-opacity-20 rounded-lg ease-all duration-300 group-hover:bg-[#E54545]"
        >
          <img class="flex-shrink-1" alt="religion" :src="religion?.flag" />
        </div>
      </CommonPreloader>
      <CommonPreloader
        width="151px"
        height="31px"
        border-radius="8px"
        preloader-class="mb-5"
        :loading="loading"
      >
        <h3
          class="font-bold text-xl text-white leading-130 pl-4 md:pt-6 md:pb-5 md:pl-0 md:text-2xl"
        >
          {{ religion?.title }}
        </h3>
      </CommonPreloader>
    </div>
    <CommonPreloader
      width="100%"
      height="63px"
      border-radius="8px"
      preloader-class="mb-6"
      :loading="loading"
    >
      <p
        class="mb-4 font-medium text-[13px] md:text-base text-white text-opacity-60 leading-130 ease-all duration-300 group-hover:text-opacity-100 md:pb-6 line-clamp-2"
      >
        {{ religion?.short_description }}
      </p>
    </CommonPreloader>
    <CommonPreloader
      width="96px"
      height="21px"
      border-radius="8px"
      preloader-class="mb-6"
      :loading="loading"
    >
      <NuxtLink
        :to="localePath(`/religions/${religion?.id}`)"
        class="ease-all duration-300 flex text-white group-hover:text-red"
      >
        <p class="font-normal text-[15px] leading-130 md:text-base">
          {{ $t('see_more') }}
        </p>
        <span class="icon-arrow-right mt-0.5 ml-2.5"></span>
      </NuxtLink>
    </CommonPreloader>
  </NuxtLink>
</template>

<script setup lang="ts">
import { TReligion } from '~/types/religions'

interface Props {
  religion?: TReligion
  loading?: boolean
}
defineProps<Props>()
</script>
