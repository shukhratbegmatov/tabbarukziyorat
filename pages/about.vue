<template>
  <div class="relative">
    <div class="relative">
      <img
        src="/svg/bg-frame.svg"
        alt="background frame"
        class="absolute top-0 left-0 w-full h-full z-0"
      />
      <BannerMulti :images="aboutData.images" :loading="loading" />
      <CommonBreadcrumb :menu="breadcrumb" />
      <SectionAboutUs
        :about="aboutData"
        :statistics="statisticsData"
        :loading="loading"
      />
    </div>
    <SectionOurMission
      v-bind="{
        mission: aboutData?.our_mission,
        supporters: aboutData?.supporters,
        loading,
      }"
    />
    <SectionStatements :statements="statements" />
    <SectionPromoVideo
      class="mb-8 lg:mb-16"
      v-bind="{ image: aboutData?.video_image }"
      @handleShowVideo="handleShowVideo"
    />
    <template v-if="!loading">
      <SectionLocations v-bind="{ contacts }" />
    </template>
    <CommonModal
      :show="showModal"
      @close="showModal = false"
      :title="aboutData?.title"
      body-style="!max-w-[100%] md:!max-w-[70%] h-[55%] sm:h-[50%] md:h-[70%]"
    >
      <ClientOnly>
        <iframe
          :key="showModal"
          width="100%"
          height="100%"
          :src="`https://www.youtube.com/embed/${toEmbed(
            aboutData?.video_link
          )}`"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </ClientOnly>
    </CommonModal>
  </div>
</template>

<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import { useI18n } from 'vue-i18n'

import { useSeoMeta } from '#head/composables.mjs'
import { definePageMeta } from '#imports'
import { useAboutStore } from '~/store/about'

const aboutStore = useAboutStore()

const { t } = useI18n()

const statistics = computed(() => aboutStore?.statistics)
const aboutData = computed(() => aboutStore?.aboutData)
const statements = computed(() => aboutStore?.statements)
const contacts = computed(() => aboutStore?.contacts)
const title = computed(() => t('about_us_title'))
const breadcrumb = [
  {
    title: 'About us',
    link: '/about',
  },
]
const loading = ref(false)
const showModal = ref(false)

watch(
  () => statistics,
  (value) => {
    statisticsData.value[0].count = value.value?.attractions_count
    statisticsData.value[1].count = value.value?.destinations_count
    statisticsData.value[2].count = value.value?.countries_count
    statisticsData.value[3].count = value.value?.religions_count
  },
  { deep: true }
)

useSeoMeta({
  title: title,
  description: aboutData?.value?.title,
  ogTitle: aboutData?.value?.title,
  ogImage: aboutData?.value?.video_image,
})
const statisticsData = ref([
  {
    title: 'attractions',
    count: 0,
    icon: '/svg/moscue.svg',
  },
  {
    title: 'destinations',
    count: 0,
    icon: '/svg/global.svg',
  },
  {
    title: 'countries',
    count: 0,
    icon: '/svg/flag.svg',
  },
  {
    title: 'religions',
    count: 0,
    icon: '/svg/hope.svg',
  },
])

definePageMeta({
  layout: 'default',
})
async function fetchData() {
  loading.value = true
  return await Promise.all([
    await aboutStore.fetchAboutData(),
    await aboutStore.fetchStatistics(),
    await aboutStore.fetchStatements(),
    await aboutStore.fetchContacts(),
  ])
}
fetchData().finally(() => {
  loading.value = false
})

const handleShowVideo = () => {
  showModal.value = true
}
</script>
<style scoped>
.custom-clip {
  clip-path: polygon(0 0, 100% 0%, 60% 100%, 0% 100%);
}
.custom-clip-middle {
  width: 300px;
}
.custom-clip-last {
  clip-path: polygon(40% 0%, 100% 0%, 100% 100%, 0% 100%);
}
</style>
