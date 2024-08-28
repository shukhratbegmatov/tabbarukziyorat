<template>
  <label
    :for="forId"
    class="font-medium text-base text-white leading-130 flex items-start gap-0.5"
  >
    {{ label }}
    <span v-if="required" class="text-xs text-orange">*</span>
    <span
      v-if="info"
      class="icon-info-circle text-gray text-base mt-2 cursor-pointer transition-200 hover:text-blue"
    />
  </label>
</template>

<script lang="ts" setup>
interface Props {
  label?: string
  forId?: string
  required?: boolean
  info?: boolean
}

withDefaults(defineProps<Props>(), {
  label: 'Label',
  forId: 'input',
  required: false,
  info: false,
})
</script>
