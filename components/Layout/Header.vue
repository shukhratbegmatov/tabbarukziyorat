<template>
  <header
    class="fixed top-0 left-0 w-full z-[51] !border-b !border-b-transparent transition-all duration-300"
    :class="[
      { '!bg-dark/90 !border-b-white/20': windowIsScrolled },
      { 'bg-dark': mobileTrigger },
    ]"
  >

    <div class="lg:py-8 py-4 header-gradient relative z-40">
      <div class="container flex items-center justify-between">
        <NuxtLink
          :to="localePath('/')"
          class="inline-block lg:w-[381px] w-[265px]"
        >
          <CommonLogo :key="loading" />
        </NuxtLink>
        <div class="relative lg:flex items-center space-x-6 hidden">
          <NavigationWrapper
            :loading="loading"
            :navigations="navigationLinks"
          />
          <hr
            class="relative w-0.5 h-5 bg-white/10 border-none rounded-[10px]"
          />
          <LanguageSwitcher />
          <hr
            class="relative w-0.5 h-5 bg-white/10 border-none rounded-[10px]"
          />
          <Search />
        </div>
        <button
          class="text-white text-[32px] leading-22 block lg:hidden"
          @click="handleShowMobile"
        >
          <Transition name="fade" mode="out-in" appear>
            <span
              class="transition-all duration-300"
              :class="[mobileTrigger && mobile ? 'icon-xmark' : 'icon-menu']"
            />
          </Transition>
        </button>
      </div>
    </div>
    <Transition name="fade" mode="out-in">
      <Mobile v-if="mobileTrigger && mobile" @handleMenu="handleShowMobile" />
    </Transition>
  </header>
</template>

<script setup lang="ts">
import { ref, watch, computed } from 'vue'
import { useWindowScroll } from '@vueuse/core'
import { useHomeStore } from '~/store/index'
import { useDestinationStore } from '~/store/destination'
import TestMode from '~/components/Layout/TestMode.vue'
interface Emits {
  (e: 'handleShowMobile', value: boolean): void
}
interface Props {
  loading?: boolean
}
defineProps<Props>()
const emit = defineEmits<Emits>()
const mobileTrigger = ref(false)
const destinationStore = useDestinationStore()

const homeStore = useHomeStore()

const countryList = computed(() => destinationStore.countryList)
const religionList = computed(
  () => destinationStore.religionListWithDestination
)
const mobile = computed(() => homeStore.showMobile)
const navigationLinks = ref([
  {
    title: 'about_us_title',
    url: '/about',
  },
  {
    title: 'countries',
    action: 'countries',
    content: countryList,
  },
  // {
  //   title: 'religions',
  //   action: 'religions',
  //   content: religionList,
  // },
  {
    title: 'heritage_map',
    url: '/map',
  },
  {
    title: 'help',
    url: '/help',
  },
  {
    title: 'FAQ',
    url: '/faq',
  },
])

const scroll = useWindowScroll()
const scrollTop = scroll.y
const windowIsScrolled = ref(false)

const handleShowMobile = () => {
  mobileTrigger.value = !mobileTrigger.value
  homeStore.mobileTrigger(mobileTrigger.value)
}

watch(
  () => scrollTop,
  (value) => {
    if (value.value) {
      windowIsScrolled.value = true
    } else {
      windowIsScrolled.value = false
    }
  },
  { deep: true }
)
</script>

<style>
.header-gradient {
  background: linear-gradient(180deg, #07091c -61.25%, rgba(7, 9, 28, 0) 100%);
}
.fade-enter-active {
  animation: Fade 0.2s ease;
}
.fade-leave-active {
  animation: Fade 0.2s ease reverse;
}

@keyframes Fade {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
</style>
