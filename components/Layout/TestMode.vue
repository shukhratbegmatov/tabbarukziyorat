<template>
  <div class="bg-red-100 overflow-x-hidden flex-y-center transition-200 py-2">
    <div class="w-full h-full relative">
      <div class="marquee">
        <div aria-hidden="true" class="marquee__group_left space-x-3">
          <div
            v-for="el of generateItem([1, 2, 3, 4, 5, 6])"
            :key="el"
            class="flex-y-center space-x-3 cursor-pointer"
          >
            <div class="relative flex-shrink-0 rounded-full bg-red">
              <img src="/svg/warning.svg" alt="warning" />
            </div>
            <p
              class="text-sm text-white font-semibold leading-130 transition-200"
            >
              {{ $t('test_mode') }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
function generateItem(arr) {
  if (arr) {
    let index = 0 // 1 / 2
    const generatedArray = [] // [{id: 1},{id: 2}, {id: 3}, {id: 1}]
    const checkResponseLength = arr?.length // 3
    const checkAdditionalItems = 100 - checkResponseLength // 97
    for (let i = 0; i <= checkAdditionalItems; i++) {
      generatedArray.push(arr[index])
      if (index + 1 === checkResponseLength) {
        index = 0
      } else {
        index++
      }
    }
    return generatedArray
  }
}
</script>

<style scoped>
.custom-gradient {
  background: linear-gradient(
    90deg,
    #ffffff 2.58%,
    rgba(255, 255, 255, 0) 100%
  );
}
.custom-gradient-dark {
  background: linear-gradient(90deg, #191f2e 2.58%, rgba(25, 31, 46, 0) 100%);
}
.marquee {
  display: flex;
  overflow: hidden;
  user-select: none;
  gap: 3rem;
}

.marquee__group_left {
  flex-shrink: 0;
  margin-left: -200px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  gap: 28px;
  min-width: 100%;
  animation: scroll-left 2000s linear infinite;
}

.marquee__group_left:hover {
  animation-play-state: paused;
}
@keyframes scroll-left {
  0% {
    transform: translateX(0);
  }

  100% {
    transform: translateX(calc(-100% + 3rem));
  }
}
</style>
