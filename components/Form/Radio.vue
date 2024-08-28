<template>
  <label
    class="transition group inline-flex items-center relative select-none min-h-[20px] rounded-lg py-[14px] px-4 border border-solid hover:border-orange"
    :class="[
      disabled ? 'cursor-not-allowed' : 'cursor-pointer',
      { '!border-orange': modelValue === value },
      error ? 'border-red' : 'border-gery-light',
    ]"
    :style="{ minHeight: computedSize, '--btn-size': computedBtnSize }"
  >
    <input
      type="radio"
      class="absolute opacity-0 invisible h-0 w-0 peer"
      :checked="modelValue === value"
      v-bind="{ name, value, disabled }"
      @change="handleChange"
    />
    <span
      :class="[
        's-radio-btn shrink-0 duration-200 ease-in-out bg-grey-light  peer-checked:before:opacity-100 mr-3 before:opacity-0 relative border-2 rounded-full box-border before:absolute before:top-1/2 before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:rounded-full before:transition-all before:duration-200 group-hover:before:!bg-orange group-hover:before:opacity-60',
        'border-grey-light peer-disabled:before:bg-gray-100',
        computedBtnStyles,
      ]"
      :style="{ width: computedSize, height: computedSize }"
    />
    <slot name="label">
      <span :class="['font-medium text-[#2B3646]', labelStyles]">
        {{ label }}
      </span>
    </slot>
  </label>
</template>

<script setup lang="ts">
import { computed } from 'vue'

interface Props {
  modelValue: string | number | object
  value?: string | number | object
  label: string | number | object
  name?: string | number
  error?: boolean
  disabled?: boolean
  size?: string | number
  btnStyles?: string
  labelStyles?: string
}

const props = withDefaults(defineProps<Props>(), {
  disabled: false,
  size: 20,
  btnStyles:
    'group-hover:border-orange peer-checked:bg-white peer-checked:border-orange peer-checked:before:!bg-orange',
})

const emit = defineEmits<{
  (e: 'update:modelValue', value: string | number | object | boolean): void
}>()

const handleChange = (e: Event) => {
  const target = e.target as HTMLInputElement
  emit('update:modelValue', props.value ? target.value : target.checked)
}

const computedSize = computed(() => props.size + 'px')

const computedBtnSize = computed(() => +props.size * 0.5 + 'px')

const computedBtnStyles = computed(() =>
  !props.disabled ? props.btnStyles : 'peer-checked:before:!bg-gray-100'
)
</script>

<style scoped>
.s-radio-btn::before {
  width: var(--btn-size);
  height: var(--btn-size);
}
</style>
