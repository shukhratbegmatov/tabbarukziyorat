<template>
  <div class="bg-dark">
    <LayoutHeader :loading="loading" />
    <Transition name="fade" mode="out-in">
      <div :key="$route.name" class="overflow-x-hidden">
        <slot></slot>
      </div>
    </Transition>
    <LayoutFooter />
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'

import { useDestinationStore } from '~/store/destination'
import { useMainStore } from '~/store/main'

const destinationStore = useDestinationStore()
const loading = ref(true)

async function fetchData() {
  return await Promise.all([
    destinationStore.fetchReligionListWithDestination(),
    destinationStore.fetchCountryList(),
  ])
}
fetchData().finally(() => {
  loading.value = false
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
