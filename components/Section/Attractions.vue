<template>
  <div>
    <div class="container max-w-[1101px]">
      <div
        class="flex items-center flex-col md:flex-row md:justify-between mb-10 gap-y-4"
      >
        <div class="text-center md:text-left">
          <p
            class="text-white font-bold leading-130 text-2xl md:text-[28px] font-playfair mb-1 md:mb-2"
          >
            {{ $t('attractions') }}
          </p>
          <p class="text-white opacity-60 font-semibold text-sm leading-130">
            {{ $t('attractions_sub') }}
          </p>
        </div>
        <CommonAttractionTab
          v-if="religionData?.length"
          :list="religions"
          :model-value="activeTab"
          @update:modelValue="handleUpdateTab"
        />
      </div>
    </div>
    <Transition name="fade" mode="out-in">
      <div
        class="relative"
        v-if="religionData.length"
        :class="religionData?.length < 5 ? 'max-w-[1101px] mx-auto' : ''"
      >
        <Swiper v-bind="settings">
          <SwiperSlide
            v-for="(item, idx) in religionData"
            :key="idx"
            class="!w-[200px] sm:!w-[220px] md:!w-[280px] !h-[220px] sm:!h-[240px] md:!h-[300px]"
          >
            <CardSingleAttractions
              :data="item"
              :card-loading="loading"
              card-class="!w-[200px] sm:!w-[220px] md:!w-[280px] h-[220px] sm:h-[240px] md:h-[300px]"
            />
          </SwiperSlide>
        </Swiper>
        <div
          class="gradient-left w-[85px] sm:w-[200px] md:w-[300px] h-full"
          :class="religionData?.length < 5 ? 'opacity-0' : ''"
        ></div>
        <div
          class="gradient-right w-[85px] sm:w-[200px] md:w-[300px] h-full"
          :class="religionData?.length < 5 ? 'opacity-0' : ''"
        ></div>
      </div>
    </Transition>
    <NuxtLink :to="localePath(`/attractions/${route.params.id}`)">
      <Button
        variant="secondary"
        button-class="lg:!px-7 lg:!px-3"
        class="mx-auto mt-9"
      >
        <template #default>
          <div class="flex-center space-x-1">
            <span>{{ $t('view_all') }}</span>
            <span class="icon-arrow-right text-2xl"></span>
          </div>
        </template>
      </Button>
    </NuxtLink>
  </div>
</template>

<script setup lang="ts">
import 'swiper/css'
import 'swiper/css/free-mode'
import { attractions } from '~/data/attractions'

import { Autoplay } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { useMounted } from '~/composables/useMounted'
import { $api } from '~/composables/useFetcher'
import { TCommonFetcher } from '~/types/common'
import { useRoute } from 'vue-router'
import Button from '~/components/Common/Button.vue'

const activeTab = ref(1)
const loading = ref(false)
const mounted = useMounted()

const settings = {
  slidesPerView: 'auto',
  spaceBetween: 24,
  loop: true,
  freeMode: true,
  autoplay: {
    delay: 3000,
  },
  breakpoints: {
    320: {
      slidesPerView: 'auto',
      spaceBetween: 16,
    },
    768: {
      slidesPerView: 'auto',
      spaceBetween: 24,
    },
  },
  modules: [Autoplay],
}

const route = useRoute()

interface Props {
  religions: object
}

defineProps<Props>()

const religionData = ref([])
function fetchReligionSingle() {
  loading.value = true
  return new Promise((resolve, reject) => {
    $api
      .$get<TCommonFetcher>(
        `/destination/CountryAttractionListByReligion?religion__id=${activeTab.value}&destination_country__id=${route.params.id}`
      )
      .then((response) => {
        religionData.value = response.results
        resolve(response)
      })
      .catch((error) => {
        reject(error)
      })
      .finally(() => {
        loading.value = false
      })
  })
}

const handleUpdateTab = (target: number | string) => {
  activeTab.value = target
}

onMounted(() => {
  fetchReligionSingle()
})

watch(
  () => activeTab.value,
  () => {
    fetchReligionSingle()
  }
)
</script>

<style scoped>
.gradient-left {
  top: 0;
  left: 0;
  position: absolute;
  background: linear-gradient(
    90deg,
    rgba(7, 9, 28, 0.9) 0%,
    rgba(7, 9, 28, 0) 100%
  );
  z-index: 20;
  pointer-events: none;
}
.gradient-right {
  top: 0;
  right: 0;
  position: absolute;
  background: linear-gradient(
    90deg,
    rgba(7, 9, 28, 0.9) 0%,
    rgba(7, 9, 28, 0) 100%
  );
  z-index: 20;
  pointer-events: none;
  transform: matrix(-1, 0, 0, 1, 0, 0);
}
</style>
