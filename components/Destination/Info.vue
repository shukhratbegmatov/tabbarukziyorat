<template>
  <div :class="{ 'text-center': isCenter }">
    <CommonPreloader width="200px" height="26px" v-bind="{ loading }">
      <div class="flex-y-center gap-2" :class="{ 'flex-center': isCenter }">
        <i class="icon-map-pin text-[24px] text-white" />
        <p class="text-white text-xl leading-130 font-medium">
          {{ single?.region?.title }}
          <span v-if="single?.region?.title">,</span>
          {{ single?.destination_country?.title }}
        </p>
      </div>
    </CommonPreloader>
    <CommonPreloader
      width="70%"
      height="50px"
      v-bind="{ loading }"
      preloader-class="mt-0.5 mb-4"
    >
      <p
        class="destination-single-text-shadow text-[40px] leading-130 font-bold text-white font-playfair"
        :class="{ 'text-[32px] lg:text-[80px]': isCenter }"
      >
        {{ single?.title }}
      </p>
    </CommonPreloader>
    <CommonPreloader
      width="100%"
      height="26px"
      v-bind="{ loading }"
      v-for="(item, index) in 2"
      preloader-class="mb-0.5"
      :key="index"
    />

    <CommonPreloader
      width="100%"
      height="26px"
      v-bind="{ loading }"
      preloader-class="mb-4"
    >
      <div
        class="text-xl leading-130 font-medium my-4 text-white font-medium description-text"
        :class="{ 'mt-5 mb-6': isCenter }"
        v-html="single?.short_description"
      />
    </CommonPreloader>

    <div
      class="destination-bg-blur flex items-center justify-between gap-4 p-4 border border-solid border-white/20 rounded-xl max-w-[584px] flex-col sm:flex-row"
      :class="{ 'mx-auto': isCenter }"
    >
      <div class="w-full">
        <div class="flex-y-center gap-3">
          <CommonPreloader width="44px" height="44px" v-bind="{ loading }">
            <div class="w-11 h-11 rounded-lg flex-center bg-white/[12%]">
              <i class="icon-islam-moon text-white text-xl sm::text-[28px]" />
            </div>
          </CommonPreloader>
          <CommonPreloader width="100px" height="31.2px" v-bind="{ loading }">
            <p class="text-2xl leading-130 text-white/60 font-medium text-left">
              {{ $t('affiliation') }}
            </p>
          </CommonPreloader>
        </div>
        <CommonPreloader
          width="100px"
          height="31.2px"
          v-bind="{ loading }"
          preloader-class="mt-1"
        >
          <p class="text-2xl leading-130 text-white font-bold mt-1 text-left">
            {{ single?.religion?.title }}
          </p>
        </CommonPreloader>
      </div>
      <div
        class="flex sm:items-center flex-col sm:flex-row gap-4 w-full"
        v-if="single?.erected_from || single?.erected_to"
      >
        <div class="white-shadow-border h-px sm:h-[75px] w-full sm:w-px" />
        <div>
          <div class="flex-y-center gap-3">
            <CommonPreloader width="44px" height="44px" v-bind="{ loading }">
              <div class="w-11 h-11 rounded-lg flex-center bg-white/[12%]">
                <i class="icon-islam-moon text-white text-xl sm::text-[28px]" />
              </div>
            </CommonPreloader>
            <CommonPreloader width="100px" height="31.2px" v-bind="{ loading }">
              <p
                class="text-2xl leading-130 text-white/60 font-medium text-left"
              >
                {{ $t('was_erected') }}
              </p>
            </CommonPreloader>
          </div>
          <CommonPreloader
            width="100px"
            height="31.2px"
            v-bind="{ loading }"
            preloader-class="mt-1"
          >
            <p class="text-2xl leading-130 text-white font-bold mt-1 text-left">
              <span v-if="single?.erected_from">
                {{ single?.erected_from }}
              </span>
              <span v-if="single?.erected_to"> - </span>
              <span v-if="single?.erected_to">{{ single?.erected_to }}</span>
            </p>
          </CommonPreloader>
        </div>
      </div>
    </div>

    <DestinationSocial
      v-if="!loading"
      class="mt-4 max-w-[584px]"
      :class="{ 'mx-auto': isCenter }"
      :title="single?.title"
    />
  </div>
</template>

<script setup lang="ts">
import { IReligion } from '~/types/religions'

interface Props {
  isCenter?: boolean
  single: IReligion
  loading?: boolean
}

defineProps<Props>()
</script>

<style>
.description-text p,
.description-text span {
  color: #fff !important;
}

.destination-single-text-shadow {
  text-shadow: 0 10px 50px rgba(12, 15, 48, 0.4);
}

.destination-bg-blur {
  background: rgba(7, 9, 28, 0.5);
}

@supports ((-webkit-backdrop-filter: none) or (backdrop-filter: none)) {
  .destination-bg-blur {
    -webkit-backdrop-filter: blur(15px);
    backdrop-filter: blur(15px);
  }
}

.white-shadow-border {
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0) 0%,
    #ffffff 51.04%,
    rgba(255, 255, 255, 0) 100%
  );
}
</style>
