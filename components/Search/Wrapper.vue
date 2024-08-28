<template>
  <div
    class="absolute w-[93%] right-12 transition-all duration-300"
    :class="wrapperClass"
  >
    <FormInput
      :model-value="search"
      class="transition-300"
      :placeholder="$t('search')"
      :class="[searchTrigger ? 'opacity-100' : 'opacity-0']"
      @update:modelValue="handleUpdateSearch"
      input-class="pl-2 mt-0.5"
      prefix-class="leading-130"
      :focus="searchTrigger"
    >
      <template #suffix>
        <button
          v-if="search"
          @click="clear"
          class="py-1.5 px-2 text-sm leading-120 rounded-md bg-white/[0.06] hover:bg-white/20 text-white transition-300"
        >
          {{ $t('clear') }}
        </button>
      </template>
    </FormInput>
    <Transition name="fade" mode="out-in">
      <div class="relative w-full" v-if="searchTrigger && search">
        <div
          class="absolute top-3 left-0 w-full border border-solid border-white/20 rounded-lg w-auto h-auto z-50 backdrop-blur z-50 shadow-md"
        >
          <template v-if="searchContent?.length > 0">
            <ul class="list">
              <SearchValue
                v-for="(value, index) of searchContent"
                :key="index"
                :search="search"
                :slug="value?.slug"
                :title="value?.title"
                :breadcrumb="value?.region"
              />
            </ul>
          </template>
          <template v-else>
            <SearchEmpty />
          </template>
        </div>
      </div>
    </Transition>
  </div>
</template>

<script setup lang="ts">
import { debounce } from '~/utils/index'
import { watch } from 'vue'
interface Props {
  search?: string
  searchTrigger?: boolean
  searchContent?: {
    title?: string
    region?: {}
  }[]
  wrapperClass?: string
}
const props = defineProps<Props>()
interface Emits {
  (e: 'handleUpdateSearch', value: string): void
  (e: 'clear'): void
}
const emit = defineEmits<Emits>()

function clear() {
  emit('clear')
}
const handleUpdateSearch = (value: string) => {
  debounce('search', () => {
    emit('handleUpdateSearch', value)
  })
}
</script>

<style>
.list li {
  position: relative;
  cursor: pointer;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  transition: all 0.2s ease-in-out;
}
.list li a {
  padding: 12px 16px !important;
}
.list li:first-child {
  border-radius: 12px 12px 0 0;
}

.list li:last-child {
  border-radius: 0 0 12px 12px;
}

.list li:hover {
  background-color: rgba(118, 129, 148, 0.11);
}

.list li:not(:last-child)::before {
  content: '';
  position: absolute;
  right: 0;
  bottom: 0;
  width: calc(100% - 16px);
  height: 1px;
  background-color: rgba(255, 255, 255, 0.08);
}
</style>
