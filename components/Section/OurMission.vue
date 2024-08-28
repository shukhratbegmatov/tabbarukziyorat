<template>
  <section
    class="relative bg-white/5 py-8 lg:py-16 after:absolute after:top-0 after:left-0 after:top-0 after:w-full after:h-full after:bg-black/50 xl:after:hidden"
  >
    <img
      src="/svg/mission-bg.svg"
      alt="mission-bg"
      class="absolute right-0 top-0 h-full object-cover"
    />
    <div class="relative container space-y-6 z-20">
      <div class="space-y-4 text-white max-w-[583px]">
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
            {{ $t('our_mission') }}
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
            v-html="mission"
          />
        </CommonPreloader>
      </div>
      <div class="space-y-4">
        <CommonPreloader
          width="139px"
          height="26px"
          border-radius="4px"
          preloader-class="mb-4"
          :loading="loading"
        >
          <h4 class="text-xl text-white font-semibold leading-130">
            {{ $t('our_supporter') }}
          </h4>
        </CommonPreloader>
        <div class="inline-flex flex-col space-y-[18px] w-full max-w-[423px]">
          <div
            v-for="(el, i) of supporters"
            :key="i"
            class="relative bg-white/5 rounded-lg p-3 border border-solid border-white/5 overflow-hidden"
          >
            <CommonPreloader
              width="250px"
              height="43px"
              border-radius="4px"
              preloader-class="mb-4"
              :loading="loading"
            >
              <div class="flex items-center space-x-2">
                <img :src="el?.logo" :alt="el?.name" />
                <p
                  class="text-[15px] text-white font-bold leading-130 font-playfair"
                >
                  {{ el?.name }}
                </p>
              </div>
            </CommonPreloader>
            <CommonPreloader
              width="100px"
              height="120px"
              border-radius="4px"
              preloader-class="absolute -bottom-full right-0"
              :loading="loading"
            >
              <img
                :src="el?.logo"
                :alt="el?.name"
                class="absolute w-[120px] h-[120px] object-contain -bottom-16 right-0 grayscale opacity-10"
              />
            </CommonPreloader>
          </div>
          <!--          <div-->
          <!--            class="relative bg-white/5 rounded-lg p-3 border border-solid border-white/5 overflow-hidden"-->
          <!--          >-->
          <!--            <CommonPreloader-->
          <!--              width="250px"-->
          <!--              height="43px"-->
          <!--              border-radius="4px"-->
          <!--              preloader-class="mb-4"-->
          <!--              :loading="loading"-->
          <!--            >-->
          <!--              <img src="/svg/turkic-states.svg" alt="turkic-states" />-->
          <!--            </CommonPreloader>-->
          <!--            <CommonPreloader-->
          <!--              width="100px"-->
          <!--              height="100px"-->
          <!--              border-radius="4px"-->
          <!--              preloader-class="absolute -bottom-full right-0"-->
          <!--              :loading="loading"-->
          <!--            >-->
          <!--              <img-->
          <!--                src="/svg/turkic-states-circle.svg"-->
          <!--                alt="turkic-states"-->
          <!--                class="absolute bottom-0 right-0"-->
          <!--              />-->
          <!--            </CommonPreloader>-->
          <!--          </div>-->
        </div>
      </div>
    </div>
  </section>
</template>
<script lang="ts" setup>
interface Props {
  mission?: {}
  supporters?: {
    name?: string
    logo?: string
  }[]
  loading?: boolean
}
const props = defineProps<Props>()
</script>
