<template>
  <div
    class="absolute top-0 left-0 pt-20 pb-6 h-screen w-full bg-dark text-white z-30"
  >
    <div class="container h-full flex flex-col justify-between overflow-y-auto">
      <div>
        <SearchWrapper
          class="max-w-full"
          wrapper-class="relative left-0 w-full"
          :search="search"
          :search-trigger="true"
          :search-content="destinations"
          @handleUpdateSearch="handleSearch"
          @clear="clear"
        />
        <ul class="mt-6 space-y-6">
          <li v-for="(link, i) of mobileLinks" :key="i">
            <NuxtLink
              @click="handleMenu"
              :to="link?.url"
              class="text-white text-2xl font-bold leading-130"
            >
              {{ $t(link?.text) }}
            </NuxtLink>
          </li>
        </ul>
        <LanguageSwitcher
          isMobile
          class="inline-flex mt-6 border border-solid border-white/[8%] rounded-lg p-2"
          option-styles="!grid-cols-2 left-0 !-top-[250px] !p-2"
        />
      </div>
      <div class="flex items-center justify-between mt-10">
        <span class="text-white text-sm font-normal leading-130">
          © {{ new Date().getFullYear() }}, {{ $t('naming') }}
        </span>
        <UICLogo />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import UICLogo from '~/components/Common/UICLogo.vue'
import { mobileLinks } from '~/data/mobile'
import { useDestinationStore } from '~/store/destination'
interface Emits {
  (e: 'handleMenu'): void
}

const emit = defineEmits<Emits>()

const destinationStore = useDestinationStore()

const destinations = computed(() => destinationStore.destinationsSearch)
const search = ref('')

const handleSearch = async (value: string) => {
  search.value = value
  await destinationStore.fetchDestinations(search.value, undefined, undefined)
}
const handleMenu = () => {
  emit('handleMenu')
}
const clear = () => {
  search.value = ''
}
</script>
