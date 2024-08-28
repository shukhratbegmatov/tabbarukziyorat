<template>
  <div class="relative" v-if="locations">
    <ClientOnly>
      <yandex-map
        class="h-full w-full"
        :coords="locations.map_location"
        :settings="mapSettings"
        :zoom="14"
        :controls="[]"
        :class="mapClass"
      >
        <ymap-marker
          :coords="locations.map_location"
          :marker-id="locations?.location"
          :hint-content="locations?.location"
          :icon="markerIcon('about')"
        />
      </yandex-map>
    </ClientOnly>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { TContacts } from '~/types/common'

interface Props {
  locations?: TContacts
  mapClass?: string
}

const props = withDefaults(defineProps<Props>(), {})

const markerIcon = (icon: string) => {
  return {
    layout: 'default#image',
    imageHref: '/svg/religions/about.svg',
    imageSize: [50, 50],
    imageOffset: [-20, -30],
  }
}
const mapSettings = computed(() => {
  return {
    apiKey: '',
    lang: 'ru_RU',
    coordorder: 'latlong',
    version: '2.1',
  }
})
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
