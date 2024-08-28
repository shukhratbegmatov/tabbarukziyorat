<template>
  <div class="relative">
    <ClientOnly>
      <yandex-map
        class="h-full w-full"
        :coords="locations[0]?.location"
        :settings="mapSettings"
        :zoom="14"
        :controls="[]"
        :class="mapClass"
      >
        <ymap-marker
          v-for="(item, index) in locations"
          :key="index"
          :coords="item?.location"
          marker-id="123"
          :hint-content="item.name"
          :icon="markerIcon(item?.religion?.type)"
          :balloon-template="balloonTemplate(item)"
          @mouseenter="onMouseenterMarker"
          @mouseleave="onMouseleaveMarker"
          @balloonopen="onBalloonOpen"
        />
      </yandex-map>
    </ClientOnly>
  </div>
</template>

<script setup lang="ts">
import { ILocation } from '~/types/locations'
import { EReligion } from '~/types/religions'

interface Props {
  locations: ILocation[]
  mapClass?: string
  defaultCoords?: number[]
}

const props = withDefaults(defineProps<Props>(), {})

function getReligionIcon(religion: EReligion) {
  switch (religion) {
    case EReligion.ISLAM:
      return '/svg/religions/islam.svg'
    case EReligion.CHRISTIANITY:
      return '/svg/religions/christianity.svg'
    case EReligion.BUDDHISM:
      return '/svg/religions/buddhism.svg'
    case EReligion.ABOUT:
      return '/svg/religions/about.svg'
    default:
      return ''
  }
}
const markerIcon = (icon: string) => {
  return {
    layout: 'default#imageWithContent',
    imageHref: getReligionIcon(icon),
    imageSize: [50, 50],
    imageOffset: [-20, -30],
  }
}

const coords = ref([41.31, 69.26])
watch(
  () => props.defaultCoords,
  () => {
    if (props.defaultCoords?.length) {
      coords.value = props.defaultCoords
    }
  }
)
const mapSettings = ref({
  apiKey: '',
  lang: 'ru_RU',
  coordorder: 'latlong',
  version: '2.1',
})

const balloonTemplate = computed(() => {
  return function (item: ILocation) {
    return `
         <div class="realtive bg-dark rounded-xl p-2 inline-block w-[142px]">
          <img
            src="${item?.image}"
            class="object-cover h-20 max-w-[126px] w-full rounded-xl"
            alt="Map image"
          />
          <p class="mt-2 mb-1 text-[10px] text-[#83848D] line-clamp-1 leading-120">
            ${item?.region?.title} ${
      item?.region?.title ? `<span>,</span>` : ''
    }
                 ${item?.destination_country?.title}
          </p>
          <p class="text-xs text-white font-semibold leading-130"> ${
            item?.title
          } </p>

      </div>
    `
  }
})

function onMouseenterMarker(e: any) {
  e.get('target').balloon.open()
}
function onMouseleaveMarker(e: any) {
  e.get('target').balloon.close()
}
function onBalloonOpen(e: any) {
  setTimeout(() => {
    e.get('target').balloon.close()
  }, 1500)
}
</script>
<style>
.ymap-container {
  height: 100vh;
}
.ymaps-2-1-79-balloon__layout {
  background: transparent !important;
}
.ymaps-2-1-79-balloon__content {
  background: transparent !important;
  padding: 0 !important;
  margin-right: 0 !important;
  border-radius: 12px !important;
}
.ymaps-2-1-79-balloon__tail {
  display: none !important;
}
.ymaps-2-1-79-balloon__close-button {
  display: none !important;
}
</style>
