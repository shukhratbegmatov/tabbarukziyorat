<template>
  <aside class="h-screen grid grid-rows-max-1 w-[404px] bg-dark map-sidebar">
    <div class="border-b border-white/8 p-5">
      <div class="flex items-center gap-2 mb-3">
        <button @click="$router.push('/')" class="group">
          <i
            class="icon-arrow-left text-white text-2xl transition-300 group-hover:text-white/60"
          ></i>
        </button>
        <NuxtLink :to="localePath('/')">
          <CommonLogo :key="loading" />
        </NuxtLink>
      </div>
      <div v-if="width > 900" class="flex gap-3">
        <FormInput
          v-model="search"
          @update:modelValue="handleSearch"
          :placeholder="$t('search')"
        >
          <template #prefix>
            <span
              class="icon-search text-xl leading-5 text-gray-400 mr-2 transition-300"
            />
          </template>
          <template #suffix>
            <span
              class="icon-xmark text-gray-400 -my-0.5 text-2xl leading-6 transition duration-300 cursor-pointer hover:text-gray"
              :class="
                search?.length ? 'opacity-100 visible' : 'opacity-0 invisible'
              "
              @click="clearInput"
            />
          </template>
        </FormInput>
        <button
          class="shrink-0 text-gray-200 transition-300 hover:text-white"
          @click="emit('open-filter')"
        >
          <i class="icon-sliders text-2xl"></i>
        </button>
      </div>
      <CommonTab
        :list="tabs"
        v-model="activeTab"
        class="!w-full mt-4 hidden tab-sidebar"
      />
    </div>
    <Transition name="fade" mode="out-in">
      <div
        :key="activeTab"
        class="h-full max-h-full overflow-y-auto custom-scroll px-4 lg:px-0"
      >
        <div v-if="activeTab === 'list'">
          <div v-if="width < 900" class="flex gap-3 my-4">
            <FormInput
              v-model="search"
              @update:modelValue="handleSearch"
              :placeholder="$t('search')"
            >
              <template #prefix>
                <span
                  class="icon-search text-xl leading-5 text-gray-400 mr-2 transition-300"
                />
              </template>
              <template #suffix>
                <span
                  class="icon-xmark text-gray-400 -my-0.5 text-2xl leading-6 transition duration-300 cursor-pointer hover:text-gray"
                  :class="
                    search?.length
                      ? 'opacity-100 visible'
                      : 'opacity-0 invisible'
                  "
                  @click="clearInput"
                />
              </template>
            </FormInput>
            <button
              class="shrink-0 text-gray-200 transition-300 hover:text-white"
              @click="emit('open-filter')"
            >
              <i class="icon-sliders text-2xl"></i>
            </button>
          </div>
          <div v-if="locations?.length" class="py-4">
            <CardLocationItem
              v-for="(location, idx) of loading ? 13 : locations"
              :key="idx"
              :loading="loading"
              :data="location"
              @click="observeCard(location)"
            />
            <div ref="target" />
          </div>

          <template v-if="!locations?.length && popular?.length">
            <div
              class="flex flex-col justify-center items-center pt-6 pb-8 border-b border-b-white/10"
            >
              <img src="/svg/empty-state.svg" alt="No data" />
              <p
                class="mt-4 text-white/60 max-w-[280px] text-center font-medium"
              >
                {{ $t('no_results_found_text') }}
              </p>
            </div>
            <template v-if="popular?.length">
              <h3 class="text-white px-5 mt-4 text-lg font-medium">
                {{ $t('popular_attractions') }}
              </h3>
              <CardLocationItem
                v-for="(location, idx) of popular"
                :key="idx"
                :data="location"
              />
            </template>
          </template>
        </div>
        <div v-else class="w-full h-full">
          <MapMain :default-coords="coords" :locations="locations" />
        </div>
      </div>
    </Transition>
  </aside>
</template>
<script lang="ts" setup>
import { ITabItem } from '~/types/components'
import { ILocation } from '~/types/locations'
import { debounce } from '~/utils/index'
import { computed, ref } from 'vue'
import { useWindowSize, useIntersectionObserver } from '@vueuse/core'
import { useDestinationStore } from '~/store/destination'

const { width } = useWindowSize()
interface Props {
  locations: ILocation[]
  popular: ILocation[]
  loading: boolean
}
const props = defineProps<Props>()
const emit = defineEmits<{
  (e: 'open-filter'): void
  (e: 'handleSearch', value: string): void
  (e: 'observe', value: string): void
  (e: 'observeDestinations'): void
}>()

const destinationStore = useDestinationStore()

const search = ref('')
const coords = ref([])

const target = ref(null)
const targetIsVisible = ref(false)

const next = computed(() => destinationStore.next)

const { stop } = useIntersectionObserver(
  target,
  ([{ isIntersecting }], observerElement) => {
    targetIsVisible.value = isIntersecting
    if (targetIsVisible.value && next?.value !== null) {
      emit('observeDestinations')
    }
  }
)

const handleSearch = (value: string) => {
  search.value = value
  debounce('search', () => {
    emit('handleSearch', search.value)
  })
}

function clearInput() {
  search.value = ''
  emit('handleSearch', '')
}

function observeCard(location: ILocation) {
  if (width.value < 900) {
    activeTab.value = 'map'
  }
  coords.value = location?.location?.split(';')
  emit('observe', location)
}

const activeTab = ref<ITabItem['value']>('list')
const tabs: ITabItem[] = [
  {
    label: 'Map',
    value: 'map',
  },
  {
    label: 'List',
    value: 'list',
  },
]
</script>

<style scoped>
@media screen and (max-width: 900px) {
  .map-sidebar {
    width: 100%;
    display: block;
  }

  .tab-sidebar {
    display: flex;
  }
}

.custom-scroll::-webkit-scrollbar {
  height: 3px;
  width: 8px;
  background-color: #969696;
}

.custom-scroll::-moz-scrollbar {
  height: 3px;
  width: 8px;
  background-color: #969696;
}

.custom-scroll::-ms-scrollbar {
  height: 3px;
  width: 8px;
  background-color: #969696;
}

.custom-scroll::-o-scrollbar {
  height: 3px;
  width: 8px;
  background-color: #969696;
}

.custom-scroll::-webkit-scrollbar-thumb {
  background-color: #e54545;
  border-radius: 5px;
}

.custom-scroll::-moz-scrollbar-thumb {
  background-color: #e54545;
  border-radius: 5px;
}

.custom-scroll::-ms-scrollbar-thumb {
  background-color: #e54545;
  border-radius: 5px;
}

.custom-scroll::-o-scrollbar-thumb {
  background-color: #e54545;
  border-radius: 5px;
}
</style>
