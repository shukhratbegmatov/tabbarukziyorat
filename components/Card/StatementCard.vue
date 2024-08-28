<template>
  <div
    class="statement-card relative w-full flex items-start flex-col rounded-[20px] border border-solid border-white/20 pb-[70px] px-3 transition-all duration-300 bg-dark-400"
  >
    <div class="flex items-center justify-center flex-col mb-5 w-full">
      <div
        class="flex-shrink-0 w-[84px] h-[84px] rounded-full border border-gray-200 overflow-hidden -mt-[45px] custom-shadow"
      >
        <img
          :src="statement?.image"
          :alt="statement?.full_name"
          class="w-full h-full object-cover"
        />
      </div>
      <div class="flex flex-col items-center w-full mt-4 space-y-[6.8px]">
        <p class="custom-title text-red-100 text-base leading-130 font-bold">
          {{ statement?.full_name }}
        </p>
        <p
          class="custom-subtitle text-white/80 text-sm leading-130 font-medium"
        >
          {{ statement?.position }}
        </p>
      </div>
    </div>

    <p class="custom-text text-sm text-white font-bold leading-130 text-center">
      {{ statement?.statement }}
    </p>
    <span
      class="icon-uni-cut absolute bottom-0 right-0 text-gray-100 text-[58px] opacity-5"
    />
  </div>
</template>

<script lang="ts" setup>
import { TStatement } from '~/types/common'

interface Props {
  statement?: TStatement
}
defineProps<Props>()
</script>
<style scoped>
.swiper-slide-active .statement-card .custom-shadow {
  filter: drop-shadow(0px 0px 24px rgba(255, 255, 255, 0.2));
}
.swiper-slide-active .statement-card .custom-title {
  /*font-size: 18px;*/
  color: #e64545;
}
</style>
