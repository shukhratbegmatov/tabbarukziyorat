<template>
  <div class="relative h-[482px] lg:h-[682px] flex items-center justify-center">
    <div class="absolute top-0 left-0 w-full shape-top h-[200px] z-20" />
    <div class="absolute bottom-0 left-0 w-full shape-bottom h-[200px] z-10" />
    <div class="absolute left-0 top-0 w-full h-full bg-dark/50 z-20" />
    <Transition name="fade" mode="in-out">
      <h2
        class="absolute w-fit mx-auto top-8 left-0 right-0 text-white text-2xl lg:text-[28px] text-center sm:text-40 font-bold leading-130 font-playfair z-20"
      >
        {{ $t(title) }}
      </h2>
    </Transition>
    <img
      :src="image"
      :alt="title"
      class="absolute left-0 top-0 object-cover w-full h-full z-0"
    />
    <button
      @click="handleShowVideo"
      class="relative flex items-center justify-center w-20 h-20 lg:w-[100px] lg:h-[100px] bg-red-100 transition-300 group group-hover:bg-red rounded-full z-30"
    >
      <i
        class="icon-play text-white text-4xl lg:text-[50px] transition-300 group-hover:scale-110"
      />
    </button>
  </div>
</template>

<script setup lang="ts">
import { toEmbed } from '~/utils'
import { ref } from 'vue'
interface Props {
  title?: string
  image?: string
}
withDefaults(defineProps<Props>(), {
  title: 'promo_video',
})

const emit = defineEmits<{
  (e: 'handleShowVideo'): void
}>()

const handleShowVideo = () => {
  emit('handleShowVideo')
}
</script>

<style scoped>
.shape-top {
  background: linear-gradient(180deg, #07091c 0%, rgba(7, 9, 28, 0) 100%);
}
.shape-bottom {
  background: linear-gradient(180deg, rgba(7, 9, 28, 0) 0%, #07091c 100%);
}
</style>
