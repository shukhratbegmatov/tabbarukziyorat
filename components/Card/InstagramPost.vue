<template>
  <a
    :href="url"
    target="_blank"
    class="relative block bg-white/5 border w-full border-solid border-white/10 p-2 rounded-xl group w-full"
  >
    <CommonPreloader
      width="100%"
      height="184px"
      border-radius="8px"
      preloader-class="mb-1"
      :loading="loading"
    >
      <div class="overflow-hidden rounded-lg shrink-0 !h-[184px] relative">
        <img :src="image" :alt="name" class="w-full h-full object-cover" />
        <div
          class="absolute w-full h-full opacity-0 top-0 lef-0 transition-300 group-hover:opacity-40 bg-dark/80 group-hover:bg-dark flex flex-col items-center justify-center hover:!opacity-100 hover:!bg-dark/80"
        >
          <i class="icon-external-link text-white text-2xl"></i>
          <span class="text-white text-xs">{{ $t('view_post') }}</span>
        </div>
      </div>
    </CommonPreloader>
    <div class="space-y-1 mt-2">
      <CommonPreloader
        width="74px"
        height="16px"
        border-radius="8px"
        :loading="loading"
      >
        <p class="text-white text-xs font-medium leading-130 space-x-1">
          <span>{{ formatMoneyDecimal(likes) }}</span>
          <span>{{ $t('likes') }}</span>
        </p>
      </CommonPreloader>
      <CommonPreloader
        width="74px"
        height="16px"
        border-radius="8px"
        :loading="loading"
      >
        <p class="text-white text-xs font-normal leading-130 line-clamp-2 my-1">
          {{ text }}
        </p>
      </CommonPreloader>
      <CommonPreloader
        width="52px"
        height="13px"
        border-radius="8px"
        :loading="loading"
      >
        <p class="text-white text-[10px] font-medium leading-130">
          {{ created_at }}
        </p>
      </CommonPreloader>
    </div>
  </a>
</template>

<script setup lang="ts">
import { formatMoneyDecimal } from '../../helpers'

interface TInstagram {
  image?: string
  likes?: number
  text?: string
  created_at?: string
  url?: string
  loading?: boolean
}

withDefaults(defineProps<TInstagram>(), {
  likes: 26763,
  title: 'History about how this building was build ',
  created_at: '2 days ago',
})
</script>
