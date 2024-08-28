<template>
  <div class="relative bg-dark text-white">
    <BannerSlider :images="mainData[0]" :loading="loading" />
    <SliderLocations :locations="destinations" :loading="loading" />
    <SectionHomeAboutUs
      :about="aboutData"
      :statistics="statisticsData"
      :loading="loading"
      id="about"
    />
    <SectionWrapper
      class="z-50 relative"
      id="country"
      centered
      :title="$t('how_many_countries_title')"
      :subtitle="$t('how_many_countries_subtitle')"
    >
      <div class="flex flex-wrap justify-center space-bottom-4">
        <div
          v-for="(country, i) in loading ? 3 : countryList"
          :key="i"
          class="mt-10"
        >
          <CountryCard
            :country="!loading ? country : undefined"
            :loading="loading"
          />
        </div>
      </div>
    </SectionWrapper>
    <div class="relative custom-bg-img">
      <SectionWrapper
        id="religion"
        centered
        :title="$t('religions')"
        :subtitle="$t('religions_subtitle')"
      >
        <div
          class="grid lg:grid-cols-3 gap-3 lg:gap-6 space-bottom-4 mt-10 md:grid-cols-2"
        >
          <div
            v-for="(religion, index) in loading ? 3 : religionList"
            :key="index"
          >
            <ReligionCard :religion="religion" :loading="loading" />
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper
        centered
        :title="$t('news')"
        :subtitle="$t('news_subtitle')"
      >
        <div class="grid grid-cols-12 gap-x-6 mt-10">
          <div class="lg:col-span-7 col-span-12 mb-2.5 lg:mb-0">
            <SmallNewsCard
              :news="loading ? 1 : newsList[0]"
              :loading="loading"
              class="h-full"
            />
          </div>

          <div class="grid gap-y-2.5 lg:col-span-5 col-span-12">
            <div v-for="news in loading ? 2 : newsList.slice(1)" :key="news.id">
              <SmallNewsCard :news="news" short :loading="loading" />
            </div>
          </div>
        </div>
        <CommonPreloader
          width="148px"
          height="48px"
          border-radius="8px"
          preloader-class="mt-2 ml-auto"
          :loading="loading"
        >
          <NuxtLink :to="localePath('/news')">
            <Button
              class="!px-8 !py-3 !ml-auto mt-4 ease-all duration-300 s-button-secondary"
              >{{ $t('all_news') }}
              <span class="icon-arrow-right pl-1 text-2xl"
            /></Button>
          </NuxtLink>
        </CommonPreloader>
      </SectionWrapper>
    </div>

    <div class="space-y-11 pb-16">
      <SectionWrapper
        centered
        :title="$t('instagram_title')"
        :subtitle="$t('instagram_subtitle')"
        class="!pb-0"
      />
      <div class="posts-wrapper relative w-full z-10 px-4 lg:px-0">
        <SliderInstagramPosts :posts="instagramPosts" :loading="loading" />
        <CardInstagramShare :loading="loading" />
        <CardSubscribe />
      </div>
    </div>
    <div class="space-y-11 pb-16">
      <SectionWrapper
        centered
        :title="$t('partners_title')"
        :subtitle="$t('partners_subtitle')"
        class="!pb-0"
      />
      <SliderPartners :partners="partners" v-if="!loading" is-dark />
    </div>
  </div>
</template>

<script setup>
import { computed, ref, watch } from 'vue'

import CountryCard from '~/components/Card/CountryCard.vue'
import ReligionCard from '~/components/Card/ReligionCard.vue'
import SmallNewsCard from '~/components/Card/SmallNewsCard.vue'
import Button from '~/components/Common/Button.vue'
import { useAboutStore } from '~/store/about'
import { useDestinationStore } from '~/store/destination'
import { useMainStore } from '~/store/main'
import { useNewsStore } from '~/store/news'

const destinationStore = useDestinationStore()
const mainStore = useMainStore()
const newsStore = useNewsStore()
const aboutStore = useAboutStore()

const loading = ref(false)

const destinations = computed(() => destinationStore.destinations)
const partners = computed(() => mainStore.partners)
const newsList = computed(() => newsStore.newsList)
const instagramPosts = computed(() => mainStore.instagramPosts)
const aboutData = computed(() => aboutStore.aboutData)
const statistics = computed(() => aboutStore?.statistics)
const mainData = computed(() => mainStore.mainData)
const religionList = computed(() => destinationStore.religionList)
const countryList = computed(() => destinationStore.countryList)

async function fetchData() {
  loading.value = true
  return await Promise.all([
    mainStore.fetchMainData(),
    mainStore.fetchPartners(),
    aboutStore.fetchStatistics(),
    mainStore.fetchInstagramPost(),
    destinationStore.fetchPopularDestination(),
    destinationStore.fetchReligionList(),
    destinationStore.fetchDestinations('', undefined, undefined),
    aboutStore.fetchAboutData(),
    newsStore.fetchNewsList(1, 3),
  ])
}
fetchData().finally(() => {
  loading.value = false
})

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
</script>

<style scoped>
.custom-bg-img {
  background-image: url('/pattern/custom-bg-img.svg');
  background-repeat: no-repeat;
  background-position: top 70px right 0px;
  object-fit: cover;
}
.posts-wrapper::after {
  position: absolute;
  content: '';
  right: 0;
  top: 0;
  height: 100%;
  width: 404px;
  background: linear-gradient(
    90deg,
    rgba(7, 9, 28, 0.9) 0%,
    rgba(7, 9, 28, 0) 100%
  );
  transform: matrix(-1, 0, 0, 1, 0, 0);
  z-index: 2;
  pointer-events: none;
}
.posts-wrapper::before {
  position: absolute;
  content: '';
  left: 0;
  top: 0;
  height: 100%;
  width: 404px;
  background: linear-gradient(
    90deg,
    rgba(7, 9, 28, 0.9) 0%,
    rgba(7, 9, 28, 0) 100%
  );
  z-index: 2;
  pointer-events: none;
}
@media screen and (max-width: 1024px) {
  .posts-wrapper::before,
  .posts-wrapper::after {
    display: none;
  }
}
</style>
