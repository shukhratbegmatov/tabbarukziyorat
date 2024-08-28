<template>
  <div>
    <CommonModal v-bind="{ show }" :title="$t('filter')" @close="emit('close')">
      <div class="text-white flex flex-col">
        <div class="space-y-6 overflow-y-auto max-h-[500px] lg:max-h-fit p-5">
          <div
            class="relative"
            v-for="(item, index) in mapFilterList?.slice(0, 1)"
            :key="index"
          >
            <FormLabel :label="item.label" :for-id="item.name" class="mb-4" />

            <FormCheckboxGroup
              :items="item.options"
              :name="item.name"
              :label-key="item.labelKey"
              :value-key="item.valueKey"
              v-model="form.religion"
              wrapper-class="grid md:grid-cols-2 grid-cols-1 gap-5"
              is-all
            >
              <template #all>
                <FormCheckbox
                  :label="$t('all')"
                  :value="!isAllReligion"
                  :checked="isAllReligion"
                  :name="name"
                  @update:modelValue="onUpdate"
                />
              </template>
            </FormCheckboxGroup>
          </div>
          <div
            class="relative"
            v-for="(item, index) in mapFilterList.slice(1, 2)"
            :key="index"
          >
            <FormLabel :label="item.label" :for-id="item.name" class="mb-4" />
            <FormCheckboxGroup
              :items="item.options"
              :name="item.name"
              :label-key="item.labelKey"
              :value-key="item.valueKey"
              v-model="form[item.name]"
              wrapper-class="grid md:grid-cols-2 grid-cols-1 gap-5"
              is-all
            >
              <template #all>
                <FormCheckbox
                  :label="$t('all')"
                  :value="!isAllCountry"
                  :checked="isAllCountry"
                  :name="name"
                  @update:modelValue="onUpdateCountry"
                />
              </template>
            </FormCheckboxGroup>
          </div>
        </div>
        <div class="flex items-center gap-4 p-5">
          <CommonButton
            :text="$t('clear')"
            class="w-full"
            variant="secondary"
            @click="clear"
          />
          <CommonButton :text="$t('apply')" class="w-full" @click="apply" />
        </div>
      </div>
    </CommonModal>
  </div>
</template>
<script lang="ts" setup>
import { mapFilter } from '~/data/map'
import { useI18n } from 'vue-i18n'
import { TReligion } from '@/types/religions'
import { TCountries } from '@/types/countries'
import { ILocation } from '~/types/locations'

const { t } = useI18n()
const route = useRoute()
const router = useRouter()
interface Props {
  show?: boolean
  religions?: TReligion[]
  countries?: TCountries[]
}
const props = defineProps<Props>()
const emit = defineEmits<{
  (e: 'close'): void
  (e: 'handleFilter', value: object): void
}>()
const form = ref({
  religion: [],
  country: [],
})
const isAllReligion = ref(false)
const isAllCountry = ref(false)
const mapFilterList = computed(() => {
  const data = {
    religion: props?.religions,
    country: props?.countries,
  }
  return mapFilter(t, data)
})

const apply = () => {
  const query = {
    ...route.query,
    religion: form.value.religion?.join(','),
    country: form.value.country?.join(','),
  }
  router.push({
    ...route,
    query: {
      ...query,
    },
  })
  emit('handleFilter', {
    religion: isAllReligion.value ? undefined : form.value.religion?.join(','),
    country: isAllCountry.value ? undefined : form.value.country?.join(','),
  })
  emit('close')
}

const clear = () => {
  for (const key in form.value) {
    form.value[key] = undefined
  }
  apply()
}

watch(
  () => props.show,
  () => {
    if (!props.show) {
      form.value.religion = []
      form.value.country = []
    } else {
      form.value.religion = route.query.religion?.split(',') ?? []
      form.value.country = route.query.country?.split(',') ?? []
    }
  }
)

function onUpdate(e) {
  isAllReligion.value = !isAllReligion.value
}

function onUpdateCountry(e) {
  isAllCountry.value = !isAllCountry.value
}

watch(
  () => isAllReligion.value,
  () => {
    if (isAllReligion.value) {
      props.religions?.forEach((el: ILocation) => {
        if (!form.value.religion?.includes(String(el?.id))) {
          form.value.religion?.push(String(el?.id))
        }
      })
    } else {
      if (form.value.religion?.length === props.religions?.length) {
        form.value.religion = []
      }
    }
  }
)

watch(
  () => form.value.religion,
  () => {
    isAllReligion.value =
      form.value.religion?.length === props.religions?.length
  },
  {
    deep: true,
  }
)

watch(
  () => isAllCountry.value,
  () => {
    if (isAllCountry.value) {
      props.countries?.forEach((el: ILocation) => {
        if (!form.value.country?.includes(String(el?.id))) {
          form.value.country?.push(String(el?.id))
        }
      })
    } else {
      if (form.value.country?.length === props.countries?.length) {
        form.value.country = []
      }
    }
  }
)

watch(
  () => form.value.country,
  () => {
    isAllCountry.value = form.value.country?.length === props.countries?.length
  },
  {
    deep: true,
  }
)
</script>
