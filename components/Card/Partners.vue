<template>
  <CommonSkeleton
    width="100%"
    height="136px"
    border-radius="12px"
    :loading="loading"
  >
    <a
      target="_blank"
      :href="`${brand?.link}`"
      class="partners-card cursor-pointer duration-300 bg-white/5 hover:bg-white/[12%] transition-300 p-0 md:p-4 rounded-xl h-[84px] w-[201px] md:h-[117px] md:w-[280px] flex justify-center items-center group border border-solid border-white/[16%]"
    >
      <img
        :src="brand?.logo"
        v-if="brand?.logo"
        :alt="brand?.name"
        class="lg:grayscale lg:opacity-60 duration-300 group-hover:scale-105 group-hover:opacity-100 group-hover:grayscale-0 h-full max-h-[30px] md:max-h-[40px] w-full max-w-[200px] mx-auto object-contain"
      />
    </a>
  </CommonSkeleton>
</template>

<script lang="ts" setup>
interface TBrand {
  logo: string
  id: number
  override_price: string
  name: string
  warehouse: number
  height: string
  width: string
  website: string
}

interface Props {
  brand?: TBrand
  loading?: boolean
  isGray?: boolean
  isDark?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  loading: false,
  isGray: false,
})
</script>

<style scoped>
.partners-card {
  position: relative;
}
.partners-card:hover {
  box-shadow: 0px 4px 36px rgba(255, 255, 255, 0.12);
  backdrop-filter: blur(15px);
}
.filter-white {
  filter: brightness(100);
}
</style>
