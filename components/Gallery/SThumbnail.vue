<template>
  <div>
    <!--      @click="changeSlide"-->
    <Swiper
      v-bind="settings"
      :watch-slides-progress="true"
      :prevent-clicks="false"
      :prevent-clicks-propagation="false"
      @swiper="onInit"
    >
      <SwiperSlide v-for="(image, index) in images" :key="index">
        <div
          class="w-full cursor-pointer overflow-hidden transition-300 aspect-video relative overflow-hidden rounded-xl border-[2px] border-solid border-white/20"
        >
          <div
            class="w-full h-full bg-[#07091CA3] absolute inset-0 transition-300"
            :class="{ 'opacity-0': active === index }"
          />
          <img
            :src="image?.image"
            alt="images"
            class="w-full h-full object-cover"
          />
        </div>
      </SwiperSlide>
    </Swiper>
  </div>
</template>

<script setup lang="ts">
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/thumbs'

import { Swiper, SwiperSlide } from 'swiper/vue'
interface Props {
  images: string[]
  active: number
}

defineProps<Props>()
const emit = defineEmits(['change', 'init'])
const settings = {
  spaceBetween: 20,
  slidesPerView: 3,
  breakpoints: {
    200: {
      slidesPerView: 3,
    },
    600: {
      slidesPerView: 4,
    },
    1024: {
      slidesPerView: 5,
    },
  },
}

const imageSlider = ref()

function onInit(swiper: any) {
  imageSlider.value = swiper
  emit('swiper', swiper)
}

// function changeSlide(e: any) {
//   emit('change', e?.clickedIndex)
//   console.log(e?.clickedIndex)
// }
</script>
