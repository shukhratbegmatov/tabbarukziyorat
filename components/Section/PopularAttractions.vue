<template>
  <SectionWrapper
    :title="isRecommended ? 'recommended_attractions' : 'popular_attractions'"
    subtitle="popular_attractions_desc"
    centered
  >
    <div class="mt-10 grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-6">
      <CardAttractions
        v-for="(item, i) in popularAttractions"
        v-bind="{ item }"
        :key="i"
      />
    </div>
  </SectionWrapper>
</template>

<script setup lang="ts">
import { TAttraction } from '~/types/attractions'

interface Props {
  isRecommended?: boolean
  popularAttractions?: TAttraction[]
}
defineProps<Props>()
</script>
