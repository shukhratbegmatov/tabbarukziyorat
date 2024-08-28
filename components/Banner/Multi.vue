<template>
  <div class="relative w-full h-[200px] lg:h-[550px]">
    <div class="w-full h-full flex-y-center relative" v-if="images">
      <div
        class="w-full h-full border-r border-solid border-black -skew-x-[16deg] relative overflow-hidden z-[1]"
        :class="{ 'border-r-[0px]': index === images?.length - 1 }"
        v-for="(item, index) in images"
        :key="index"
      >
        <img
          v-lazy="{ src: item?.image, delay: 500 }"
          class="w-full h-full absolute skew-x-[16deg] object-cover scale-[2] lg:scale-[1.8] xl:scale-[1.6]"
          :class="{
            'opacity-0': index === 0 || index === images?.length - 1,
          }"
          alt="banner-image"
        />
      </div>
      <img
        v-lazy="{ src: firtsImage, delay: 500 }"
        class="w-full h-full absolute left-0 max-w-[30%] object-cover"
        alt="banner-image"
      />
      <img
        v-lazy="{ src: images[images?.length - 1]?.image, delay: 500 }"
        class="w-full h-full absolute right-0 max-w-[30%] object-cover"
        alt="banner-image"
      />
      <div class="w-full h-full absolute inset-0 bg-dark/20 z-[2]" />
    </div>
    <div class="w-full h-full flex-y-center relative" v-else>
      <div
        class="w-full h-full border-r border-solid border-black -skew-x-[16deg] relative overflow-hidden z-[1]"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
interface Props {
  images: {
    image: string
  }[]
}

const props = defineProps<Props>()

const firtsImage = computed(() => props.images[0]?.image)
</script>
