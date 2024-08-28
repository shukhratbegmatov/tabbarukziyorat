<template>
  <div class="relative pb-8 lg:pb-16">
    <img
      src="/pattern/help.png"
      alt="Main pattern"
      class="absolute w-full h-auto -top-[60%] left-0 z-20"
    />
    <div
      class="relative container grid xl:grid-cols-2 gap-6 py-16 items-end gallery-slider z-30"
    >
      <div>
        <SectionWrapper
          title="about_us"
          subtitle="about_us_project_desc"
          class="!p-0"
        />
        <div class="mt-8">
          <h4 class="text-xl font-semibold leading-130 mb-3">
            {{ $t('our_supporters') }}
          </h4>
          <div
            class="flex gap-3 p-2 flex-col items-start md:items-center md:flex-row"
          >
            <div
              class="flex-y-center gap-3"
              v-for="(supporter, i) of about?.supporters"
            >
              <div
                class="flex-y-center gap-3"
                @mouseenter="showSupporter(i)"
                @mouseleave="hideSupporter"
              >
                <img :src="supporter?.logo" :alt="supporter?.name" />
                <CollapseTransition
                  v-if="width > 1024"
                  :duration="400"
                  dimension="width"
                >
                  <div v-if="toggleSupporter === i">
                    <p class="inline-block !w-[300px]">
                      {{ supporter?.name }}
                    </p>
                  </div>
                </CollapseTransition>
                <div v-else>
                  <p class="inline-block !w-[300px]">
                    {{ supporter?.name }}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="mt-8 flex-y-center gap-4 max-sm:flex-col">
            <NuxtLink :to="localePath('/map')" class="!w-full sm:!w-auto">
              <CommonButton class="!pl-8 !pr-7 !py-3 max-sm:w-full">
                <span
                  class="flex-y-center gap-1 text-base font-semibold leading-150"
                >
                  {{ $t('explore') }}
                  <i class="icon-earth-globe text-2xl leading-6" />
                </span>
              </CommonButton>
            </NuxtLink>
            <NuxtLink :to="localePath('/about')" class="!w-full sm:!w-auto">
              <CommonButton
                class="!pl-8 !pr-7 !py-3 max-sm:w-full"
                variant="secondary"
              >
                <span
                  class="flex-y-center gap-1 text-base font-semibold leading-150"
                >
                  {{ $t('more_about_us') }}
                  <i class="icon-arrow-right text-2xl leading-6" />
                </span>
              </CommonButton>
            </NuxtLink>
          </div>
        </div>
      </div>
      <div class="relative group">
        <Swiper class="w-full h-[342px]" v-bind="settings">
          <SwiperSlide v-for="(item, index) in about?.images" :key="index">
            <img
              class="rounded-xl h-full object-cover w-full"
              v-lazy="{ src: item?.image, delay: 500 }"
              alt="About us images"
            />
          </SwiperSlide>
        </Swiper>
        <button
          class="w-8 h-8 lg:w-11 lg:h-11 text-2xl flex navigation-button nav-button-prev icon-arrow-left lg:opacity-0 group-hover:opacity-100 max-md:hidden cursor-pointer"
        />
        <button
          class="w-8 h-8 lg:w-11 lg:h-11 text-2xl flex navigation-button nav-button-next icon-arrow-right lg:opacity-0 group-hover:opacity-100 max-md:hidden cursor-pointer"
        />
      </div>
    </div>
    <div class="container items-center grid md:grid-cols-4 gap-6">
      <CardInfoCard
        v-for="(about, i) of statistics"
        :key="i"
        :icon="about?.icon"
        :title="about?.title"
        :count="about?.count"
        class="!bg-white/10"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import 'swiper/css'
import CollapseTransition from '@ivanv/vue-collapse-transition/src/CollapseTransition.vue'

import { Navigation } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { useWindowSize } from '@vueuse/core'

const { width } = useWindowSize()
interface Props {
  about?: {}
  statistics?: {}[]
}
defineProps<Props>()

const toggleSupporter = ref(null)

const showSupporter = (target: number) => {
  toggleSupporter.value = target
}
const hideSupporter = () => {
  toggleSupporter.value = null
}
const settings = {
  slidesPerView: 'auto',
  allowTouchMove: false,
  navigation: {
    prevEl: '.nav-button-prev',
    nextEl: '.nav-button-next',
  },
  breakpoints: {
    320: {
      allowTouchMove: true,
    },
    768: {
      allowTouchMove: false,
    },
  },
  modules: [Navigation],
}
</script>

<style scoped>
@media screen and (min-width: 768px) {
  .gallery-slider .swiper-wrapper:hover .swiper-slide:not(:hover) {
    max-width: 15%;
  }
  .gallery-slider .swiper-slide:hover {
    max-width: 40%;
  }
  .gallery-slider .swiper-slide {
    max-width: 20%;
  }
}
@media (min-width: 640px) and (max-width: 767px) {
  .gallery-slider .swiper-slide {
    max-width: 25%;
  }
}
@media (min-width: 400px) and (max-width: 639px) {
  .gallery-slider .swiper-slide {
    max-width: calc(100% / 3);
  }
}
@media (min-width: 320px) and (max-width: 400px) {
  .gallery-slider .swiper-slide {
    max-width: 50%;
  }
}
.gallery-slider .swiper-slide {
  transition: all 0.3s;
  margin-right: 0 !important;
  padding-right: 8px;
}
.gallery-slider .navigation-button {
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  line-height: 24px;
  color: #07091c;
  position: absolute;
  z-index: 2;
  top: 50%;
  transform: translateY(-50%) translateX(-50%);
  transition: 0.3s all;
}
.gallery-slider .navigation-button:hover {
  color: #ffffff !important;
}
.gallery-slider .navigation-button.nav-button-prev {
  left: 0;
}
.gallery-slider .navigation-button.nav-button-next {
  left: 100%;
}
.navigation-button.swiper-button-disabled {
  background: rgba(255, 255, 255, 0.2);
  color: #252738;
}
.navigation-button.swiper-button-disabled:hover {
  color: #252738;
}
@supports ((-webkit-backdrop-filter: none) or (backdrop-filter: none)) {
  .gallery-slider .navigation-button {
    backdrop-filter: blur(2px);
  }
}
</style>
