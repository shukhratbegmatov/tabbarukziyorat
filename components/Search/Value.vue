<template>
  <li class="text-white space-y-0.5" @click="handleCloseMobile">
    <NuxtLink :to="localePath(`/destination/${slug}`)" class="w-full">
      <Highlighter
        class="text-base text-white font-medium leading-130"
        highlight-class-name="bg-[#E54545] text-white rounded"
        :search-words="[search ?? '']"
        :text-to-highlight="title"
      />
      <p class="text-xs text-white/80 font-normal leading-130">
        <span>{{ $t('countries') }}</span>
        <span class="mx-0.5"> / </span>
        <span>{{ breadcrumb?.country?.title }}</span>
        <span class="mx-0.5" v-if="breadcrumb?.title"> / </span>
        <span>{{ breadcrumb?.title }}</span>
      </p>
    </NuxtLink>
  </li>
</template>

<script setup lang="ts">
import Highlighter from 'vue-highlight-words'
import { useHomeStore } from '~/store/index'
interface Props {
  title?: string
  search?: string
  slug?: string
  breadcrumb?: {}[]
}
defineProps<Props>()

const homeStore = useHomeStore()

const handleCloseMobile = () => {
  homeStore.mobileTrigger(false)
}
</script>
