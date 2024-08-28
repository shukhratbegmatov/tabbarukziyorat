<template>
  <SectionWrapper centered title="statements" subtitle="statements_sub">
    <div class="relative md:px-[70px] xl:px-[100px]">
      <Swiper v-bind="settings">
        <SwiperSlide
          v-for="(statement, i) of statements"
          :key="i"
          class="custom-state transition-all duration-300"
        >
          <StatementCard :statement="statement" />
        </SwiperSlide>
      </Swiper>
      <button
        class="w-14 h-14 bg-white/[0.12] rounded-full items-center justify-center slider-nav-prev lg:flex hidden absolute left-0 top-1/2 cursor-pointer group"
      >
        <i
          class="icon-arrow-left text-3xl text-dark transition-300 group-hover:!text-white"
        />
      </button>
      <button
        class="w-14 h-14 bg-white/[0.12] rounded-full items-center justify-center slider-nav-next lg:flex hidden absolute right-0 top-1/2 cursor-pointer group"
      >
        <i
          class="icon-arrow-right text-3xl text-dark transition-300 group-hover:!text-white"
        />
      </button>
    </div>
  </SectionWrapper>
</template>

<script setup lang="ts">
import 'swiper/css'
import 'swiper/css/navigation'

import { Autoplay, Navigation } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/vue'

import StatementCard from '~/components/Card/StatementCard.vue'
interface Props {
  statements?: {}
}
defineProps<Props>()
const settings = {
  slidesPerView: 3,
  spaceBetween: 30,
  loop: true,
  navigation: {
    nextEl: '.slider-nav-next',
    prevEl: '.slider-nav-prev',
  },
  centeredSlides: true,
  autoplay: {
    delay: 1000,
    disableOnInteraction: false,
  },
  breakpoints: {
    640: {
      slidesPerView: 1,
      spaceBetween: 55,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 55,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 55,
    },
  },
  modules: [Autoplay, Navigation],
}
</script>

<style scoped>
@media screen and (min-width: 1024px) {
  .swiper-slide-active {
    transform: scale(1.2);
  }
  .swiper {
    padding-top: 110px;
    padding-bottom: 64px;
  }
}
@media screen and (max-width: 1024px) {
  .swiper {
    padding-top: 80px;
  }
}
</style>
