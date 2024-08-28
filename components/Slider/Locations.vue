<template>
  <Swiper
    v-bind="bottomSettings"
    class="relative -mt-20 w-full !px-5 md:!px-20 !overflow-visible !z-30"
  >
    <SwiperSlide
      class="relative"
      v-for="(location, i) of loading ? 6 : locations"
      :key="i"
    >
      <CardLocation
        :location="!loading ? location : undefined"
        :loading="loading"
      />
    </SwiperSlide>
  </Swiper>
</template>

<script setup lang="ts">
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/effect-fade'
import 'swiper/css/scrollbar'

import { Autoplay, EffectFade } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/vue'

interface Props {
  locations: {}[]
  loading?: boolean
}
defineProps<Props>()

const bottomSettings = {
  slidesPerView: 3,
  spaceBetween: 24,
  loop: true,
  centeredSlides: false,
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
  breakpoints: {
    320: {
      slidesPerView: 1.25,
      spaceBetween: 20,
    },
    480: {
      slidesPerView: 1,
      spaceBetween: 24,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 24,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 24,
    },
  },
  modules: [Autoplay, EffectFade],
}
</script>
