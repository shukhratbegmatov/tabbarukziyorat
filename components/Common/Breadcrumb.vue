<template>
  <div class="relative bg-light py-4 hidden-on-print overflow-x-hidden z-10">
    <div class="container flex items-center md:overflow-hidden">
      <NuxtLink
        :to="localePath('/')"
        class="flex items-center space-x-1 text-white font-semibold leading-130 group transition duration-300"
      >
        <i
          class="icon-house-medical text-white text-base leading-130 transition-300 group-hover:text-red"
        />
        <p
          class="text-sm text-white font-bold leading-130 transition-300 group-hover:text-red"
        >
          {{ $t('home') }}
        </p>
      </NuxtLink>
      <div
        v-for="(item, index) in menu"
        :key="index"
        class="flex items-center gap-1 overflow-hidden group shrink-0"
      >
        <i
          class="icon-chevron-right text-gray-100 text-sm ml-1"
          v-if="item?.link?.length"
        />
        <NuxtLink
          :to="localePath(item?.link)"
          :class="{
            'pointer-events-none !text-gray-100': index === menu?.length - 1,
          }"
          class="transition-200 flex cursor-pointer items-center text-white font-semibold leading-130 min-w-max group-last:min-w-[100px] sm:group-last:min-w-[200px] text-sm hover:text-red breadcrumb-menu line-clamp-2 transition-300 capitalize"
        >
          <template v-if="index === 0">
            {{ $t(item?.title) }}
          </template>
          <template v-else>
            {{ item?.title }}
          </template>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { TMenu } from '~/types/common'

interface Props {
  menu: TMenu[]
}

defineProps<Props>()
</script>
