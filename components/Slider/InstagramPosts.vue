<template>
  <Swiper v-bind="settings" class="instagram-slider">
    <SwiperSlide
      v-for="(post, index) of loading ? 10 : posts"
      :key="index"
      class="!w-[200px] !h-[277px]"
    >
      <CardInstagramPost
        :image="post?.image"
        :created_at="post?.created_at"
        :text="post?.text"
        :url="post?.link"
        :likes="post?.likes"
        :loading="loading"
      />
    </SwiperSlide>
  </Swiper>
</template>

<script setup lang="ts">
import 'swiper/css'
import 'swiper/css/free-mode'

import { Autoplay } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { TInstagram } from '~/types/instagram'

interface Props {
  posts: {}[]
  loading?: boolean
}
defineProps<Props>()
const settings = {
  slidesPerView: 'auto',
  spaceBetween: 24,
  loop: true,
  freeMode: true,
  autoplay: {
    delay: 2000,
  },
  breakpoints: {
    320: {
      slidesPerView: 'auto',
      spaceBetween: 16,
    },
    768: {
      slidesPerView: 'auto',
      spaceBetween: 24,
    },
  },
  modules: [Autoplay],
}
</script>

<style>
.instagram-slider .swiper-wrapper {
  padding-bottom: 1rem !important;
}
</style>
