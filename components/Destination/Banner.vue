<template>
  <div
      class="flex-y-center justify-center flex-col lg:flex-row gap-6 lg:h-[546px]"
  >
    <div
        v-if="single?.type !== 'destination'"
        class="w-full lg:w-[382px] min-h-[260px] border-[2px] border-solid border-white/20 h-full rounded-xl relative overflow-hidden shrink-0"
    >
      <CommonPreloader
          width="100%"
          height="100%"
          v-bind="{ loading }"
          content-wrapper-class="w-full h-full"
          class="w-full h-full"
      >
        <img
            :src="single?.image"
            alt="single-destination"
            class="w-full h-full object-cover"
        />
      </CommonPreloader>
    </div>
    <DestinationInfo
        :is-center="single?.type !== 'attraction'"
        v-bind="{ single, loading }"
    />
  </div>
</template>

<script setup lang="ts">
import { IReligion } from '~/types/religions'

interface Props {
  single?: IReligion
  loading?: boolean
}

defineProps<Props>()
</script>
