<template>
  <div
    class="user-image w-[200px] h-[120px] md:w-[280px] md:h-[200px] rounded-xl cursor-pointer relative preloader-image overflow-hidden"
  >
    <img
      :src="card?.image"
      class="w-full h-full object-cover"
      alt="gallery-image"
    />
  </div>
</template>

<script setup lang="ts">
interface Props {
  card: {
    id: string
    image: string
  }
}

defineProps<Props>()
</script>


