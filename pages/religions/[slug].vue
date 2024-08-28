<template>
  <div class="pb-16">
    <BannerSingle
      :loading="loading"
      has-breadcrumb
      :title="single?.name"
      v-bind="{ text: single?.short_description, breadcrumb }"
      :image="single?.image"
      :isReligion="true"
      :key="single?.image"
    >
      <template #prefix>
        <div class="mb-9">
          <CommonPreloader
            width="50px"
            height="50px"
            border-radius="4px"
            :loading="loading"
          >
            <div class="w-[50px] h-[50px]">
              <img
                :src="single?.flag"
                alt="religion flag"
                class="w-full h-full"
              />
            </div>
          </CommonPreloader>
        </div>
      </template>

      <template #additional>
        <div
          class="absolute top-[20%] lg:top-auto left-0 p-4 border border-solid border-white/10 border-l-[0] bg-white/[4%] rounded-r-xl additional-blur-religious-single z-50 flex flex-col gap-2.5"
        >
          <NuxtLink
            v-for="(item, index) in list"
            :key="index"
            :to="localePath(`/religions/${item?.id}`)"
          >
            <div
              class="w-10 h-10 lg:w-[60px] lg:h-[60px] rounded-lg flex-center border border-solid border-white/10 cursor-pointer hover:bg-red transition-300 religious-single-card"
            >
              <CommonReligionBadge :type="item?.type" />
            </div>
          </NuxtLink>
        </div>
      </template>
    </BannerSingle>
    <div class="relative -mt-20 w-full !z-30">
      <div class="container items-center grid md:grid-cols-3 gap-6">
        <CardInfoCard
          :loading="loading"
          v-for="(about, i) of aboutData"
          :key="i"
          :icon="about?.icon"
          :title="about?.title"
          :count="about?.count"
          class="!bg-white/10"
        />
      </div>
    </div>

    <div v-if="countryList?.length" class="container pb-11">
      <SectionWrapper centered :title="$t('countries')">
        <div class="flex flex-wrap justify-center mt-6 gap-y-6 gap-[30px]">
          <div
            v-for="obj in countryList"
            :key="obj.destinations"
            class="!min-w-[144px]"
          >
            <CardCountryCard :country="obj" />
          </div>
        </div>
      </SectionWrapper>
      <div class="relative flex-center" v-if="countryList.length">
        <div class="flex flex-col gap-10">
          <ReligionSectionWrapper
            v-for="(card, index) in countryList"
            :key="index"
            v-bind="{ card }"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import { useI18n } from 'vue-i18n'

import { calculateNumberWithShortcuts } from '~/utils'

const text = `Islam -  is the youngest and second in number of adherents, after Christianity, the world, as well as the monotheistic Abrahamic religion. Islam originated in the VII century. The founder of Islam is the Prophet Muhammad. The Holy Book — the Koran`

const { t } = useI18n()
const route = useRoute()
const single = ref({})
const loading = ref(true)
const list = ref([])
const countryList = ref([])

function getReligionList() {
  $api.$get(`/destination/ReligionList`).then((res) => {
    list.value = res?.results
  })
}

function getSingle() {
  $api.$get(`/destination/ReligionDetail/${route.params.slug}`).then((res) => {
    single.value = res
  })
}

function getCountryList() {
  $api
    .$get(
      `/destination/CountryListWithDestinations/${route.params.slug}?limit=20`
    )
    .then((res) => {
      countryList.value = res
    })
}
const fetchData = async () => {
  await getSingle()
  await getReligionList()
  await getCountryList()
}
fetchData().finally(() => {
  loading.value = false
})

const aboutData = computed(() => [
  {
    title: t('attractions'),
    count: calculateNumberWithShortcuts(
      String(single.value?.attractions_count)
    ),
    icon: '/svg/moscue.svg',
  },
  {
    title: t('countries'),
    count: calculateNumberWithShortcuts(String(single.value?.countries_count)),
    icon: '/svg/flag.svg',
  },
  {
    title: t('population_single', { name: single.value?.type }),
    count: calculateNumberWithShortcuts(String(single.value?.population)),
    icon: '/svg/population.svg',
  },
])

const breadcrumb = computed(() => [
  {
    title: 'Religions',
    link: '/',
  },
  {
    title: single?.value?.type,
    link: '/religions/islam',
  },
])
useSeoMeta({
  title: single?.value?.name,
  description: single?.value?.short_description,
  ogDescription: single.value?.short_description,
  ogImage: single?.value?.image,
})
</script>

<style scoped>
/* if backdrop support: very transparent and blurred */
@supports ((-webkit-backdrop-filter: none) or (backdrop-filter: none)) {
  .additional-blur-religious-single {
    backdrop-filter: blur(15px);
  }
}

.router-link-active div {
  background: #e54545;
}
</style>
