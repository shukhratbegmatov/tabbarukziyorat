<template>
  <div class="flex items-center">
    <SearchWrapper
      :class="[searchTrigger ? 'max-w-full' : 'max-w-0']"
      :search="search"
      :search-trigger="searchTrigger"
      :search-content="destinations"
      @handleUpdateSearch="handleUpdateSearch"
      @clear="clear"
    />
    <button
      class="text-2xl text-white transition-all duration-150 hover:text-white/40"
      :class="[searchTrigger ? 'icon-xmark' : 'icon-search']"
      @click="handleShowSearch"
    />
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'

import Empty from '~/components/Search/Empty.vue'
import { useDestinationStore } from '~/store/destination'
const destinationStore = useDestinationStore()

const search = ref('')
const searchTrigger = ref(false)

const destinations = computed(() => destinationStore.destinationsSearch)

const handleShowSearch = () => {
  search.value = ''
  setTimeout(() => {
    searchTrigger.value = !searchTrigger.value
  }, 100)
}
const clear = () => {
  search.value = ''
}
const handleUpdateSearch = async (value: string) => {
  search.value = value
  await destinationStore.fetchDestinations(search.value, undefined, undefined)
}
</script>

<style scoped>
.fade-enter-active {
  animation: Fade 0.2s ease;
}
.fade-leave-active {
  animation: Fade 0.2s ease reverse;
}

@keyframes Fade {
  from {
    transform: translateY(-5px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}
.slideDown-enter-active {
  animation: slideDown 0.2s linear;
}
.slideDown-leave-active {
  animation: slideDown 0.2s linear reverse;
}

@keyframes slideDown {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
/* slightly transparent fallback */
.backdrop-blur {
  background-color: rgba(7, 9, 28, 0.12);
}

/* if backdrop support: very transparent and blurred */
@supports ((-webkit-backdrop-filter: none) or (backdrop-filter: none)) {
  .backdrop-blur {
    background-color: rgba(7, 9, 28, 0.12);
    -webkit-backdrop-filter: blur(30px);
    backdrop-filter: blur(30px);
  }
}
</style>
