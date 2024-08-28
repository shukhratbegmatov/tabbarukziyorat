<template>
  <section v-if="statistics" class="relative z-10">
    <div class="container">
      <div class="py-6 md:py-8 lg:py-16 space-y-8 lg:space-y-16">
        <div class="space-y-4 text-white">
          <CommonPreloader
            width="163px"
            height="52px"
            border-radius="4px"
            class="!inline-block mb-4"
            :loading="loading"
          >
            <h2
              class="text-3xl lg:text-[40px] font-bold leading-130 font-playfair"
            >
              {{ $t('about_us_title') }}
            </h2>
          </CommonPreloader>
          <CommonPreloader
            width="100%"
            height="70px"
            border-radius="4px"
            :loading="loading"
          >
            <div
              class="text-base lg:text-lg font-medium leading-130"
              v-html="about?.description"
            />
          </CommonPreloader>
        </div>
        <div
          class="flex items-center grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          <InfoCard
            v-for="(about, i) of loading ? 4 : statistics"
            :key="i"
            :icon="about?.icon"
            :title="about?.title"
            :count="about?.count"
            :loading="loading"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import InfoCard from '~/components/Card/InfoCard.vue'

interface Props {
  statistics?: {}
  about?: {}
  loading?: boolean
}
defineProps<Props>()
</script>
