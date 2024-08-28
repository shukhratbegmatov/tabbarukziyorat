<template>
  <button class="w-6 h-6 rounded-full flex items-center justify-center">
    <i :class="iconStyle" class="text-white text-[27px]"></i>
  </button>
</template>

<script lang="ts" setup>
import { EReligion } from '~/types/religions'

interface Props {
  type: EReligion
}
const props = withDefaults(defineProps<Props>(), {
  type: EReligion.ISLAM,
})

const iconStyle = computed(() => {
  switch (props.type) {
    case EReligion.ISLAM:
      return 'icon-islam-moon'
    case EReligion.CHRISTIANITY:
      return 'icon-christian'
    case EReligion.BUDDHISM:
      return 'icon-budda'
    default:
      return 'icon-islam-moon'
  }
})
</script>
