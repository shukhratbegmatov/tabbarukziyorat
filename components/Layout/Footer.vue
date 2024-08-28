<template>
  <div class="">
    <div class="max-md:border-b-0 border-y-2 border-white/10 relative">
      <div
        class="container grid grid-cols-1 lg:grid-cols-3 items-start gap-10 md:gap-6 pt-6 md:py-9"
      >
        <div>
          <NuxtLink :to="localePath('/')">
            <CommonLogo :key="loading" />
          </NuxtLink>
          <p class="font-normal text-sm leading-140 text-white mt-4">
            {{ $t('footer_text') }}
          </p>
        </div>
        <div class="flex items-end justify-center gap-3 max-lg:order-1 mt-auto">
          <a
            v-if="socials?.telegram"
            :href="socials?.telegram"
            class="icon-telegram text-4xl leading-9 relative group text-white hover:text-red-100 transition-300"
            v-tooltip="'Telegram'"
          >
          </a
          ><a
            v-if="socials?.twitter"
            :href="socials?.twitter"
            class="icon-twitter text-4xl leading-9 relative group text-white hover:text-red-100 transition-300 cursor-pointer"
            v-tooltip="'Twitter'"
          >
          </a
          ><a
            v-if="socials?.youtube"
            :href="socials?.youtube"
            class="icon-youtube text-4xl leading-9 relative group text-white hover:text-red-100 transition-300 cursor-pointer"
            v-tooltip="'Youtube'"
          >
          </a
          ><a
            v-if="socials?.instagram"
            :href="socials?.instagram"
            class="icon-instagram text-4xl leading-9 relative group text-white hover:text-red-100 transition-300 cursor-pointer"
            v-tooltip="'Instagram'"
          >
          </a>
        </div>
        <div class="grid grid-cols-2 gap-x-6 gap-y-4 max-lg:order-0">
          <NuxtLink
            class="text-white text-base font-semibold leading-130 hover:text-white/40 transition-300"
            v-for="(item, index) in links"
            :key="index"
            :to="localePath(item.to)"
          >
            {{ $t(item.text) }}
          </NuxtLink>
        </div>
      </div>
      <img
        src="/pattern/footer.png"
        alt="footer patter"
        class="absolute left-0 top-0 h-full max-md:hidden"
      />
    </div>
    <div class="md:bg-dark-500 pt-4 pb-9 md:py-5">
      <div class="flex-center-between container">
        <p class="text-white text-sm leading-130">
          {{ `© ${new Date().getFullYear()}, Tabarruk Ziyorat` }}
        </p>
        <UICLogo />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'

import { links } from '@/data/footer'
import UICLogo from '~/components/Common/UICLogo.vue'
import { useMainStore } from '~/store/main'

const loading = ref(true)
const mainStore = useMainStore()
const socials = computed(() => mainStore.staticFields)

async function fetchData() {
  return await Promise.all([
    mainStore.fetchSocials(),
    mainStore.fetchStaticFields(),
  ])
}
fetchData().finally(() => {
  loading.value = false
})
</script>
