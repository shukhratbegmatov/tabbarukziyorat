<template>
  <section class="marquee-wrapper relative z-[3] overflow-hidden">
    <div class="marquee-carousel marquee-carousel-1 mb-4 md:mb-6">
      <div class="marquee-items marquee__group_left">
        <div
          v-for="(item, index) in generateItem(images)"
          :key="index"
          class="w-[220px] md:w-[280px] h-[180px] md:h-[200px] rounded-xl overflow-hidden mr-4 md:mr-6 group cursor-pointer shrink-0"
          @click="$emit('open', item)"
        >
          <img
            :src="item?.image"
            alt="marquee-image"
            class="w-full h-full object-cover group-hover:scale-110 transition-300"
          />
        </div>
      </div>
    </div>
    <div class="marquee-carousel marquee-carousel-2">
      <div class="marquee-items marquee__group_right">
        <div
          v-for="(item, index) in generateItem(images)"
          :key="index"
          class="w-[220px] md:w-[280px] h-[180px] md:h-[200px] rounded-xl overflow-hidden mr-4 md:mr-6 group cursor-pointer shrink-0"
          @click="$emit('open', item)"
        >
          <img
            :src="item?.image"
            alt="marquee-image"
            class="w-full h-full object-cover group-hover:scale-110 transition-300"
          />
        </div>
      </div>
    </div>

    <div
      class="linear-bg-marquee w-[75px] sm:w-[100px] md:w-[300px] h-full absolute left-0 top-0 pointer-events-none"
    />
    <div
      class="linear-bg-marquee w-[75px] sm:w-[100px] md:w-[300px] h-full absolute right-0 top-0 rotate-180 pointer-events-none"
    />
  </section>
</template>

<script setup lang="ts">
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

interface Props {
  images: {
    image: string
  }[]
}

defineProps<Props>()

onMounted(() => {
  if (process.client) {
    gsap.registerPlugin(ScrollTrigger)
    ScrollTrigger.refresh()

    ScrollTrigger.config({
      autoRefreshEvents: 'visibilitychange,DOMContentLoaded,load, resize',
    })

    // Marquee effect
    const marquee = document.querySelectorAll('.marquee-wrapper')

    marquee.forEach((e) => {
      // Create swiper carousel
      const carousel = e.querySelectorAll('.marquee-carousel')

      // Scroll triggered movement
      const tl = new gsap.timeline()

      tl.set(carousel, { willChange: 'transform' })

      tl.fromTo(
        carousel[0],
        {
          x: -300,
        },
        {
          x: 0,
          ease: 'none',
        },
        0
      )

      tl.fromTo(
        carousel[1],
        {
          x: 300,
        },
        {
          x: 0,
          ease: 'none',
        },
        0
      )

      tl.set(carousel, { willChange: 'auto' })

      ScrollTrigger.create({
        trigger: e,
        animation: tl,
        start: 'top bottom',
        end: 'bottom -100%',
        scrub: 0.3,
        refreshPriority: -14,
      })
    })
  }
})

interface Gallery {
  id: number
  image: string
  title: string
}

function generateItem(arr: Gallery[]) {
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
.marquee-carousel.marquee-carousel-1 {
  margin-right: -900px;
}

.marquee-carousel.marquee-carousel-2 {
  margin-left: -900px;
}

.marquee-items {
  -webkit-transition-timing-function: cubic-bezier(0.16, 1, 0.3, 1) !important;
  -moz-transition-timing-function: cubic-bezier(0.16, 1, 0.3, 1) !important;
  -o-transition-timing-function: cubic-bezier(0.16, 1, 0.3, 1) !important;
  display: -webkit-box;
  position: relative;
  width: 100%;
  transition-timing-function: cubic-bezier(0.16, 1, 0.3, 1) !important;
}

.linear-bg-marquee {
  background: linear-gradient(
    90deg,
    rgba(7, 9, 28, 0.9) 0%,
    rgba(7, 9, 28, 0) 100%
  );
}

.marquee__group_left {
  flex-shrink: 0;
  margin-left: -200px;
  display: flex;
  align-items: center;
  min-width: 100%;
  animation: scroll-left 100s linear infinite;
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
  min-width: 100%;
  animation: scroll-right 100s linear infinite;
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
