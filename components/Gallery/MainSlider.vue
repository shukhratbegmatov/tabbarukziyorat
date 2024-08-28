<template>
  <div class="relative">
    <div
      class="slide-prev flex-center absolute top-1/2 -left-[30%] group transition-200 cursor-pointer"
    >
      <div
        class="w-12 h-12 rounded-lg border border-solid border-white/10 bg-white/20 flex-center hover:bg-white/30"
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12.5 15L7.5 10L12.5 5"
            stroke="white"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </div>
    </div>
    <ClientOnly>
      <Swiper
        v-bind="settings"
        @swiper="onInit"
        @activeIndexChange="sliderChange"
        :thumbs="{ swiper: thumbsSwiper }"
      >
        <SwiperSlide v-for="(image, index) in images" :key="index">
          <div
            class="aspect-video border-[2px] border-solid border-white/[5%] rounded-[20px] overflow-hidden relative"
          >
            <img
              :src="image?.image"
              alt="images"
              class="w-full h-full object-cover"
            />
            <div
              class="w-full h-full absolute inset-0 flex items-end gallery-shadow p-4 lg:p-6"
            >
              <p
                class="text-lg lg:text-xl leading-130 font-semibold text-white"
              >
                {{ image?.title }}
              </p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </ClientOnly>

    <div
      class="slide-next flex-center absolute top-1/2 -right-[30%] group transition-200 cursor-pointer"
    >
      <div
        class="w-12 h-12 rounded-lg border border-solid border-white/10 bg-white/20 flex-center hover:bg-white/30 transition-300"
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M7.5 5L12.5 10L7.5 15"
            stroke="white"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/thumbs'
import { watch } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import SwiperClass, { Navigation, Keyboard, EffectFade, Thumbs } from 'swiper'
interface Props {
  images: {
    image: string
    title: string
  }[]
  active: number
  thumbsSwiper?: SwiperClass
}

const props = defineProps<Props>()

const settings = {
  spaceBetween: 20,
  grabCursor: true,
  effect: 'fade',
  navigation: {
    nextEl: '.slide-next',
    prevEl: '.slide-prev',
  },
  keyboard: { enabled: true },
  modules: [Navigation, Keyboard, EffectFade, Thumbs],
}

const emit = defineEmits(['change'])
const imageSlider = ref()

function sliderChange(e: any) {
  emit('change', e?.activeIndex)
}

function onInit(swiper: any) {
  imageSlider.value = swiper
}
onMounted(() => {
  setTimeout(() => {
    imageSlider.value.slideTo(props.active)
  }, 100)
})
</script>

<style scoped>
.gallery-shadow {
  background: linear-gradient(180deg, rgba(7, 9, 28, 0) 57.52%, #07091c 100%);
}
</style>
