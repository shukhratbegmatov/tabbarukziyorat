<template>
  <CommonModal
    max-width
    v-bind="{ show }"
    title=""
    body-style="!max-w-[786px] !bg-transparent !overflow-visible relative"
    button-class="absolute text-xl !text-white -top-2 lg:-top-6 right-0 lg:-right-6 hover:!text-red"
    header-style="!border-[0px]"
    close-on-backdrop
    @close="$emit('close')"
  >
    <div class="text-white" :key="show">
      <GalleryMainSlider
        v-bind="{ images, thumbsSwiper }"
        :active="innerActive"
        @change="innerActive = $event"
      />

      <GallerySThumbnail
        class="mt-4"
        v-bind="{ images }"
        :active="innerActive"
        @swiper="initSwiper"
      />
    </div>
  </CommonModal>
</template>

<script setup lang="ts">
import SwiperClass from 'swiper'

interface Props {
  show: boolean
  images?: string[]
  active: number
  title: string
}

const props = defineProps<Props>()

const innerActive = ref(0)
const thumbsSwiper = ref<SwiperClass>()

const initSwiper = (value) => {
  thumbsSwiper.value = value
}

watch(
  () => props.show,
  () => {
    if (!props.show) {
      innerActive.value = 0
    } else {
      innerActive.value = props.images?.findIndex((el) => el === props.active)
    }
  }
)
</script>
