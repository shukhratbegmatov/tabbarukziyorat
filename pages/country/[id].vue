<template>
  <div v-if="mounted">

    <div class="absolute main_des left-0 w-full top-[66px] lg:top-[136px] z-40">
      <Breadcrumb :menu="link" :key="single" />
    </div>
    <BannerSingle
      :key="single"
      :image="single?.image"
      :title="single?.title"
      :text="single?.short_description"
      :loading="loading"
      class="!z-20"
    >
      <template #suffix>
        <CommonPreloader v-bind="{ loading }" width="182px" height="48px">
          <CommonButton
            @click="showModal = true"
            button-class="!px-7 !py-3 font-semibold text-base leading-150"
            >{{ $t('watch_video') }}
            <i class="icon-play-stroke ml-1 text-2xl"></i
          ></CommonButton>
        </CommonPreloader>
      </template>
    </BannerSingle>
    <CommonModal
      :show="showModal"
      @close="showModal = false"
      :title="single?.title"
      body-style="!max-w-full md:!max-w-[70%] h-[30%] sm:h-[50%] md:h-[70%]"
    >
      <ClientOnly>
        <iframe
          :key="trigger"
          width="100%"
          height="100%"
          :src="`https://www.youtube.com/embed/${toEmbed(
            single?.youtube_video
          )}`"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </ClientOnly>
    </CommonModal>
    <CardDetails v-bind="{ single }" v-if="mounted" />
    <SectionAttractions
      class="mb-16 md:mb-[128px]"
      :religions="religionList"
      v-if="religionList.length"
    />
    <SectionMedia v-bind="{ images: mediaList }" v-if="mediaList?.length">
      <template #suffix>
        <p
          class="text-white font-bold leading-130 text-2xl md:text-[28px] font-playfair mb-1 md:mb-2"
        >
          {{ $t('media') }}
        </p>
        <p
          class="text-white opacity-60 font-semibold text-sm leading-130 mb-6 md:mb-10"
        >
          {{ $t('media_sub') }}
        </p>
      </template>
    </SectionMedia>
    <div class="space-y-11 pb-16 mt-16">
      <SectionWrapper
        centered
        :title="$t('instagram_title')"
        :subtitle="$t('instagram_subtitle')"
        class="!pb-0"
      />
      <div class="posts-wrapper relative w-full z-10 px-4 lg:px-0">
        <SliderInstagramPosts :posts="instagramPosts" />
        <CardInstagramShare />
        <CardSubscribe />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import { useRoute } from 'vue-router'

import { useSeoMeta } from '#head/composables.mjs'
import { useAsyncData } from '#imports'
import Breadcrumb from '~/components/Common/Breadcrumb.vue'
import { $api } from '~/composables/useFetcher'
import { useMounted } from '~/composables/useMounted'
import { useDestinationStore } from '~/store/destination'
import { useMainStore } from '~/store/main'
import { toEmbed } from '~/utils'

const destinationStore = useDestinationStore()
const mainStore = useMainStore()

const route = useRoute()
const mounted = useMounted()

const showModal = ref(false)
const loading = ref(false)
const single = ref({})

const instagramPosts = computed(() => mainStore.instagramPosts)
const religionList = computed(() => destinationStore.religionList)
const mediaList = computed(() => destinationStore?.countryMediaList)

const { data, error } = useAsyncData('countrySingle', async () => {
  return await $api.$get(`/destination/CountryDetail/${route?.params?.id}`)
})
if (error.value) {
  showError({
    statusCode: 404,
  })
}
useSeoMeta({
  title: data?.value?.title,
  description: data?.value?.short_description,
  ogDescription: data.value?.short_description,
  ogImage: data?.value?.image,
})

const fetchSingle = () => {
  loading.value = true
  $api
    .$get(`/destination/CountryDetail/${route?.params?.id}`)
    .then((res) => {
      if (res) {
        single.value = res
      }
    })
    .catch(() => {
      showError({
        statusCode: 404,
      })
    })
    .finally(() => {
      loading.value = false
    })
}

const fetch = async () => {
  await fetchSingle()
}
fetch()
async function fetchData() {
  return await Promise.all([
    mainStore.fetchInstagramPost(),
    destinationStore.fetchReligionList(route?.params?.id),
    destinationStore.fetchCountryMediaList(route?.params?.id, 100),
  ])
}
fetchData()

const link = computed(() => [
  {
    title: 'Country',
    link: `/country/${route?.params?.id}`,
  },
  {
    title: single?.value?.title,
    link: `/country/${route?.params?.id}`,
  },
])

const trigger = ref(0)

watch(
  () => showModal.value,
  (newValue) => {
    if (!newValue) {
      trigger.value++
    }
  }
)

watch(
  () => showModal.value,
  (newValue) => {
    if (!newValue) {
      document.body.style.overflowY = 'auto'
    } else {
      document.body.style.overflowY = 'hidden'
    }
  }
)
</script>

