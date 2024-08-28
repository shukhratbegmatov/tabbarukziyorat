<template>
  <div class="relative flex flex-col gap-2">
    <FormLabel v-bind="{ label, required, forId }" dark />
    <vue-tel-input
      v-model="phone"
      v-bind="editBindProps"
      @validate="validation"
      valid-characters-only
      :default-country="'gb'"
      :class="[{ _error: error || !phoneValidate }]"
    >
      <template v-slot:arrow-icon>
        <p class="flex items-center gap-1.5 text-dark leading-[125%]">
          {{ activeDialCode }}
          <span
            class="icon-arrow transition duration-300 text-base text-grey-light"
          />
        </p>
      </template>
    </vue-tel-input>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { VueTelInput } from 'vue3-tel-input'
import 'vue3-tel-input/dist/vue3-tel-input.css'

interface Props {
  modelValue: any
  error?: boolean
  label?: string
  placeholder?: string
  top?: boolean
  required?: boolean
  forId?: string
}
const props = defineProps<Props>()
const emit = defineEmits(['update:modelValue', 'checkValid'])
const phone = ref('')
const activeDialCode = ref()
const activeCountry = ref()
const phoneValidate = ref(true)

function changedCountry(val: any) {
  activeDialCode.value = val.dialCode
  activeCountry.value = val.iso2
}
function validation(val: any) {
  emit('update:modelValue', val.number)
  emit('checkValid', val.valid)
  phoneValidate.value = !val.number ? true : val.valid
}
const editBindProps = ref({
  mode: 'international',
  dropdownOptions: {
    disabledDialCode: true,
    showDialCodeInList: true,
    showFlags: true,
    showSearchBox: true,
    width: '260px',
  },
  inputOptions: {
    showDialCode: true,
    maxlength: 25,
  },
})
watch(
  () => props.modelValue,
  (val) => {
    // 7477 198697
    if (!val) {
      phone.value = ''
    }
  }
)
</script>

<style>
.vti__flag {
  height: 10px;
  background-position: -1775px 0;
}
.vti__input {
  padding: 0 10px;
  height: 44px;
  font-weight: 400;
  font-size: 14px;
  line-height: 130%;
  display: flex;
  align-items: center;
  color: #fbf9f9;
  background: transparent;
}

@media screen and (max-width: 500px) {
  .vti__input {
    font-size: 16px;
  }
}
.vti__input::placeholder {
  color: #98a4bb;
  font-weight: 700;
  font-size: 16px;
  line-height: 125%;
}
.vue-tel-input {
  padding: 4px;
  align-items: center;
  border-radius: 8px;
  border: 1px solid transparent;
  background: rgba(255, 255, 255, 0.1);
}
._error.vue-tel-input {
  border: 1px solid red !important;
}
.vue-tel-input:focus-within {
  box-shadow: none;
  border-color: #d7673d;
}
.vti__dropdown {
  padding: 8px;
  background: #1a1a1a;
  transition: all 0.3s;
  border-style: solid;
  border-width: 1px;
  border-color: transparent;
  border-radius: 6px;
  height: 40px;
}
.vti__dropdown:hover,
.vti__dropdown.open {
  border-color: #d7673d;
  background: #1a1a1a;
}
.vti__dropdown.open .icon-arrow {
  transform: rotate(180deg);
}
.vti__dropdown-list.below {
  top: 48px;
  bottom: auto;
  max-width: 305px;
}
.vti__dropdown-list {
  border-radius: 4px;
  box-shadow: 0 6px 29px rgba(34, 35, 44, 0.02);
}

.vti__dropdown-list::-webkit-scrollbar {
  width: 3px;
}

/* Track */
.vti__dropdown-list::-webkit-scrollbar-track {
  background: #e1e9f2;
}

/* Handle */
.vti__dropdown-list::-webkit-scrollbar-thumb {
  background: #98a4bb;
  opacity: 0.4;
  border-radius: 12px;
  width: 3px;
}

/* Handle on hover */
.vti__dropdown-list::-webkit-scrollbar-thumb:hover {
  background: #555;
}
</style>
