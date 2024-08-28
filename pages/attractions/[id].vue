<template>
  <div class="min-h-[calc(100vh-239px)]">
    <div class="pt-20 md:pt-[120px]">
      <Breadcrumb :menu="link" class="container px-0" />
      <div class="container pt-5 md:pt-9 pb-5 md:pb-[74px]">
        <div
          class="flex items-start md:items-center justify-between mb-7 md:flex-row flex-col md:space-y-0 space-y-3"
        >
          <div class="space-y-2">
            <h1
              class="font-bold leading-130 text-3xl md:text-40 text-white font-playfair"
            >
              {{ $t('attractions') }}
            </h1>
            <p class="text-sm text-white/60 font-semibold leading-130">
              {{
                countParser($t('all_attract', country?.title), country?.title)
              }}
            </p>
          </div>
          <CommonAttractionTab
            v-if="religionData?.length"
            :list="religionList"
            :model-value="activeTab"
            @update:modelValue="handleUpdateTab"
            class="!w-auto"
          />
        </div>
        <div
          class="grid sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 sm:gap-6"
        >
          <CardSingleAttractions
            :data="item"
            :card-loading="loading"
            v-for="(item, i) of religionData"
            title-class="!text-base !font-semibold !leading-130"
            text-class="!text-sm !font-medium !leading-130"
            :key="i"
            card-class="w-full sm:!w-[178px] !h-[200px]"
          />
        </div>
        <Button
          v-if="nextData"
          @click="loadMoreDestination"
          variant="secondary"
          :loading="loading"
          button-class="lg:!px-7 lg:!px-3"
          class="mx-auto mt-9"
        >
          <template #default>
            <div class="flex-center space-x-1">
              <span>{{ $t('load_more') }}</span>
              <span class="icon-arrow-right text-2xl rotate-90"></span>
            </div>
          </template>
        </Button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted, ref, watch } from 'vue'
import { useRoute } from 'vue-router'

import Breadcrumb from '~/components/Common/Breadcrumb.vue'
import Button from '~/components/Common/Button.vue'
import { $api } from '~/composables/useFetcher'
import { attractions } from '~/data/attractions'
import { useDestinationStore } from '~/store/destination'
import { TCommonFetcher } from '~/types/common'
import { definePageMeta } from '#imports'

const destinationStore = useDestinationStore()

const link = computed(() => [
  {
    title: 'attractions',
    link: `/`,
  },
  {
    title: country?.value?.title,
    link: `/country/${route.params.id}`,
  },
  {
    title: religionActive?.value?.title,
    link: `/`,
  },
])
definePageMeta({
  layout: 'default',
})

const route = useRoute()
const religionData = ref([])
const nextData = ref(undefined)

const activeTab = ref(1)
const limit = ref(12)

const loading = ref(false)

const religionList = computed(() => destinationStore.religionList)
const religionActive = computed(() =>
  destinationStore.religionList?.find((el) => el?.id === activeTab?.value)
)
const country = computed(() =>
  destinationStore?.countryList?.find((el) => el?.id === +route?.params?.id)
)
function fetchReligionSingle() {
  loading.value = true
  return new Promise((resolve, reject) => {
    $api
      .$get<TCommonFetcher>('/destination/CountryAttractionListByReligion', {
        params: {
          religion__id: activeTab.value,
          destination_country__id: route.params.id,
          limit: limit.value,
        },
      })
      .then((response) => {
        religionData.value = response.results
        nextData.value = response?.next
        resolve(response)
      })
      .catch((error) => {
        reject(error)
      })
      .finally(() => {
        setTimeout(() => {
          loading.value = false
        }, 300)
      })
  })
}
const handleUpdateTab = (target: number | string) => {
  activeTab.value = target
}

const loadMoreDestination = () => {
  limit.value += 12
  fetchReligionSingle()
}

onMounted(() => {
  fetchReligionSingle()
})

async function fetchData() {
  return await Promise.all([
    destinationStore.fetchReligionList(route?.params?.id),
  ])
}
fetchData()

watch(
  () => activeTab.value,
  () => {
    fetchReligionSingle()
  }
)

function countParser(key, count) {
  if (count && key) {
    if (count === 0) {
      return key
    } else if (count === 1) {
      return key
    } else {
      return key?.replace('{ n }', count)
    }
  }
}
</script>

<style scoped></style>
