<template>
  <div
    class="absolute bottom-full left-1/2 -translate-x-1/2 transition duration-300"
    :class="[
      show && withTrigger
        ? '!-translate-y-4 !visible !opacity-100'
        : 'invisible opacity-0',
      {
        'md:group-hover:visible md:group-hover:opacity-100 md:group-hover:-translate-y-4':
          !withTrigger,
      },
    ]"
  >
    <div
      class="tooltip bg-dark-100 rounded-lg px-4 py-2 text-sm leading-4 text-white relative"
    >
      <slot></slot>
    </div>
  </div>
</template>
<script setup lang="ts">
interface Props {
  withTrigger?: boolean
  show?: boolean
}
defineProps<Props>()
</script>
