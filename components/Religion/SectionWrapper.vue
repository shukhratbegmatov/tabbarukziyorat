<template>
  <div>
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <div>
        <p
          class="text-white text-[28px] leading-130 font-bold card-title-shadow font-playfair"
        >
          {{ card?.title }}
        </p>
        <p
          class="text-white/60 card-title-shadow text-sm leading-130 font-semibold mt-2"
        >
          {{
            countParser(
              $t('destination_count', card?.destinations?.length),
              card?.destinations?.length
            )
          }}
        </p>
      </div>
      <div class="w-full mt-4">
        <div
          class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6 gap-6"
        >
          <CardAttractions
            v-for="(item, i) in card?.destinations.slice(0, 6)"
            v-bind="{ item }"
            :key="i"
          />
        </div>
        <CollapseTransition :duration="400">
          <div
            v-if="show"
            class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6 gap-6 pt-6"
          >
            <CardAttractions
              v-for="(item, i) in card?.destinations.slice(6)"
              v-bind="{ item }"
              :key="i"
              class="!w-full !h-[200px]"
            />
            <NuxtLink
              v-if="card?.destinations_count > card?.destinations?.length"
              :to="localePath(`/attractions/${card?.id}`)"
              class="!w-[178px] !h-[200px]"
            >
              <div
                class="w-full h-full border border-solid border-white/[24%] rounded-xl flex-center group relative overflow-hidden"
              >
                <div>
                  <p
                    class="text-white text-base leading-130 font-semibold group-hover:tracking-[1px] transition-300 text-center"
                  >
                    {{ $t('all_attractions') }}
                  </p>
                  <div class="w-full flex-center mt-2">
                    <i class="icon-arrow-right text-white text-[28px]" />
                  </div>
                </div>

                <i
                  class="icon-mosque absolute text-white/[7%] bottom-0 right-0 text-[110px]"
                />
              </div>
            </NuxtLink>
          </div>
        </CollapseTransition>

        <div
          v-if="card?.destinations?.length > 6"
          class="flex-center w-full mt-6"
        >
          <button
            class="px-4 py-2 rounded-xl leading-130 text-xl text-white font-semibold bg-white/10 border border-solid border-white/10 transition-300 hover:bg-white/30 active:scale-95"
            @click="show = !show"
          >
            <Transition name="fade" mode="out-in">
              <span v-if="!show">
                {{ $t('more') }}
              </span>
              <span v-else>
                {{ $t('less') }}
              </span>
            </Transition>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import CollapseTransition from '@ivanv/vue-collapse-transition/src/CollapseTransition.vue'
import { useI18n } from 'vue-i18n'

interface Props {
  card: {
    country_name: string
    destinations_count: number
    destinations: {
      id: number
      slug: string
      title: string
      subtitle: string
      image: string
    }[]
  }
}
defineProps<Props>()

const { locale } = useI18n()

const show = ref(false)

function countParser(key, count) {
  const keysArr = key.split('|')

  if (count === 0) {
    return keysArr[2]
  } else if (count === 1) {
    return keysArr[0]
  } else {
    console.log('full', keysArr[1]?.replace('{n}', count))
    return keysArr[1]?.replace('{n}', count)
  }
}
</script>

<style scoped>
.card-title-shadow {
  text-shadow: 0 10px 50px rgba(12, 15, 48, 0.4);
}
</style>
