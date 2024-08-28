<template>
  <div class="pb-16">
    <div class="container">
      <div class="text-white mb-10">
        <p class="text-[28px] leading-130 font-bold font-playfair mb-2">
          {{ $t('media') }}
        </p>
        <p class="text-base leading-130 font-semibold opacity-60">
          {{ $t('media_sub') }}
        </p>
      </div>
    </div>
    <div class="relative">
      <div
        class="gradient-left w-[54px] sm:w-[224px] md:w-[424px] h-full absolute left-0 top-0 z-10 pointer-events-none"
      ></div>
      <CommonMarquee />
      <div
        class="gradient-right w-[54px] sm:w-[224px] md:w-[424px] h-full absolute right-0 top-0 z-10 pointer-events-none"
      ></div>
    </div>
  </div>
</template>

<style scoped>
.gradient-left {
  background: linear-gradient(
    90deg,
    rgba(7, 9, 28, 0.9) 0%,
    rgba(7, 9, 28, 0) 100%
  );
}
.gradient-right {
  background: linear-gradient(
    90deg,
    rgba(7, 9, 28, 0.9) 0%,
    rgba(7, 9, 28, 0) 100%
  );
  transform: matrix(-1, 0, 0, 1, 0, 0);
}
</style>
