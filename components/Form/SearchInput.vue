<template>
  <FormInput
    v-model="searchValue"
    class="!py-[10px]"
    :model-value="searchValue"
    :placeholder="$t('search')"
    @update:modelValue="inputChange"
    :class="inputClassWrapper"
    :input-class="inputClass"
    prefix-class="flex"
  >
    <template #prefix>
      <span
        :class="prefixClass"
        class="icon-search text-xl leading-5 text-dark/60 mr-2 transition-300 group-focus-within:text-orange"
      />
    </template>
    <template #suffix>
      <span
        class="icon-close text-dark/60 -my-0.5 text-2xl leading-6 transition duration-300 cursor-pointer hover:text-orange"
        :class="searchValue ? 'opacity-100' : 'opacity-0 invisible'"
        @click="clearInput"
      />
    </template>
  </FormInput>
</template>

<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router'
import { debounce } from 'perfect-debounce'

interface Props {
  inputClassWrapper?: string
  inputClass?: string
  prefixClass?: string
}
defineProps<Props>()

const emit = defineEmits<{
  (e: 'clear'): void
  (e: 'search', value: string): void
}>()

const router = useRouter()
const route = useRoute()

const searchValue = ref(route.query.search ?? '')
function clearInput() {
  searchValue.value = ''
  inputChange(undefined)
  emit('clear')
}
function inputChange(search: string | undefined) {
  debounce(
    'search',
    () => {
      useUpdateRouteQuery('search', search ?? '')
      emit('search', search ?? '')
    },
    500
  )
}
</script>
