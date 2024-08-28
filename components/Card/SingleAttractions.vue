<template>
  <NuxtLink
    :to="localePath(`/destination/${data?.slug}`)"
    class="group w-[200px] sm:w-[220px] md:w-[280px] h-[220px] sm:h-[240px] md:h-[300px]"
    :class="cardClass"
  >
    <div
      class="w-full h-full relative rounded-xl border border-white/25 overflow-hidden"
    >
      <CommonPreloader
        width="100%"
        height="100%"
        border-radius="12px"
        :loading="cardLoading"
      >
        <img
          :src="data?.image"
          :alt="data.title"
          class="absolute w-full h-full object-cover top-0 left-0 z-10 transition-300 group-hover:scale-110"
        />
        <div
          class="gradient-overlay absolute w-full h-full top-0 left-0 z-20 p-3 sm:p-5 flex items-end justify-start"
        >
          <div class="text-white">
            <p
              :class="titleClass"
              class="font-semibold leading-130 text-lg sm:text-xl md:text-2xl translate-y-5 group-hover:translate-y-0 transition-300"
            >
              {{ data.title }}
            </p>
            <p
              :class="textClass"
              class="font-medium leading-130 text-sm sm:text-base md:text-xl text-white/80 mt-1 flex items-center gap-x-2 invisible opacity-0 translate-y-5 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-300"
            >
              <i class="icon-map-pin"></i>
              {{ data?.destination_country?.title }}
            </p>
          </div>
        </div>
      </CommonPreloader>
    </div>
  </NuxtLink>
</template>

<script setup lang="ts">
interface Props {
  data: object
  cardLoading: boolean
  titleClass?: string
  cardClass?: string
  textClass?: string
}

defineProps<Props>()
</script>

<style scoped>
.gradient-overlay {
  background: linear-gradient(
    180deg,
    rgba(7, 9, 28, 0.2) 0%,
    rgba(7, 9, 28, 0.8) 100%
  );
}
</style>
