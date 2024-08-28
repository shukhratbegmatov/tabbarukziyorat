<template>
  <div
    class="flex pl-5 transition-300 hover:bg-white/5 group cursor-pointer"
    :class="{ 'bg-white/[3%]': loading }"
  >
    <div
      class="flex gap-3 h-max cursor-pointer pr-2 py-4 border-b border-dark-200"
    >
      <NuxtLink :to="localePath(`/destination/${data?.slug}`)">
        <CommonPreloader
          width="118px"
          height="72px"
          border-radius="4px"
          :loading="loading"
        >
          <div
            class="aspect-location-image overflow-hidden rounded shrink-0 w-[118px] relative border-white/12"
          >
            <img
              :src="data?.image"
              alt="location image"
              class="w-full h-full object-cover"
            />
            <CommonReligionBadge
              class="absolute bottom-2 left-2"
              :type="data?.religion?.type"
            />
            <div
              class="absolute w-full h-full opacity-0 top-0 lef-0 transition-300 group-hover:opacity-40 bg-dark/80 group-hover:bg-dark flex flex-col items-center justify-center hover:!opacity-100 hover:!bg-dark/80"
            >
              <i class="icon-external-link text-white text-2xl"></i>
              <span class="text-white text-xs">{{ $t('view') }}</span>
            </div>
          </div>
        </CommonPreloader>
      </NuxtLink>
      <div>
        <CommonPreloader
          width="98px"
          height="18px"
          border-radius="4px"
          :loading="loading"
          preloader-class="mb-1"
        >
          <p class="text-gray-300 text-sm mb-1 line-clamp-1">
            {{
              data?.region?.country?.title
                ? data?.region?.country?.title
                : 'Baku, Azerbaijan'
            }}
          </p>
        </CommonPreloader>
        <CommonPreloader
          width="200px"
          height="18px"
          border-radius="4px"
          :loading="loading"
        >
          <h4 class="text-white font-semibold line-clamp-2">
            {{ data?.title }}
          </h4>
        </CommonPreloader>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ILocation } from '~/types/locations'

interface Props {
  data: ILocation
  loading: boolean
}
defineProps<Props>()
</script>
