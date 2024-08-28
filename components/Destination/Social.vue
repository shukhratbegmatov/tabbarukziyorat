<template>
  <div
    class="p-4 border border-solid border-white/20 destination-bg-blur rounded-xl flex-center-between gap-4"
  >
    <div class="flex-y-center gap-4">
      <i class="icon-share text-white text-[32px]" />
      <div class="white-shadow-border" />

      <div class="flex-y-center gap-4">
        <div
          class="w-8 h-8 rounded-full bg-white/[12%] flex-center cursor-pointer group transition-300 hover:bg-white"
          v-for="(item, index) in socials"
          :key="index"
          v-tooltip="item?.title"
          @click="share(item.type, title)"
        >
          <i
            :class="item?.icon"
            class="text-white text-2xl transition-300 group-hover:text-blue"
          />
        </div>
      </div>
    </div>

    <CommonCopyUrl />
  </div>
</template>

<script setup lang="ts">
import { share } from '~/utils'

interface Props {
  title?: string
}

defineProps<Props>()

const socials = [
  {
    title: 'Facebook',
    icon: 'icon-facebook text-lg',
    type: 'facebook',
    link: 'https://www.facebook.com/TabarrukZiyorat',
  },
  {
    title: 'Twitter',
    icon: 'icon-twitter',
    type: 'twitter',
    link: 'https://twitter.com/tabarrukziyorat',
  },
  {
    title: 'Telegram',
    icon: 'icon-telegram',
    type: 'telegram',
    link: 'https://t.me/tabarrukziyorat',
  },
]
</script>

<style scoped>
.destination-bg-blur {
  background: #ffffff1f;
}

@supports ((-webkit-backdrop-filter: none) or (backdrop-filter: none)) {
  .destination-bg-blur {
    -webkit-backdrop-filter: blur(15px);
    backdrop-filter: blur(15px);
  }
}

.white-shadow-border {
  width: 1px;
  height: 32px;
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0) 0%,
    #ffffff 51.04%,
    rgba(255, 255, 255, 0) 100%
  );
}
</style>
