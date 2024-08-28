<template>
  <div>
    <Transition name="fade" mode="out-in">
      <slot></slot>
    </Transition>
    <Transition name="fade">
      <CommonLoader v-if="loading" />
    </Transition>
  </div>
</template>
<script setup lang="ts">
import { onMounted, ref } from 'vue'

const loading = ref(true)

onMounted(() => {
  setTimeout(() => {
    loading.value = false
  }, 900)
})
</script>
<style>
.fade-enter-active {
  animation: Fade 0.2s ease;
}
.fade-leave-active {
  animation: Fade 0.2s ease reverse;
}

@keyframes Fade {
  from {
    transform: translateY(-10px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}
</style>
