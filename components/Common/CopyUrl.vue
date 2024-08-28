<template>
  <div
    class="cursor-pointer relative bg-white/10 hover:bg-gray-650 flex items-center justify-between pl-2 rounded-lg group max-w-[584px] transition-300 single-detail"
    @click="copyUrl"
  >
    <span
      style="word-break: break-all"
      class="line-clamp-1 text-white leading-130 transition-300 max-w-[252px] break-all"
    >
      {{ url }}
    </span>
    <span
      class="w-8 h-8 shrink-0 bg-red-100 group-hover:bg-[#e52b2b] transition-300 rounded-md flex-center ml-2 group relative"
    >
      <i class="icon-file-copy text-2xl leading-6 text-white" />

      <CommonTooltip with-trigger :show="copied">
        {{ $t('copied') }}
      </CommonTooltip>
    </span>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'

const url = computed(() => {
  return process.client ? window.location.href.replace(/^https?:\/\//, '') : ''
})
const copied = ref(false)
async function copyUrl() {
  copied.value = true
  await navigator.clipboard.writeText(window.location.href)
  setTimeout(() => {
    copied.value = false
  }, 1500)
}
</script>

<style scoped>
.text-wrapper {
  border-radius: 8px 0 0 8px;
}

.icon-wrapper {
  border-radius: 0 8px 8px 0;
}
.tooltip-custom {
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
}
@supports ((-webkit-backdrop-filter: none) or (backdrop-filter: none)) {
  .single-detail {
    -webkit-backdrop-filter: blur(15px);
    backdrop-filter: blur(15px);
  }
}
</style>
