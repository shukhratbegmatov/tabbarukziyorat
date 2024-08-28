<template>
  <div>
    <div class="container max-w-[1101px]">
      <slot name="suffix" />
    </div>
    <DestinationMarquee v-bind="{ images }" @open="openModal" />
    <GalleryModal
      v-bind="{ images, show }"
      :active="activeIndex"
      @close="show = false"
    />
  </div>
</template>

<script setup lang="ts">
import { watch } from 'vue'

interface Props {
  images: {
    id: number
    image: string
    title: string
  }[]
}

defineProps<Props>()

const activeIndex = ref(0)
const show = ref(false)

function openModal(index) {
  activeIndex.value = index
  show.value = true
}

watch(
  () => show.value,
  (newValue) => {
    if (!newValue) {
      document.body.style.overflowY = 'auto'
    } else {
      document.body.style.overflowY = 'hidden'
    }
  }
)
</script>
