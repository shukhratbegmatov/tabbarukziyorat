<template>
  <div class="space-y-2">
    <CommonPreloader
      width="93px"
      height="21px"
      border-radius="4px"
      preloader-class="mb-2"
      :loading="loading"
    >
      <div class="flex items-center space-x-2">
        <i class="text-white/60 text-xl" :class="icon" />
        <span class="text-white/60 text-base font-medium leading-130">
          {{ $t(title) }}
        </span>
      </div>
    </CommonPreloader>
    <CommonPreloader
      width="100%"
      height="21px"
      border-radius="4px"
      :loading="loading"
    >
      <p class="text-white text-lg lg:text-xl font-bold leading-130">
        <slot />
      </p>
    </CommonPreloader>
  </div>
</template>

<script setup lang="ts">
interface Props {
  title?: string
  icon?: string
  loading?: boolean
}
withDefaults(defineProps<Props>(), {
  title: 'Location',
  icon: 'icon-location-pin',
})
</script>
