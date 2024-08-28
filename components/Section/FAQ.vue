<template>
  <section>
    dsadsa
    <SectionWrapper
      title="frequently_given_questions"
      :line="false"
      class="pt-9 pb-14"
      :loading="loading"
    >
      <div class="grid md:grid-cols-2 items-start gap-6 mt-6">
        <div v-for="i in 2" class="flex flex-col gap-6" :key="i">
          <div
            v-for="(item, index) in loading
              ? 1
              : i === 1
              ? firstList
              : secondList"
            :key="index"
            class="pl-2 py-2 lg:pl-4 lg:py-4 bg-white/5 rounded-xl border border-white/20"
          >
            <div
              class="flex-y-center gap-4 pr-2 lg:pr-4 cursor-pointer group"
              @click="openItem(item.id)"
            >
              <CommonPreloader
                width="40px"
                height="40px"
                border-radius="4px"
                preloader-class="mb-2"
                :loading="loading"
              >
                <span
                  class="bg-red-100 border border-white/20 w-10 h-10 flex-center rounded-lg shrink-0 faq-item__icon"
                >
                  <img
                    class="w-6 h-6 object-contain"
                    :src="item?.logo"
                    :alt="item?.question"
                  />
                </span>
              </CommonPreloader>
              <CommonPreloader
                width="100%"
                height="26px"
                class="w-full"
                border-radius="4px"
                preloader-class="mb-2"
                :loading="loading"
              >
                <p
                  class="font-semibold text-lg lg:text-xl leading-130 text-white group-hover:text-red-100 transition-300 w-full"
                >
                  {{ item?.question }}
                </p>
              </CommonPreloader>
              <CommonPreloader
                width="40px"
                height="40px"
                border-radius="4px"
                preloader-class="mb-2"
                :loading="loading"
              >
                <span
                  class="w-10 h-10 bg-white/10 border border-white/10 flex-center shrink-0 rounded-lg"
                >
                  <i
                    class="icon-chevron-bottom text-2xl text-white transition-300"
                    :class="{ 'rotate-180': activeItem === item?.id }"
                  />
                </span>
              </CommonPreloader>
            </div>
            <CommonPreloader
              width="90%"
              height="40px"
              border-radius="4px"
              class="relative"
              :loading="loading"
            >
              <CollapseTransition>
                <div v-if="activeItem === item?.id" class="pt-3">
                  <div
                    v-html="item?.answer"
                    class="pl-1.5 pr-4 pt-3 border-t border-white/20 text-base leading-130 text-white"
                  ></div>
                </div>
              </CollapseTransition>
            </CommonPreloader>
          </div>
        </div>
      </div>
    </SectionWrapper>
  </section>
</template>

<script setup lang="ts">
import CollapseTransition from '@ivanv/vue-collapse-transition/src/CollapseTransition.vue'
import { TFaq } from '~/types/faq'
import { computed } from '@vue/reactivity'

interface Props {
  faqList: TFaq[]
  loading: boolean
}
const props = defineProps<Props>()

const activeItem = ref<number>(props.faqList[0]?.id)
const firstList = computed(() =>
  props.faqList.slice(0, props.faqList.length / 2)
)
const secondList = computed(() =>
  props.faqList.slice(props.faqList.length / 2, props.faqList.length)
)
const openItem = (id: number) => {
  if (activeItem.value === id) {
    activeItem.value = 0
    return
  }
  activeItem.value = id
}
</script>

<style scoped></style>
