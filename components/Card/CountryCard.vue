<template>
  <NuxtLink
    :to="localePath(`/country/${country?.id}`)"
    :class="{ 'bg-white/[0.03] mr-4': loading }"
    class="w-[164px] sm:w-[280px] items-center flex flex-col ease-all duration-300 hover:cursor-pointer border-1 border-white border-opacity-[0.04] rounded-xl overflow-hidden hover:bg-white hover:bg-opacity-[0.04] group relative"
  >
    <div class="relative">
      <CommonPreloader
        width="90px"
        height="90px"
        border-radius="100%"
        class="flex-shrink-0"
        preloader-class="mb-6 mt-4"
        :loading="loading"
      >
        <img
          :src="country?.flag"
          :alt="country?.title"
          class="relative border-4 border-solid border-white border-opacity-10 rounded-[90px] w-[50px] sm:w-[90px] h-[50px] sm:h-[90px] m-0 my-6 group-hover:backdrop-blur-lg z-20"
        />
      </CommonPreloader>

      <img
        :src="country?.flag"
        :alt="country?.title"
        class="border-4 border-solid border-white border-opacity-10 rounded-[90px] w-[90px] h-[90px] m-0 my-6 group-hover:backdrop-blur-lg z-0 absolute left-0 top-0 custom-shadow transition-300 opacity-0 group-hover:opacity-40"
      />
    </div>
    <CommonPreloader
      width="80px"
      height="24px"
      border-radius="4px"
      class="mb-1"
      :loading="loading"
    >
      <h3 class="font-semibold leading-130 text-5 text-white">
        {{ country?.title }}
      </h3>
    </CommonPreloader>
    <CommonPreloader
      width="100px"
      height="24px"
      border-radius="4px"
      preloader-class="mb-4"
      :loading="loading"
    >
      <p
        class="font-medium text-base leading-130 text-white text-opacity-60 pb-[22px]"
      >
        {{ country?.destination_count }} {{ $t('destinations') }}
      </p>
    </CommonPreloader>
    <span
      class="block absolute w-10 h-0.5 bg-white bg-opacity-40 bottom-0 ease-all duration-300 group-hover:w-full group-hover:bg-opacity-100"
    ></span>
  </NuxtLink>
</template>

<script setup lang="ts">
import { TCountries } from '~/types/countries'

interface Props {
  country?: TCountries
  loading?: boolean
}
defineProps<Props>()
</script>

<style scoped>
.custom-shadow {
  filter: blur(20px);
}
</style>
