<template>
  <div class="relative w-full h-full z-30">
    <Swiper
      v-bind="settings"
      class="custom-swiper relative h-full"
      @slideChange="onSlideChange"
    >
      <SwiperSlide
        v-for="(slide, i) of images?.destination
          ? images?.destination
          : localeData"
        :key="i"
        class="relative h-full transition-all duration-300 !z-50"
      >
        <BannerSingle
          :title="slide?.title"
          :image="slide?.image"
          :text="slide?.short_description"
          :loading="loading"
          content
        >
          <template #prefix>
            <CommonPreloader
              v-bind="{ loading }"
              width="200px"
              height="24px"
              preloader-class="mb-1"
            >
              <div class="flex items-center text-white space-x-2">
                <i class="icon-map-pin text-lg lg:text-2xl" />
                <span class="text-sm lg:text-xl font-medium leading-130">
                  <span>
                    {{ slide?.region?.title }}
                  </span>
                  <span v-if="slide?.region?.title">,</span>
                  <span>
                    {{ slide?.destination_country?.title }}
                  </span>
                </span>
              </div>
            </CommonPreloader>
          </template>
          <template #suffix>
            <CommonPreloader
              v-bind="{ loading }"
              width="150px"
              height="56px"
              preloader-class="mb-1"
            >
              <NuxtLink :to="localePath(`/destination/${slide?.slug}`)">
                <CommonButton
                  button-class="!px-7 lg:!px-8 !py-3 !flex !items-center"
                >
                  <span class="text-base font-semibold leading-130 mr-1">{{
                    $t('explore')
                  }}</span>
                  <i class="icon-arrow-right text-2xl" />
                </CommonButton>
              </NuxtLink>
            </CommonPreloader>
          </template>
        </BannerSingle>
      </SwiperSlide>
    </Swiper>
    <div
      class="absolute right-[12%] top-[40%] hidden xl:flex"
      v-if="destinationLength"
    >
      <div class="flex flex-col items-center">
        <span class="relative text-white text-xl font-medium z-10 mb-3">
          0{{ activeIndex }}
        </span>
        <div class="swiper-pagination"></div>
        <span class="relative text-white text-xl font-medium z-10 mt-1">
          0{{ destinationLength }}
        </span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Autoplay, EffectFade, Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { ref } from 'vue'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/effect-fade'
import 'swiper/css/scrollbar'
interface Props {
  images?: { destination: any[] }
  loading?: boolean
}
const props = defineProps<Props>()
const settings = {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: false,
  pagination: {
    el: '.swiper-pagination',
    clickable: 'false',
    type: 'bullets',
    renderBullet: function (index, className) {
      return (
        '<span class="' +
        className +
        '">' +
        '<em>' +
        '</em>' +
        '<i></i>' +
        '<b></b>' +
        '</span>'
      )
    },
  },
  effect: 'fade',
  centeredSlides: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  modules: [Autoplay, EffectFade, Pagination],
}

const activeIndex = ref(1)

const localeData = computed(() => [
  {
    title: 'Bibi Khanum Mosque',
    short_description:
      '<p>Stunning showcase of Islamic architecture in Samarkand, Uzbekistan, with three ornate madrasas adorned in blue tiles and calligraphic inscriptions, dating back to the 15th century.</p>',
    image: '/registan.webp',
  },
])

const destinationLength = computed(() => props?.images?.destination?.length)

const onSlideChange = (value: object) => {
  activeIndex.value = value?.activeIndex + 1
}
</script>

<style>
.swiper-pagination {
  position: relative;
  width: 3px !important;
  height: 134px !important;
  background: rgba(255, 255, 255, 0.4);
  border-radius: 3px;
  overflow: hidden;
  transform: rotate(180deg);
}
.swiper-pagination-bullet {
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0px !important;
  width: 3px !important;
  height: 100% !important;
  text-align: left;
  border-radius: 0;
  opacity: 1;
  margin-right: 0px;
  background-color: transparent;
}
.swiper-pagination-bullet em {
  font-size: 15px;
  line-height: 28px;
  font-weight: bold;
  letter-spacing: -0.38px;
  color: #111;
}
.swiper-pagination-bullet i {
  position: absolute;
  bottom: 0;
  left: 0;
  z-index: 1;
  width: 100%;
  height: 100%;
  background-color: #fff;
}
.swiper-pagination-bullet b {
  position: absolute;
  bottom: 0;
  left: -8px;
  z-index: 2;
  width: 10px;
  height: 0%;
  background-color: #fff;
}
.swiper-pagination-bullet-active {
  background-color: transparent;
}
.swiper-pagination-bullet-active b {
  animation-name: countingBar;
  animation-duration: 3s;
  animation-timing-function: ease-in;
  animation-iteration-count: 1;
  animation-direction: alternate;
  animation-fill-mode: forwards;
}

@keyframes countingBar {
  0% {
    height: 0;
  }
  100% {
    height: 100%;
  }
}
</style>
