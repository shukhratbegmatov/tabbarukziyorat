<template>
  <NuxtLink
    :to="localePath(`/destination/${location?.slug}`)"
    class="w-auto inline-block flex gap-3 rounded-xl border border-solid border-white/10 p-3 transition-300 group hover:border-white/60 location-backdrop-blur"
  >
    <CommonPreloader v-bind="{ loading }" width="75px" height="66px">
      <div
        class="aspect-location-image overflow-hidden rounded shrink-0 w-[75px] h-[66px] md:h-22 md:w-[100px] relative border-white/12"
      >
        <img
          :src="location?.image"
          alt="location image"
          class="w-full h-full object-cover"
        />
      </div>
    </CommonPreloader>
    <div
      class="flex flex-col items-start justify-center space-y-[3.75px] md:space-y-[5px]"
    >
      <CommonPreloader v-bind="{ loading }" width="70px" height="14px">
        <p
          class="text-gray-300 text-[13px] md:text-sm mb-1 line-clamp-1 leading-130"
        >
          <span>
            {{ location?.region?.title }}
          </span>
          <span v-if="location?.region?.title">,</span>
          <span>
            {{ location?.destination_country?.title }}
          </span>
        </p>
      </CommonPreloader>
      <CommonPreloader v-bind="{ loading }" width="192px" height="28px">
        <h4
          class="text-white text-base md:text-xl font-semibold line-clamp-2 leading-130"
        >
          {{ location?.title }}
        </h4>
      </CommonPreloader>
    </div>
  </NuxtLink>
</template>
<script setup lang="ts">
import { TLocation } from '~/types/locations'

interface Props {
  location?: TLocation
  loading?: boolean
}
defineProps<Props>()
</script>
<style>
/* slightly transparent fallback */
.location-backdrop-blur {
  background-color: rgba(255, 255, 255, 10%);
}

/* if backdrop support: very transparent and blurred */
@supports ((-webkit-backdrop-filter: none) or (backdrop-filter: none)) {
  .location-backdrop-blur {
    background-color: rgba(255, 255, 255, 10%);
    -webkit-backdrop-filter: blur(15px);
    backdrop-filter: blur(15px);
  }
}
</style>
