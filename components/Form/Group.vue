<template>
  <div class="space-y-2 flex-col">
    <FormLabel v-bind="{ label, forId, required, info, dark }" />
    <slot />
  </div>
</template>

<script lang="ts" setup>

interface Props{
  label?: string
  forId?: string
  required?: boolean
  info?: boolean
  dark?: boolean
}
withDefaults(defineProps<Props>(), {
  label: 'Label',
  forId: 'input',
  required: false,
  info: false,
  dark: false,
})
</script>
