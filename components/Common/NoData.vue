<template>
  <div class="flex-y-center flex-col max-w-[315px]">
    <img :src="img" alt="no-data" :class="imgStyles" class="mb-4 w-[200px] h-[200px]" />
    <h3 v-if="title" class="font-bold text-2xl text-center leading-130 text-dark mb-3">
      {{ title }}
    </h3>
    <p v-if="description" class="text-dark/60 text-base leading-130 font-medium text-center">
      {{description}}
    </p>
  </div>
</template>

<script setup lang="ts">
export interface Props {
  title: string;
  img: string;
  imgStyles?: string;
  description?: string;
}
withDefaults(defineProps<Props>(), {
  img: "/illustrations/noData.svg",
});
</script>
