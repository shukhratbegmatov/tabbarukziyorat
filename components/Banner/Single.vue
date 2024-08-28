<template>
  <div
    class="relative flex items-center justify-center h-[752px] lg:h-screen py-[70px] lg:py-[136px]"
  >
    <img
      src="/pattern/main.svg"
      alt="Main pattern"
      class="absolute w-[431px] h-[437px] lg:w-auto lg:h-auto top-[20%] lg:top-[112px] left-0 !z-20 select-none"
      :class="isReligion ? 'opacity-0' : 'opacity-100'"
    />
    <Transition name="fade" mode="in-out" appear>
      <img
        v-lazy="{ src: image }"
        :alt="title"
        class="absolute left-0 top-0 w-full h-full object-cover z-0 select-none"
      />
    </Transition>
    <div
      class="absolute top-0 left-0 w-full h-full custom-gradient z-10 select-none"
    />
    <div
      class="relative h-full w-full flex items-center justify-center flex-col !z-50"
    >
      <Breadcrumb
        :menu="breadcrumb"
        v-if="hasBreadcrumb"
        class="absolute w-full left-0 top-0 z-30"
      />
      <div
        class="relative container h-full my-auto flex items-center justify-center !z-50"
      >
        <div
          class="flex items-center justify-center flex-col max-w-[800px] relative z-20"
        >
          <slot name="prefix" />

          <div
            class="flex items-center justify-center flex-col space-y-[9px] lg:space-y-5 mb-[13px] lg:mb-[30px]"
          >
            <CommonPreloader v-bind="{ loading }" width="400px" height="104px">
              <h1
                class="text-center text-white text-40 lg:text-80 font-bold leading-130 font-playfair capitalize"
              >
                {{ title }}
              </h1>
            </CommonPreloader>
            <CommonPreloader v-bind="{ loading }" width="600px" height="54px">
              <template v-if="content">
                <div
                  class="text-center text-white text-sm lg:text-xl font-medium leading-130"
                  v-html="text"
                />
              </template>
              <template v-else>
                <p
                  class="text-center text-white text-sm lg:text-xl font-medium leading-130"
                >
                  {{ text }}
                </p>
              </template>
            </CommonPreloader>
          </div>
          <slot name="suffix" />
        </div>
      </div>
    </div>

    <slot name="additional" />
  </div>
</template>

<script setup lang="ts">
import Breadcrumb from '~/components/Common/Breadcrumb.vue'

interface Props {
  image?: string
  title?: string
  text?: string
  breadcrumb?: {
    title?: string
    link?: string
  }[]
  loading?: boolean
  hasBreadcrumb?: boolean
  content?: boolean
  isReligion?: boolean
}
withDefaults(defineProps<Props>(), {
  image: '/islam.webp',
  title: 'registan square',
  hasBreadcrumb: false,
})
</script>

<style scoped>
.custom-gradient {
  background: linear-gradient(
    180deg,
    #07091c -4.12%,
    rgba(7, 9, 28, 0.6) 49.39%,
    rgba(7, 9, 28, 0.2) 85.78%,
    #07091c 100%
  );
}
</style>
