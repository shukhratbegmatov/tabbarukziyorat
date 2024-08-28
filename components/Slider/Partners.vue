<template>
  <div :class="{ '!bg-dark': isDark }">
    <div class="relative">
      <div
        class="w-16 h-16 lg:w-[100px] lg:h-[100px] absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 rounded-full partners-shadow"
      >
        <img
          class="w-full h-full"
          src="/partners-logo.svg"
          alt="Tabarruk logo"
        />
      </div>
      <div class="marquee">
        <div aria-hidden="true" :class="`marquee__group_left`">
          <CardPartners
            v-for="(item, index) in generateItem(partners)"
            :key="index"
            :brand="item"
            :loading="loading"
            :isGray="true"
            :isDark="isDark"
          />
        </div>
      </div>

      <div class="marquee mt-7 md:mt-8">
        <div aria-hidden="true" :class="`marquee__group_right`">
          <CardPartners
            v-for="(item, index) in generateItem(partners)"
            :key="index"
            :brand="item"
            :loading="loading"
            :isGray="true"
            :isDark="isDark"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
interface TBrand {
  icon: string
  id: number
  override_price: string
  title: string
  warehouse: number
}

interface Props {
  partners: TBrand[]
  loading?: boolean
  position?: string
  isDark?: boolean
}

defineProps<Props>()

function generateItem(arr: TBrand[]) {
  if (arr) {
    let index = 0 // 1 / 2
    let generatedArray = [] // [{id: 1},{id: 2}, {id: 3}, {id: 1}]
    let checkResponseLength = arr?.length // 3
    let checkAdditionalItems = 100 - checkResponseLength // 97
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
.partners-shadow {
  box-shadow: 0px 0px 64px rgba(229, 69, 69, 0.54);
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
  animation: scroll-left 1000s linear infinite;
}

.marquee__group_left:hover {
  animation-play-state: paused;
}

.marquee__group_right:hover {
  animation-play-state: paused;
}

.marquee__group_right {
  flex-shrink: 0;
  margin-right: -200px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  min-width: 100%;
  gap: 28px;
  animation: scroll-right 1000s linear infinite;
}

@media screen and (max-width: 768px) {
  .marquee__group_right,
  .marquee__group_left {
    gap: 17px;
  }
}

@media (prefers-reduced-motion: reduce) {
  .marquee__group_left {
    animation-play-state: paused;
  }
}

.marquee__group_left p {
  aspect-ratio: 1;
  object-fit: cover;
  border-radius: 1rem;
  border: 1px solid #ccc;
  padding: 3rem;
}

@keyframes scroll-left {
  0% {
    transform: translateX(0);
  }

  100% {
    transform: translateX(calc(-100% + 3rem));
  }
}

@keyframes scroll-right {
  0% {
    transform: translateX(-50%);
  }

  100% {
    transform: translateX(calc(0 + 3rem));
  }
}
</style>
