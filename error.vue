<template>
  <div class="h-screen error-page flex-center relative">
    <LayoutHeader />
    <div class="container">
      <div class="md:max-w-[822px] max-auto text-center">
        <div class="relative mb-16 sm:mb-8 md:mb-0">
          <img class="mx-auto w-[80%] md:w-full" src="/svg/404.svg" alt="404" />
          <span
            class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-0 flex items-center justify-center"
          >
            <img
              class="shape !max-w-[70%] md:max-w-full"
              src="/svg/logo-shape.svg"
              alt="shape"
            />
          </span>
          <img
            class="logo-moon absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-1"
            src="/svg/logo-main.svg"
            alt="main logo"
          />
        </div>
        <h1
          class="text-center text-white text-xl sm:text-2xl md:text-40 font-bold leading-130 mb-4 error-title"
        >
          {{ $t('error_title') }}
        </h1>
        <p
          class="mt-14 mx-auto font-medium text-sm sm:text-base md:text-xl leading-130 text-white error-description mb-9"
        >
          {{ $t('error_desc') }}
        </p>
        <NuxtLink :to="localePath('/')">
          <CommonButton
            :text="$t('go_home')"
            suffix
            class="mx-auto"
            button-class="!px-8 !py-3"
          >
            <template #suffix>
              <svg
                width="25"
                height="24"
                viewBox="0 0 25 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                class="ml-1"
              >
                <path
                  d="M19.5 9.77809V16.2C19.5 17.8801 19.5 18.7202 19.173 19.362C18.8854 19.9264 18.4265 20.3854 17.862 20.673C17.2202 21 16.3802 21 14.7 21H10.3C8.61984 21 7.77976 21 7.13803 20.673C6.57354 20.3854 6.1146 19.9264 5.82698 19.362C5.5 18.7202 5.5 17.8801 5.5 16.2V9.77743M21.5 12L16.0668 5.96396C14.8311 4.59119 14.2133 3.90481 13.4856 3.65141C12.8466 3.42885 12.151 3.4289 11.5119 3.65156C10.7843 3.90506 10.1666 4.59154 8.93114 5.96449L3.5 12M14.5 12C14.5 13.1046 13.6046 14 12.5 14C11.3954 14 10.5 13.1046 10.5 12C10.5 10.8954 11.3954 9.99999 12.5 9.99999C13.6046 9.99999 14.5 10.8954 14.5 12Z"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </template>
          </CommonButton>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  error: {
    message: string
    stack: string
  }
}
defineProps<Props>()

import { useHomeStore } from '~/store/index'

const route = useRoute()
const homeStore = useHomeStore()

homeStore.nuxtServerInit()
</script>

<style>
.error-page {
  background: url('/pattern/help.png') no-repeat #07091c;
  background-size: cover;
}
.error-title {
  margin-top: -132px;
}
.error-description {
  max-width: 487px;
}
.shape {
  animation: rotate 20s linear infinite;
}
@keyframes rotate {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

@media screen and (max-width: 768px) {
  .shape {
    max-width: 70% !important;
  }

  .logo-moon {
    max-width: 18% !important;
  }
}
</style>
