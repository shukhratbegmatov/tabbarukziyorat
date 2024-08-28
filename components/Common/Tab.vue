<template>
  <div
    class="main-tab relative bg-white/12 rounded-full flex w-max transition-300 overflow-hidden"
  >
    <div
      :class="activeClass"
      class="absolute h-full rounded-full bg-white w-full -translate-y-1/2 top-1/2 transition-300 text-dark"
      :style="{ width: `${active.width}px`, left: `${active.left}px` }"
    ></div>
    <button
      v-for="(tab, idx) in list"
      :id="`item_${tab.value}`"
      :key="idx"
      :class="[
        itemClass,
        modelValue === tab.value ? 'text-dark hover:!text-dark' : '!text-white',
      ]"
      class="tabs py-2.5 px-6 rounded-full transition-300 w-full text-lg font-medium z-10 hover:text-dark font-medium tabs"
      @click="pick(tab.value, $event)"
    >
      {{ tab.label }}
    </button>
  </div>
</template>

<script lang="ts" setup>
import { ITabItem } from '~/types/components'

interface Props {
  modelValue: string | number
  list: ITabItem[]
  itemClass?: string
  activeClass?: string
}
const props = defineProps<Props>()

interface Emits {
  (e: 'update:modelValue', value: string | number): void
}
const $emit = defineEmits<Emits>()

const active = ref({ left: 0, width: 0 })
const pick = (tab: string | number, e?: { target: HTMLButtonElement }) => {
  const target = e.target as HTMLButtonElement
  active.value = {
    left: target?.offsetLeft,
    width: target?.offsetWidth,
  }
  $emit('update:modelValue', tab)
}


watch(
    () => props.modelValue,
    () => {
      const item = document.getElementById(
          `item_${props.modelValue}`
      ) as HTMLButtonElement;
      pick(props.modelValue, { target: item });
    }
);

onMounted(() => {
  const item = document.getElementById(
    `item_${props.modelValue}`
  ) as HTMLButtonElement
  setTimeout(() => {
    pick(props.modelValue, { target: item })
  }, 1)
})
</script>
