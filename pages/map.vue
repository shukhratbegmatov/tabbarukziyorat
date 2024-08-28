<template>
  <main
    class="h-screen w-screen grid grid-cols-max-1 overflow-hidden map-wrapper"
  >
    <MapSidebar
      v-if="mounted"
      :loading="loading"
      :locations="destinations"
      :popular="popularDestinations"
      @handleSearch="handleSearchDestination"
      @open-filter="handleShowFilter"
      @observe="observeMap"
      @observeDestinations="handleObserveDestinations"
    />
    <div v-if="width > 900" class="w-full h-full">
      <div id="map" class="w-full h-full">
        <MapMain
          :default-coords="coords"
          :locations="destinations"
          :key="destinations"
        />
      </div>
    </div>
    <MapModal
      v-bind="{ show, religions: religionList, countries: countryList }"
      @close="show = false"
      @handleFilter="handleFilter"
    />
  </main>
</template>

<script lang="ts" setup>
import { computed, onMounted, ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import { definePageMeta } from '#imports'
import { useMounted } from '~/composables/useMounted'
import { useDestinationStore } from '~/store/destination'
import { useWindowSize } from '@vueuse/core'
import { ILocation } from '~/types/locations'

const { width } = useWindowSize()

definePageMeta({
  layout: 'empty',
})

const mounted = useMounted()
const coords = ref([])

const route = useRoute()
const loading = ref(false)

const destinationStore = useDestinationStore()

const popularDestinations = computed(() => destinationStore.popularDestination)

const destinations = ref([])
const limit = ref(100)
const religionList = computed(() => destinationStore.religionList)
const countryList = computed(() => destinationStore.countryList)

const show = ref(false)

const fetchData = () => {
  loading.value = true
  fetchDestinations()
  destinationStore.fetchPopularDestination()
  destinationStore.fetchReligionList()
  destinationStore.fetchCountryList()
}

const fetchDestinations = () => {
  const value = {
    religion: route?.query?.religion,
    country: route?.query?.country,
  }
  destinationStore
    .fetchDestinations(
      '',
      limit.value,
      value.religion ?? undefined,
      value.country ?? undefined
    )
    .then((res) => {
      destinations.value = res
    })
    .finally(() => {
      setTimeout(() => {
        loading.value = false
      }, 400)
    })
}
const handleObserveDestinations = () => {
  loading.value = true
  limit.value += 5
  fetchDestinations()
}
function handleFilter(value: object) {
  loading.value = true
  destinationStore
    .fetchDestinations('', limit.value, value.religion, value.country)
    .then((res) => {
      destinations.value = res
    })
    .finally(() => {
      setTimeout(() => {
        loading.value = false
      }, 100)
    })
}

function handleShowFilter() {
  show.value = true
}
function observeMap(location: ILocation) {
  coords.value = location?.location?.split(';')
}

watch(
  () => destinations.value,
  () => {
    coords.value = destinations.value[0]?.location?.split(';')
  },
  {
    deep: true,
  }
)

function handleSearchDestination(value: string) {
  destinationStore.fetchDestinations(value).then((res) => {
    destinations.value = res
  })
}
onMounted(() => {
  fetchData()
})
</script>

<style scoped>
@media screen and (max-width: 900px) {
  .map-wrapper {
    width: 100%;
    display: block;
  }
}
</style>
