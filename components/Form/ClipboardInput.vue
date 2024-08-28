<template>
  <FormGroup
    :label="title"
    class="relative w-full"
    for-id="linkedin_profile"
    v-bind="{ required }"
  >
    <FormInput
      id="linkedin_profile"
      v-model="updateModelValue"
      :placeholder="placeholder"
      class="bg-white"
      :error="error"
      maxlength="100"
      @input="touch"
      input-class="text-base text-dark font-normal"
      suffix-class="absolute top-2 bottom-2 right-2"
    >
      <template #suffix>
        <button
          @click.prevent.stop="onPaste"
          class="bg-grey-light text-base text-dark font-normal leading-130 rounded px-2 py-[6px] transition-200 hover:bg-orange hover:text-white"
        >
          {{ $t('paste') }}
        </button>
      </template>
    </FormInput>
    <p
      v-if="dirty"
      class="absolute bottom-[-20px] left-0 text-xs whitespace-nowrap text-red"
    >
      <span v-if="url"> {{ $t('valid_url') }} </span>
    </p>
  </FormGroup>
</template>

<script setup lang="ts">
interface Props {
  modelValue?: string
  dirty?: boolean
  url?: boolean
  touch?: boolean
  error?: boolean
  title?: string
  placeholder?: string
  required?: boolean
}

const props = defineProps<Props>()
const emit = defineEmits(['setClipboardValue', 'update:modelValue'])

const updateModelValue = computed({
  get() {
    return props.modelValue
  },
  set(newValue) {
    emit('update:modelValue', newValue)
  },
})

async function onPaste() {
  if (process.client && navigator) {
    emit('setClipboardValue', await navigator.clipboard.readText())
  }
}
</script>
