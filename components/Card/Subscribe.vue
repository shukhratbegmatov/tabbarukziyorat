<template>
  <NuxtLink
    :to="localePath(url)"
    class="relative inline-flex lg:hidden items-stretch justify-between space-x-7 bg-white/5 border w-full sm:w-auto border-solid border-white/10 p-2 rounded-xl group mt-3"
  >
    <div class="space-y-3 text-left">
      <p class="text-white text-lg font-bold leading-140">
        {{ $t('subscribe') }}
      </p>
      <p class="flex items-center space-x-1">
        <img src="/svg/icons_instagram.svg" alt="icons_instagram" />
        <span class="text-white/60 text-lg font-bold leading-140">
          @ziyorati_tabarruk
        </span>
      </p>
    </div>
    <div class="overflow-hidden rounded-lg shrink-0 !w-[102px] relative">
      <img
        src="/islam.webp"
        alt="religion"
        class="w-full h-full object-cover"
      />
      <div
        class="absolute w-full h-full top-0 lef-0 transition-300 subscribe-gradient flex flex-col items-center justify-center"
      >
        <i class="icon-moon-circle text-white text-2xl"></i>
      </div>
    </div>
  </NuxtLink>
</template>

<style scoped>
.subscribe-gradient {
  background: linear-gradient(
    0deg,
    rgba(19, 26, 41, 0.2),
    rgba(19, 26, 41, 0.2)
  );
}
</style>
