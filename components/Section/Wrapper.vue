<template>
  <div class="py-8 md:py-16 container w-full">
    <div
      class="flex-center-between flex-col lg:flex-row gap-4 w-full"
      :class="{ 'flex-center': centered }"
    >
      <div>
        <CommonPreloader
          width="300px"
          height="52px"
          border-radius="4px"
          preloader-class="mb-2"
          :loading="loading"
        >
          <h2
            v-intersection-observer="onIntersectionObserver"
            class="text-2xl md:text-3xl md:text-40 leading-130 text-white font-bold relative w-fit font-playfair"
            :class="[
              { 'pb-3 md:pb-4 title-line': line },
              { 'title-line_full': intersecting },
              { 'mx-auto title-line_centered': centered },
            ]"
          >
            {{ $t(title) }}
          </h2>
        </CommonPreloader>
        <CommonPreloader
          width="350px"
          height="26px"
          border-radius="4px"
          :loading="loading"
        >
          <p
            v-if="subtitle"
            :class="[{ 'text-center': centered }]"
            class="mt-[14px] font-medium leading-130 text-base md:text-xl text-white"
          >
            {{ $t(subtitle) }}
          </p>
        </CommonPreloader>
      </div>
      <slot v-if="!centered" name="suffix" />
    </div>
    <slot />
  </div>
</template>

<script setup lang="ts">
import { vIntersectionObserver } from '@vueuse/components'

interface Props {
  title?: string
  subtitle?: string
  line?: boolean
  centered?: boolean
  loading?: boolean
}
withDefaults(defineProps<Props>(), {
  line: true,
})

const intersecting = ref(false)

function onIntersectionObserver([{ isIntersecting }]) {
  intersecting.value = isIntersecting
}
</script>

<style scoped>
.title-line:after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  max-width: 108px;
  width: 100%;
  height: 2px;
  background: #e54545;
  transition-property: all;
  transition-duration: 0.5s;
  transition-delay: 400ms;
}
.title-line.title-line_full:after {
  max-width: 100%;
}
.title-line.title-line_centered:after {
  left: 50%;
  transform: translateX(-50%);
}
</style>
