<template>
  <ul class="relative flex items-center space-x-6">
    <li
      v-for="(item, idx) of navigations"
      :key="idx"
      class="relative text-white flex"
    >
      <CommonPreloader
        width="67px"
        height="21px"
        border-radius="4px"
        class="!inline-block"
        :loading="loading"
      >
        <template v-if="item?.action">
          <Dropdown position="left">
            <template #button>
              <button
                class="text-base font-bold leading-130 transition-all duration-150 hover:text-white/40"
                :class="{ '!text-red': checkCurrentRoute(item?.action) }"
              >
                {{ item?.title ? $t(item?.title) : 'foo' }}
              </button>
            </template>
            <template #items>
              <ul
                class="relative block grid p-4"
                :class="[
                  item?.action === 'countries'
                    ? 'w-max grid-cols-2'
                    : ' w-full grid-cols-1',
                ]"
              >
                <li
                  v-for="(link, i) of item?.content"
                  :key="i"
                  class="flex-shrink-0"
                >
                  <NavigationLink
                    :type="item?.action"
                    :id="link?.id"
                    :title="link?.title"
                    :icon="link?.flag"
                    :count="link?.destination_count"
                  />
                </li>
              </ul>
            </template>
          </Dropdown>
        </template>
        <template v-else>
          <NuxtLink
            :to="localePath(item?.url)"
            class="text-base font-bold leading-130 transition-all duration-150 hover:text-white/40"
          >
            {{ $t(item?.title) }}
          </NuxtLink>
        </template>
      </CommonPreloader>
    </li>
  </ul>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'

interface Props {
  loading?: boolean
  navigations?: {}[]
}
defineProps<Props>()
const route = useRoute()

const checkCurrentRoute = (target: string) => {
  if (
    (route?.fullPath.includes('country') && target === 'countries') ||
    (route?.fullPath.includes('religions') && target === 'religions')
  ) {
    return true
  }
}
</script>
<style scoped>
.router-link-exact-active {
  color: #e64545;
}
</style>
