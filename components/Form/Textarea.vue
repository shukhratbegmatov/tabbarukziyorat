<template>
  <div
    :class="[
      'inline-flex items-stretch relative border rounded-lg border overflow-hidden w-full transition-300 bg-transparent border-white/20 min-h-[87px] focus-within:border-white/70',
      { '!border-red': error },
    ]"
  >
    <textarea
      :value="modelValue"
      v-bind="{ type, minlength, maxlength, max, min, disabled, placeholder }"
      :readonly="!autocomplete"
      :id="id"
      :class="[
        inputClass,
        'font-medium resize-none h-full leading-130 text-base placeholder:text-base placeholder:font-normal bg-transparent flex-grow px-4 py-3 outline-none text-white placeholder:text-white/20',
        { 'resize-none': noResize },
      ]"
      class="w-full"
      :placeholder="$t(placeholder)"
      ref="Input"
      @input="handleInput"
      @blur="$emit('blur')"
      @focusout="$emit('focusout')"
      @focus="$emit('focus')"
    />
    <span
      v-if="maxlength"
      class="absolute bottom-2 right-2 text-xs text-white/60 font-normal leading-130"
      >{{ modelValue.length + '/' + maxlength }}</span
    >
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

export interface Props {
  type?: string
  placeholder?: string
  modelValue: number | string
  disabled?: boolean
  error?: boolean
  maxlength?: number
  minlength?: number
  max?: number
  min?: number
  inputClass?: string | string[]
  prefixClass?: string
  suffixClass?: string
  autocomplete?: boolean
  id: string
  noResize?: boolean
}

const emit = defineEmits<{
  (e: 'update:modelValue', value: any): void
}>()

const handleInput = (e: { target: HTMLInputElement }) => {
  emit('update:modelValue', e.target.value)
}

const Input = ref()
defineExpose({ Input })

withDefaults(defineProps<Props>(), {
  type: 'text',
  maxlength: undefined,
  minlength: undefined,
  max: undefined,
  min: undefined,
  inputClass: undefined,
  autocomplete: true,
})
</script>

<style scoped>
/* Chrome, Safari, Edge, Opera */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

/* Firefox */
input[type='number'] {
  -moz-appearance: textfield;
}
</style>
