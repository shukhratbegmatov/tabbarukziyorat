<template>
  <div
    class="max-w-[265px] hidden lg:block absolute right-[124px] -top-8 bg-white/5 border border-solid border-white/10 p-3 rounded-3xl instagram-backdrop-blur z-20"
  >
    <div class="space-y-1 mb-[10px] text-center">
      <CommonPreloader
        width="155px"
        height="34px"
        border-radius="8px"
        preloader-class="mb-1 mx-auto"
        :loading="loading"
      >
        <p class="text-white text-2xl font-bold leading-140">
          {{ $t('scan') }}
        </p>
      </CommonPreloader>
      <CommonPreloader
        width="155px"
        height="28px"
        border-radius="8px"
        preloader-class="mb-1 mx-auto"
        :loading="loading"
      >
        <p class="text-white/60 text-xl font-bold leading-140">
          @ziyorati_tabarruk
        </p>
      </CommonPreloader>
    </div>
    <CommonPreloader
      width="240px"
      height="240px"
      border-radius="8px"
      preloader-class="mx-auto"
      :loading="loading"
    >
      <div
        class="overflow-hidden rounded-lg shrink-0 h-[240px] w-[240px] relative overflow-hidden"
      >
        <QRCanvas
          id="capture"
          :options="options"
          class="relative z-10 w-full h-full"
        ></QRCanvas>
      </div>
    </CommonPreloader>
  </div>
</template>

<script lang="ts" setup>
import { QRCanvas } from 'qrcanvas-vue'
import { onMounted, ref } from 'vue'
interface Props {
  loading?: boolean
}
defineProps<Props>()
const options = ref({
  cellSize: 10,
  correctLevel: 'H',
  padding: 12,
  data: 'https://www.instagram.com/@ziyorati_tabarruk',
})

const qrOptions = () => {
  const image = new Image()
  image.src = '/qrLogo.svg'
  image.width = 240
  image.height = 240
  image.onload = () => {
    setTimeout(() => {
      Object.assign(options.value, { logo: image })
    }, 100)
  }
}
onMounted(() => {
  qrOptions()
})
</script>

<style scoped>
/* slightly transparent fallback */
.instagram-backdrop-blur {
  background-color: rgba(7, 9, 28, 0.8);
}

/* if backdrop support: very transparent and blurred */
@supports ((-webkit-backdrop-filter: none) or (backdrop-filter: none)) {
  .instagram-backdrop-blur {
    background-color: rgba(7, 9, 28, 0.8);
    -webkit-backdrop-filter: blur(15px);
    backdrop-filter: blur(15px);
  }
}
</style>
