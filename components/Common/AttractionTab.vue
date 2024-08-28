<template>
  <div
    class="w-full max-w-full md:max-w-fit relative gap-[6px] p-0.5 bg-white/10 border border-solid border-white/10 rounded-xl flex overflow-hidden p-[6px]"
  >
    <div
      :class="activeClass"
      class="absolute h-[calc(100%-12px)] rounded-md bg-red w-full -translate-y-1/2 top-1/2 transition-all duration-300 border border-white/25"
      :style="{
        width: `${active.width}px`,
        left: `${active.left}px`,
      }"
    ></div>
    <button
      v-for="(tab, idx) in list"
      :id="'item_' + tab?.id"
      :key="idx"
      :class="[
        itemClass,
        modelValue === tab?.id
          ? 'text-white font-medium'
          : 'text-white/60 font-medium',
      ]"
      class="min-w-[32%] sm:min-w-[32.5%] md:min-w-[160px] bg-white/10 py-2 px-3 md:px-7 text-sm sm:text-base md:text-xl leading-130 rounded-md z-10 m-0 transition-all duration-300 hover:text-white/100 border border-transparent hover:border-white/25"
      @click="pick(tab?.id, $event)"
    >
      <slot name="item" v-bind="tab"> {{ tab?.title }} </slot>
    </button>
  </div>
</template>

<script lang="ts" setup>
import { ITabItem } from '~/types/components'

import { watch, onMounted } from 'vue'

interface Props {
  modelValue: number | string
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
  const target = e?.target as HTMLButtonElement
  if (target) {
    active.value = {
      left: target?.offsetLeft,
      width: target?.offsetWidth,
    }

    $emit('update:modelValue', tab)
  }
}

watch(
  () => props.modelValue,
  () => {
    const item = document.getElementById(
      `item_${props.modelValue}`
    ) as HTMLButtonElement
    pick(props.modelValue, { target: item })
  },
  { immediate: true, deep: true }
)

onMounted(() => {
  const item = document.getElementById(
    `item_${props.modelValue}`
  ) as HTMLButtonElement
  setTimeout(() => {
    pick(props.modelValue, { target: item })
  }, 0)
})
</script>
