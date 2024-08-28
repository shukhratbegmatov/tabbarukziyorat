<template>
  <NuxtLink
    :to="localePath(checkType + id)"
    class="w-full flex items-center space-x-[10px] py-2 pl-2 pr-8 rounded-xl transition-300 group hover:bg-white/5"
  >
    <div class="w-7 h-7 rounded-lg overflow-hidden flex-shrink-0">
      <img
        :src="icon"
        class="w-full h-full !flex-shrink-0"
        alt="Navigation Icon"
      />
    </div>
    <div>
      <p
        class="text-base text-white font-medium leading-130 whitespace-nowrap transition-300 group-hover:text-red"
      >
        {{ title }}
      </p>
      <p
        class="text-sm text-white/60 font-normal leading-130 whitespace-nowrap"
      >
        {{ count }} {{ $t('destinations') }}
      </p>
    </div>
  </NuxtLink>
</template>

<script setup lang="ts">
import { computed } from 'vue'
interface TLink {
  icon?: string
  type?: string
  title?: string
  count?: number
  id?: number
}
const props = withDefaults(defineProps<TLink>(), {
  icon: '/svg/countries/azerbaijan.svg',
  title: 'Uzbekistan',
  count: 32,
})

const checkType = computed(() => {
  return props?.type == 'countries' ? '/country/' : '/religions/'
})
</script>
