<template>
  <div class="bg-dark">
    <div class="faq-section pt-[90px] lg:pt-[136px]">
      <CommonBreadcrumb v-bind="{ menu }" class="" />
      <SectionFAQ v-bind="{ faqList, loading }" />
    </div>
    <SectionPopularAttractions v-bind="{ popularAttractions, loading }" />
  </div>
</template>

<script setup lang="ts">
import { email, required } from '@vuelidate/validators'
import { computed, ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { useToast } from 'vue-toastification'

import { useSeoMeta } from '#head'
import { useForm } from '#imports'
import { useMainStore } from '~/store/main'

const mainStore = useMainStore()

const { t } = useI18n()
const loading = ref(false)

const toast = ref()
if (process.client) {
  toast.value = useToast()
}

const faqList = computed(() => mainStore.faq)
const popularAttractions = computed(() => mainStore.popularAttractions)
const contactData = computed(() => mainStore.contact)
async function fetchData() {
  loading.value = true
  return await Promise.all([
    mainStore.fetchFaq(),
    mainStore.fetchPopularAttractions(),
    mainStore.fetchContactData(),
  ])
}
fetchData().finally(() => {
  loading.value = false
})

useSeoMeta({
  title: t('help'),
})

const menu = [
  {
    title: 'FAQ',
    link: '/faq',
  },
]

const form = useForm(
    {
      full_name: '',
      email: '',
      message: '',
    },
    {
      full_name: {
        required,
      },
      email: {
        email,
        required,
      },
      message: {
        required,
      },
    }
)

const formLoading = ref(false)
function clearForm() {
  for (const key in form.values) {
    form.values[key] = ''
  }
}
function submit() {
  formLoading.value = true
  $api
      .$post(`/about/UserQuestionCreate`, {
        body: form.values,
      })
      .then(() => {
        toast.value.success(t('sent_successfully'))
        clearForm()
      })
      .catch((error) => {
        toast.value.error(`${error}`)
      })
      .finally(() => {
        setTimeout(() => {
          formLoading.value = false
        }, 200)

        form.$v.value.$reset()
      })
}
</script>
<style scoped>
.faq-item__icon {
  box-shadow: 0 4px 20px rgba(229, 69, 69, 0.48);
}
.faq-section {
  background: url('/pattern/help.png') no-repeat center;
  background-size: cover;
}
</style>
