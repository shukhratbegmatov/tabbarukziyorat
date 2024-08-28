<template>
  <FormSelect
    @focusout="languageTrigger"
    :value="activeLang"
    :options="languageList"
    label-key="name"
    value-key="value"
    selected-option-styles="!bg-transparent select-none border-none"
    option-style="hover:bg-gray-500 cursor-pointer select-none p-2"
    :options-style="`right-0 min-w-max ${optionStyles}`"
    @input="switchLanguage"
  >
    <template #selectedOption>
      <img
        :src="activeLang?.img"
        :alt="activeLang?.name"
        :key="activeLang?.img"
        class="mr-[10px] w-6 h-6"
        :class="{ 'mr-[10px]': isMobile }"
      />
      <span
        v-if="isMobile"
        class="text-white text-base font-medium leading-130"
      >
        {{ activeLang?.name }}
      </span>
    </template>
    <template #option="{ option }">
      <div v-if="option" class="flex items-center space-x-2">
        <img
          v-if="option?.value"
          :src="`/svg/flags/${option?.value}.svg`"
          :alt="option?.name"
          class="w-[22px] h-[22px]"
        />
        <img v-else src="/svg/flags/uz.svg" alt="locale icon" />
        <span class="text-white text-sm font-medium leading-130">
          {{ option?.name }}
        </span>
      </div>
    </template>
  </FormSelect>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { useRouter } from 'vue-router'

const { locale } = useI18n()

interface ILanguage {
  value: string
  name: string
  img: string
}
interface Props {
  optionStyles?: string
  isMobile?: boolean
}
withDefaults(defineProps<Props>(), {
  isMobile: false,
})

const router = useRouter()

const languageList = ref<ILanguage[]>([
  { value: 'ru', name: 'Русский', img: '/svg/flags/ru.svg' },
  { value: 'kk', name: 'Қазақша', img: '/svg/flags/kk.svg' },
  { value: 'tk', name: 'Türkmen', img: '/svg/flags/tk.svg' },
  { value: 'en', name: 'English', img: '/svg/flags/en.svg' },
  { value: 'ky', name: 'Қыргызча', img: '/svg/flags/ky.svg' },
  { value: 'az', name: 'Azərbaycan', img: '/svg/flags/az.svg' },
  { value: 'uz', name: 'O’zbekcha', img: '/svg/flags/uz.svg' },
  { value: 'tr', name: 'Türk', img: '/svg/flags/tr.svg' },
  { value: 'hu', name: 'Magyar', img: '/svg/flags/hu.svg' },
])

const activeLang = ref<ILanguage>()

const switchLanguage = async (value) => {
  localStorage.setItem('locale', value)
  router.go(0)
}

onMounted(() => {
  if (!localStorage.getItem('locale') && process.client) {
    localStorage.setItem('locale', 'uz')
  }
  if (process.client) {
    const localLang = localStorage.getItem('locale') ?? 'uz'
    activeLang.value = languageList.value.find((el) => el.value === localLang)
  }
})
</script>
