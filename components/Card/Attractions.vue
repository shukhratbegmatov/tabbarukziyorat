<template>
  <NuxtLink
    :to="localePath(`/destination/${item?.slug}`)"
    class="!w-[178px] !h-[200px] flex rounded-xl overflow-hidden border border-white/20 relative group preloader-image"
  >
    <div class="relative z-0 w-full h-full">
      <img
        class="w-full h-full object-cover absolute top-0 left-0 z-0 transition-300 group-hover:scale-110"
        v-lazy="{ src: item?.image, delay: 500 }"
        alt="attraction-image"
      />
    </div>
    <span
      class="absolute w-full h-full inset-0 z-1"
      style="
        background: linear-gradient(
          180deg,
          rgba(7, 9, 28, 0) 56.88%,
          rgba(7, 9, 28, 0.8) 100%
        );
      "
    />
    <div
      class="absolute w-full h-full inset-0 flex flex-col justify-end p-4 z-2"
    >
      <p
        class="font-semibold leading-130 text-base text-white translate-y-5 group-hover:translate-y-0 transition-300 line-clamp-2"
      >
        {{ item.title }}
      </p>
      <p
        class="font-medium leading-130 text-sm text-white/80 translate-y-5 invisible opacity-0 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-300"
      >
        {{ item.destination_country?.title }}
      </p>
    </div>
  </NuxtLink>
</template>

<script setup lang="ts">
import { TAttraction } from '~/types/attractions'

interface Props {
  item?: TAttraction
}
defineProps<Props>()
</script>
