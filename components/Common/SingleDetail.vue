<template>
  <div class="border-t border-dark-100 pt-3 md:pt-4">
    <div
      class="max-w-[584px] w-fit mx-auto flex items-stretch gap-4 p-3 md:p-4 max-sm:flex-col bg-dark/50 border border-white/20 rounded-xl"
    >
      <div class="flex gap-3 sm:gap-4">
        <i
          class="icon-share text-white text-2xl sm:text-32 leading-6 sm:leading-8"
        />
        <span
          class="w-px h-6 sm:h-8"
          style="
            background: linear-gradient(
              180deg,
              rgba(255, 255, 255, 0) 0%,
              #ffffff 51.04%,
              rgba(255, 255, 255, 0) 100%
            );
          "
        />
        <button
          @click="share('telegram', title)"
          class="icon-telegram social-share group"
        >
          <CommonTooltip> Telegram </CommonTooltip>
        </button>
        <button
          @click="share('twitter', title)"
          class="icon-twitter social-share group"
        >
          <CommonTooltip> Twitter </CommonTooltip>
        </button>
      </div>
      <CommonCopyUrl />
      <!--      <a href="" class="icon-facebook social-share" />-->
    </div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  title?: string
}
defineProps<Props>()
</script>

<style scoped>
.social-share {
  @apply w-6 sm:w-8 h-6 sm:h-8 text-xl sm:text-2xl leading-5 md:leading-6 text-white bg-white/10 rounded-full flex items-center justify-center hover:bg-white hover:text-[#2AABEE] duration-300 relative;
}

.social-share.icon-telegram:hover {
  color: #2aabee;
}
.social-share.icon-twitter:hover {
  color: #1d9bf0;
}
</style>
