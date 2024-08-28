<template>
  <div class="relative bg-white/[4%] rounded-xl p-4 overflow-hidden">
    <CommonPreloader
      width="61px"
      height="52px"
      border-radius="4px"
      preloader-class="mb-4"
      :loading="loading"
    >
      <p class="text-white text-[40px] font-bold leading-130">
        {{ count }}
      </p>
    </CommonPreloader>
    <CommonPreloader
      width="178px"
      height="26px"
      border-radius="4px"
      preloader-class="mb-4"
      :loading="loading"
    >
      <p class="text-lg lg:text-xl text-white/60 font-bold leading-130">
        {{ $t(title) }}
      </p>
    </CommonPreloader>
    <CommonPreloader
      width="61px"
      height="52px"
      border-radius="4px"
      preloader-class="absolute -bottom-4 -right-3"
      :loading="loading"
    >
      <img
        class="absolute w-20 h-20 lg:w-auto lg:h-auto -bottom-4 -right-3"
        :src="icon"
        alt="Card icon"
      />
    </CommonPreloader>
  </div>
</template>

<script setup lang="ts">
interface Props {
  title?: string
  count?: number
  icon?: string
  loading?: boolean
}
defineProps<Props>()
</script>
