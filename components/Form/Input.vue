<template>
  <div
    :class="[
      'relative inline-flex items-center transition-300 relative rounded-lg border overflow-hidden w-full px-4 py-3 group focus-within:border-white/70 bg-white/10 border-white/20 input-backdrop',
      { '!border-red': error },
    ]"
  >
    <span :class="[prefixClass]" class="flex-center">
      <slot name="prefix" />
    </span>
    <input
      :value="modelValue"
      v-bind="{
        type,
        minlength,
        maxlength,
        max,
        min,
        disabled,
        placeholder,
        readonly,
        autocomplete,
        id,
      }"
      :class="[
        inputClass,
        'font-medium leading-130 text-base placeholder:text-base placeholder:font-normal bg-transparent flex-grow outline-none text-white placeholder:text-white/20',
      ]"
      class="w-full"
      ref="Input"
      @keyup.enter="handleEnter"
      @input="handleInput"
      @blur="$emit('blur')"
      @focusout="$emit('focusout')"
      @focus="handleFocus"
    />

    <span :class="[suffixClass]" class="flex-center">
      <slot name="suffix" />
    </span>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'

export interface Props {
  type?: string
  placeholder?: string
  modelValue: number | string
  disabled?: boolean
  error?: boolean
  focus?: boolean
  maxlength?: number
  minlength?: number
  max?: number
  min?: number
  inputClass?: string | string[]
  prefixClass?: string
  suffixClass?: string
  autocomplete?: string
  id?: string
  readonly?: boolean
}

const emit = defineEmits<{
  (e: 'update:modelValue', value: any): void
  (e: 'blur'): void
  (e: 'focusout'): void
  (e: 'focus'): void
  (e: 'enter'): void
}>()

const handleInput = (e: { target: HTMLInputElement }) => {
  emit('update:modelValue', e.target.value)
}
const handleEnter = () => {
  emit('enter')
}
const Input = ref()
defineExpose({ Input })

const props = withDefaults(defineProps<Props>(), {
  type: 'text',
  maxlength: 99,
  minlength: undefined,
  max: undefined,
  min: undefined,
  inputClass: undefined,
  autocomplete: 'new-password',
})

const handleFocus = (e: Event) => {
  emit('focus')
}
watch(
  () => props?.focus,
  (value) => {
    if (value) {
      Input?.value?.focus()
    }
  },
  { deep: true, immediate: true }
)
</script>

<style>
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
<style scoped>
/* slightly transparent fallback */
.input-backdrop {
  background-color: rgba(7, 9, 28, 0.12);
}

/* if backdrop support: very transparent and blurred */
@supports ((-webkit-backdrop-filter: none) or (backdrop-filter: none)) {
  .input-backdrop {
    background-color: rgba(7, 9, 28, 0.12);
    -webkit-backdrop-filter: blur(20px);
    backdrop-filter: blur(20px);
  }
}
</style>
