<template>
  <SectionWrapper
    title="have_question_for_us"
    subtitle="have_question_for_us_desc"
    :loading="stateLoading"
  >
    <div class="mt-9">
      <div class="grid lg:grid-cols-2 gap-x-[70px] gap-y-2 max-xl:items-start">
        <div class="flex-y-center gap-6 max-sm:hidden">
          <FormLabel
            class="w-full"
            :label="stateLoading ? 'Name' : $t('form.name')"
            for-id="name"
          />
          <FormLabel
            class="w-full"
            :label="stateLoading ? 'Email' : $t('form.email')"
            for-id="email"
          />
        </div>
        <div class="max-lg:hidden" />
        <div class="grid grid-cols-2 gap-x-6 gap-y-5">
          <div class="max-sm:col-span-2">
            <FormLabel
              class="w-full mb-2 sm:hidden"
              :label="stateLoading ? 'Nmae' : $t('form.name')"
              for-id="name"
            />
            <FormInput
              placeholder="Samantha Smith"
              v-model="form.values.full_name"
              :error="form.$v.value.full_name.$error"
            />
          </div>
          <div class="max-sm:col-span-2">
            <FormLabel
              class="w-full mb-2 sm:hidden"
              :label="stateLoading ? 'Contact' : $t('form.contact')"
              for-id="email"
            />
            <FormInput
              placeholder="example@gmail.com"
              v-model="form.values.email"
              :error="form.$v.value.email.$error"
            />
          </div>
          <FormGroup
            class="col-span-2"
            :label="stateLoading ? 'Message' : $t('form.message')"
          >
            <FormTextarea
              v-model="form.values.message"
              :error="form.$v.value.message.$error"
              :placeholder="stateLoading ? 'Your message' : $t('your_message')"
              maxlength="300"
            />
          </FormGroup>
        </div>
        <div
          class="border border-white/10 rounded-xl p-5 flex flex-col justify-between gap-4 max-lg:order-3 max-lg:mt-4"
        >
          <div class="space-y-2">
            <CommonPreloader
              width="93px"
              height="21px"
              border-radius="4px"
              preloader-class="mb-2"
              :loading="stateLoading"
            >
              <div class="flex-y-center space-x-2 text-white/60">
                <i class="icon-location-pin text-xl leading-5" />
                <p class="font-medium text-base leading-130">
                  {{ $t('location_contact') }}
                </p>
              </div>
            </CommonPreloader>
            <CommonPreloader
              width="100%"
              height="21px"
              border-radius="4px"
              :loading="stateLoading"
            >
              <p
                class="mt-2 font-bold leading-130 text-white text-lg lg:text-xl"
              >
                {{ data?.location }}
              </p>
            </CommonPreloader>
          </div>
          <hr class="w-full border-0 h-px bg-white/10" />
          <div class="flex max-lg:flex-col">
            <div
              class="w-full lg:w-1/2 max-lg:border-b lg:border-r border-white/10 max-lg:pb-4 lg:pr-5 space-y-2"
            >
              <CommonPreloader
                width="93px"
                height="21px"
                border-radius="4px"
                preloader-class="mb-2"
                :loading="stateLoading"
              >
                <div class="flex-y-center space-x-2 text-white/60">
                  <i class="icon-mail text-xl leading-5" />
                  <p class="font-medium text-base leading-130">
                    {{ $t('email_address') }}
                  </p>
                </div>
              </CommonPreloader>
              <CommonPreloader
                width="100%"
                height="21px"
                border-radius="4px"
                :loading="stateLoading"
              >
                <a
                  :href="`mailto:${data?.email}`"
                  target="_blank"
                  class="inline-block mt-2 font-bold leading-130 text-white text-lg lg:text-xl hover:text-red-100 transition-300"
                >
                  {{ data?.email }}
                </a>
              </CommonPreloader>
            </div>
            <div class="w-full lg:w-1/2 max-lg:pt-4 lg:pl-5 space-y-2">
              <CommonPreloader
                width="93px"
                height="21px"
                border-radius="4px"
                preloader-class="mb-2"
                :loading="stateLoading"
              >
                <div class="flex-y-center gap-2 text-white/60">
                  <i class="icon-phone text-xl leading-5" />
                  <p class="font-medium text-base leading-130">
                    {{ $t('phone_number') }}
                  </p>
                </div>
              </CommonPreloader>
              <CommonPreloader
                width="100%"
                height="21px"
                border-radius="4px"
                :loading="stateLoading"
              >
                <a
                  :href="`tel:${data?.phone_number}`"
                  target="_blank"
                  class="inline-block mt-2 font-bold leading-130 text-white text-lg lg:text-xl hover:text-red-100 transition-300"
                >
                  {{ formatPhoneNumber(data?.phone_number) }}
                </a>
              </CommonPreloader>
            </div>
          </div>
        </div>
        <div class="mt-3 lg:mt-6 max-lg:order-2">
          <VueRecaptcha
            class="mb-4"
            theme="dark"
            @verify="callbackVerify"
            @expired="callbackExpired"
          />
          <i18n-t
            tag="p"
            keypath="by_sending_this_message_you_signing_privacy_agreement"
            class="text-white/60 font-medium leading-130 text-base mb-4"
          >
            <template #privacy_agreement>
              <NuxtLink
                :to="localePath('/page/privacy-agreement')"
                class="text-white hover:text-red-100 font-semibold transition-300"
              >
                {{ $t('privacy_agreement') }}
              </NuxtLink>
            </template>
          </i18n-t>
          <CommonButton
            @click="submitForm"
            :loading="loading"
            class="group"
            button-class="min-w-full sm:min-w-[280px]"
          >
            <span class="flex-y-center gap-2 text-base font-semibold">
              {{ $t('send') }}
              <i
                class="icon-send text-2xl leading-6 text-white translate-x-0 group-hover:translate-x-2 transition-300"
              />
            </span>
          </CommonButton>
        </div>
      </div>
    </div>
  </SectionWrapper>
</template>

<script setup lang="ts">
import { VueRecaptcha } from 'vue3-recaptcha-v2'
import { TForm } from '~/types/form'
import { TContacts } from '~/types/common'
import { useI18n } from 'vue-i18n'
interface Props {
  data: TContacts
  form: TForm
  loading?: boolean
  stateLoading?: boolean
}

const props = defineProps<Props>()
const form = unref(props.form)

const captchaToken = ref('')
const { t } = useI18n()
const callbackVerify = (token: string) => {
  captchaToken.value = token
}
const callbackExpired = () => {
  captchaToken.value = ''
}

const emit = defineEmits<{
  (e: 'submitForm'): void
}>()

const submitForm = () => {
  form.$v.value.$touch()
  console.log(form)
  if (
    !form.$v.value.$invalid &&
    captchaToken.value &&
    Object.values(form.values)?.some((item) => item?.length)
  ) {
    emit('submitForm')
    form.$v.value.$reset()
  }
}
</script>
