<template>
  <div
    class="fixed top-0 left-0 h-screen w-screen bg-dark z-[100] flex-y-center"
  >
    <div class="w-full h-full flex-y-center">
      <div class="relative w-full max-auto text-center">
        <div
          class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] h-[200px] lg:w-[270px] lg:h-[270px] bg-red-100 rounded-full"
        />
        <div
          class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] h-[200px] lg:w-[270px] lg:h-[270px] bg-red-100 rounded-full custom-blur"
        />
        <span
          class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-0"
        >
          <img
            class="shape w-[150px] h-[150px] lg:w-auto lg:h-auto"
            src="/svg/logo-shape.svg"
            alt="shape"
          />
        </span>
        <img
          class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-1 w-[80px] h-[80px] lg:w-auto lg:h-auto"
          src="/svg/logo-main.svg"
          alt="main logo"
        />
      </div>
    </div>
  </div>
</template>
<style>
.custom-blur {
  background: #e54545;
  filter: blur(90px);
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
</style>
