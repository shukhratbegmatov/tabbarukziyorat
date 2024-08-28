<template>
  <label
    class="group inline-flex items-center relative select-none min-h-[24px] px-5 py-3 border border-white/8 rounded-lg transition-300 hover:border-white/40"
    :class="disabled ? 'cursor-not-allowed' : 'cursor-pointer'"
  >
    <div class="pr-8 flex items-center">
      <slot name="label">
        <img
          v-if="icon"
          :src="icon"
          alt="icon"
          class="rounded-full mr-3 w-6 h-6"
        />
        <span
          :class="[
            'font-medium letter-3 leading-130 text-white text-base',
            labelStyles,
          ]"
        >
          {{ label }}
        </span>
      </slot>
    </div>
    <input
      v-bind="{ disabled, checked }"
      type="checkbox"
      class="absolute opacity-0 invisible h-0 w-0 peer"
      :value="value"
      :name="name"
      @change="handleChange"
    />
    <span
      :class="[
        'duration-200 ease-in-out absolute right-5 inline-block h-6 w-6 rounded border-2 peer-checked:-rotate-90 peer-checked:after:opacity-100 peer-checked:after:rotate-[138deg] after:transition-all after:duration-200 after:absolute after:left-2 after:top-[5px] after:w-1.5 after:h-3 after:border-r-[2.2px] after:border-b-[2.2px] after:rotate-[0deg] after:opacity-0',
        'border-grey-light peer-checked:border-orange peer-checked:bg-orange after:border-white peer-disabled:border-grey-100 peer-disabled:after:border-grey-100',
        {
          '!border-danger': error,
          'group-hover:border-primary': !disabled,
        },
      ]"
    />
  </label>
</template>

<script setup lang="ts">
interface Props {
  modelValue?: string | number | boolean
  label?: string
  name?: string
  value?: string | number | boolean
  disabled?: boolean
  error?: boolean
  labelStyles?: string
  icon?: string
  checked?: boolean
}

const props = withDefaults(defineProps<Props>(), {})

const emit = defineEmits<{
  (e: 'update:modelValue', value: Props['modelValue']): void
}>()
const handleChange = (e: Event) => {
  const target = e.target as HTMLInputElement
  emit('update:modelValue', target?.value)
}
</script>
