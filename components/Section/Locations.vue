<template>
  <section class="pb-16">
    <div
      class="container flex items-stretch justify-between gap-5 flex-col lg:flex-row"
    >
      <div>
        <h3
          class="mb-6 text-white text-3xl lg:text-40 font-semibold leading-130 font-playfair"
        >
          {{ $t('contacts') }}
        </h3>
        <div class="space-y-5">
          <CommonInfoData
            :title="locationData?.title"
            :icon="locationData?.icon"
          >
            <span>{{ locationData?.text }}</span>
          </CommonInfoData>
          <CommonInfoData :title="mainData?.title" :icon="mainData?.icon">
            <a
              :href="`mailto:${mainData?.text}`"
              class="hover:text-red duration-300"
            >
              {{ mainData?.text }}
            </a>
          </CommonInfoData>
          <CommonInfoData :title="phoneData?.title" :icon="phoneData?.icon">
            <a
              :href="`tel:${phoneData?.text}`"
              class="hover:text-red duration-300"
            >
              {{ formatPhoneNumber(phoneData?.text) }}
            </a>
          </CommonInfoData>
        </div>
      </div>
      <div
        class="rounded-xl relative overflow-hidden border border-solid border-white/20 w-full lg:max-w-[584px]"
        v-if="contacts"
      >
        <MapAbout :locations="contacts" map-class="!h-[300px]" />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { formatPhoneNumber } from '~/utils'
import { TContacts } from '~/types/common'
interface Props {
  contacts?: TContacts
}
const props = defineProps<Props>()

const locationData = computed(() => {
  return {
    title: 'location_contact',
    icon: 'icon-location-pin',
    text: props?.contacts?.location,
  }
})
const mainData = computed(() => {
  return {
    title: 'mail',
    icon: 'icon-mail',
    text: props?.contacts?.email,
  }
})
const phoneData = computed(() => {
  return {
    title: 'phone_number',
    icon: 'icon-phone',
    text: props?.contacts?.phone_number,
  }
})

const locations = computed(() => [
  {
    id: 1,
    name: props?.contacts?.location,
    location: props?.contacts?.map_location,
    image:
      'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.azernews.az%2Fmedia%2F2020%2F03%2F18%2F1584458665_old-city-4-800x450.jpg&f=1&nofb=1&ipt=f4812c3d5e90563db375976e60f0d823c56487fbdfae56428a7a4815a0cea048&ipo=images',
    religion: {
      type: 'about',
    },
    latitude: 41.321517,
    longitude: 69.304964,
  },
])
</script>
