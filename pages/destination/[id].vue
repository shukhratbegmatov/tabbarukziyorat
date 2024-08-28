<template>
  <div>
    <div class="relative z-10 mt-16 lg:mt-[136px]">
      <CommonBreadcrumb v-bind="{ menu }" :key="single" class="container" />
      <div class="container h-full mt-6">
        <Transition name="fade" mode="out-in">
          <div :key="loading" class="max-w-[990px] mx-auto h-full">
            <DestinationBanner v-bind="{ single, loading }" />
          </div>
        </Transition>
      </div>
    </div>

    <div class="absolute top-0 left-0 w-full">
      <div class="relative w-full">
        <div
            class="pointer-events-none w-full h-full relative overflow-hidden max-h-[700px]"
        >
          <img
              :src="single?.image"
              alt="destination-single"
              class="w-full h-full object-cover pointer-events-none"
          />
        </div>
        <div
            class="absolute inset-0 w-full h-full destination-single-blur-bg pointer-events-none"
            :class="{ 'destination-single-blur': single?.type !== 'destination' }"
        />
      </div>
    </div>
    <img
        src="/svg/pattern-bg.svg"
        alt="pattern"
        class="w-full h-full object-cover left-0 top-[700px] absolute pointer-events-none"
    />

    <div class="relative">
      <div class="container">
        <div
            class="max-w-[990px] mx-auto py-16 destination-text whitespace-pre-line"
            v-html="single?.content"
        />
      </div>
    </div>
    <SectionMedia v-if="mediaList?.length" v-bind="{ images: mediaList }">
      <template #suffix>
        <SectionWrapper
            class="!pt-0 !pb-10"
            :title="$t('media')"
            :subtitle="$t('view_media')"
        >
          <template #suffix>
            <div
                v-if="single?.json_field_360"
                class="flex items-end justify-between p-3 rounded-xl bg-white/[4%] w-full max-w-[510px]"
            >
              <div class="flex-y-center gap-7">
                <div
                    class="flex-center w-[84px] h-[84px] rounded-2xl bg-white/20"
                >
                  <i class="icon-360 text-white text-[40px]" />
                </div>
                <div>
                  <p class="text-2xl leading-130 font-semibold text-white">
                    {{ $t('360_view') }}
                  </p>
                  <p class="text-base lading-130 text-white font-semibold mt-2">
                    {{ $t('explore_360') }}
                  </p>
                </div>
              </div>
              <a :href="`${dashboard360}/360/${single?.slug}`" target="_blank">
                <CommonButton class="!py-3" suffix :text="$t('view')">
                  <template #suffix>
                    <i class="icon-play-stroke ml-1" />
                  </template>
                </CommonButton>
              </a>
            </div>
          </template>
        </SectionWrapper>
      </template>
    </SectionMedia>

    <div v-if="single?.youtube_video" class="pt-16">
      <SectionPromoVideo
          :image="single?.youtube_video_image"
          :title="single?.youtube_video_title"
          @handleShowVideo="handleShowVideo"
      />
    </div>
    <CommonModal
        :show="showModal"
        @close="showModal = false"
        :title="single?.title"
        body-style="!max-w-full md:!max-w-[70%] h-[30%] sm:h-[50%] md:h-[70%]"
    >
      <ClientOnly>
        <iframe
            :key="showModal"
            width="100%"
            height="100%"
            :src="`https://www.youtube.com/embed/${toEmbed(
            single?.youtube_video
          )}`"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
        ></iframe>
      </ClientOnly>
    </CommonModal>
    <div class="max-w-[990px] mx-auto">
      <SectionWrapper centered :title="$t('map')">
        <div
            class="mt-10 border border-solid border-white/20 rounded-xl relative overflow-hidden"
        >
          <template v-if="!loading">
            <MapContact :locations="locations" map-class="!h-[500px]" />
          </template>
        </div>
      </SectionWrapper>
    </div>

    <div class="max-w-[584px] mx-auto !py-4 lg:!py-8">
      <DestinationSocial :title="single?.title" class="!bg-[#07091C80]" />
    </div>

    <SectionWrapper
        v-if="attractionsList?.length"
        class="!py-4 lg:!py-8"
        centered
        :title="$t('recommended_attractions')"
        :subtitle="$t('recommended_attractions_subtitle')"
    >
      <div
          v-if="attractionsList?.length"
          class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6 gap-6 mt-10"
      >
        <CardAttractions
            v-for="(item, i) in attractionsList"
            v-bind="{ item }"
            :key="i"
            class="!w-full !h-[200px]"
        />
      </div>
    </SectionWrapper>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { useRoute } from 'vue-router'

import { useSeoMeta } from '#head/composables.mjs'
import { useDestinationStore } from '~/store/destination'

const destinationStore = useDestinationStore()
const route = useRoute()
const loading = ref(false)
const showModal = ref(false)
const dashboard360 = import.meta.env.VITE_APP_DASH
const { t } = useI18n()

const single = computed(() => destinationStore?.destinationSingle)
const attractionsList = computed(() => destinationStore?.attractionList)
const mediaList = computed(() => destinationStore?.mediaList)
//
const locations = computed(() => [
  {
    id: 1,
    title: single?.value?.title,
    location: single?.value?.location,
    region: single?.value?.region,
    destination_country: single?.value?.destination_country,
    image: single?.value?.image,
    religion: single?.value?.religion,
    latitude: 41.321517,
    longitude: 69.304964,
  },
])
const menu = computed(() => [
  {
    title: 'country',
    link: `/country/${single?.value?.region?.country?.id}`,
  },
  {
    title: single?.value?.region?.country?.title,
    link: `/country/${single?.value?.region?.country?.id}`,
  },
  {
    title: single?.value?.title,
    link: '/',
  },
])

async function fetchData() {
  loading.value = true
  return await Promise.all([
    destinationStore?.fetchSingleDestinations(route.params.id).then((res) => {
      if (res) {
        destinationStore.fetchAttractions(
            res?.destination_country?.id,
            route?.params?.id
        )
      }
    }),
    destinationStore.fetchDestinationMediaList(route?.params?.id, 100),
  ])
}
fetchData().finally(() => {
  loading.value = false
})
const handleShowVideo = () => {
  showModal.value = true
}
useSeoMeta({
  title: single?.value?.title,
  description: single?.value?.short_description,
  ogDescription: single.value?.short_description,
  ogImage: single?.value?.image,
})
</script>

<style scoped>
.destination-single-blur-bg {
  background: linear-gradient(
      180deg,
      #07091c -4.12%,
      rgba(7, 9, 28, 0.6) 49.39%,
      rgba(7, 9, 28, 0.2) 85.78%,
      #07091c 100%
  );
}

@supports ((-webkit-backdrop-filter: none) or (backdrop-filter: none)) {
  .destination-single-blur {
    backdrop-filter: blur(6px);
  }
}

.shadow-text-destination {
  text-shadow: 0 10px 50px rgba(12, 15, 48, 0.4);
}
</style>

<style>
.destination-text h1,
.destination-text h2,
.destination-text h3,
.destination-text h4,
.destination-text h5,
.destination-text h6 {
  font-family: 'Playfair Display';
  font-style: normal;
  font-weight: 700;
  font-size: 40px;
  line-height: 130%;
  color: #ffffff !important;
  text-shadow: 0 10px 50px rgba(12, 15, 48, 0.4);
}

.destination-text p {
  font-weight: 400;
  font-size: 16px;
  line-height: 140%;
  color: #fff !important;
  font-feature-settings: 'pnum' on, 'lnum' on;
  word-break: break-word;
}
.destination-text span {
  font-weight: 400;
  font-size: 16px;
  line-height: 140%;
  color: #fff !important;
  font-feature-settings: 'pnum' on, 'lnum' on;
  word-break: break-word;
}
.destination-text a {
  color: #1c92e0 !important;
}
.destination-text a:hover {
  text-decoration: underline;
}
.destination-text img {
  width: 100%;
  height: auto;
  max-height: 500px !important;
  border-radius: 12px;
  margin: 20px 0;
}

.destination-text blockquote {
  margin: 20px 0;
  padding: 16px 16px 16px 64px;
  position: relative;
  background: #1a2226;
  border-radius: 20px;
}
.destination-text blockquote p {
  margin-top: 0;
  padding-top: 0;
  padding-bottom: 8px;
}
.destination-text blockquote p,
.destination-text blockquote {
  font-weight: 500;
  font-size: 16px;
  line-height: 140%;
  color: #f7f9fa;
  font-style: italic;
}
.destination-text blockquote:after {
  content: '\e947';
  font-family: icomoon;
  position: absolute;
  left: 20px;
  top: 20px;
  color: #1c92e0;
  font-size: 20px;
  line-height: 20px;
}

.destination-text ol li,
.destination-text ul li {
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 140%;
  font-feature-settings: 'pnum' on, 'lnum' on;
  color: #c2c4c5;
}
.destination-text ul,
.destination-text ol {
  padding-left: 20px;
  margin: 20px 0;
}
.destination-text ul {
  list-style: disc;
}
.destination-text ol {
  list-style: auto;
}

@media screen and (max-width: 768px) {
  .destination-text p,
  .destination-text blockquote {
    font-size: 16px;
    line-height: 140%;
  }
  .destination-text img,
  .destination-text blockquote,
  .destination-text ul,
  .destination-text ol {
    margin: 12px 0;
  }
}
@media (max-width: 640px) {
  .destination-text ol li,
  .destination-text blockquote,
  .destination-text ul li {
    font-size: 14px !important;
  }
}
</style>
