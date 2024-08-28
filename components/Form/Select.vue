<template>
  <div @focusout="focusOut" tabindex="0" class="relative flex items-center">
    <!--  SELECTED OPTION  -->
    <div
      class="rounded-md inline-flex items-center border cursor-pointer"
      :class="[
        { '!cursor-not-allowed': disabled },
        error ? 'border-red' : 'border-gray-500',
        selectedOptionStyles,
        dark
          ? 'bg-white/[0.06] border-white/[0.12]'
          : 'bg-gray-100 border-gray-500',
      ]"
      @click="toggleSelect"
    >
      <slot name="prefix" />
      <slot name="selectedOption" :value="selectedValue">
        <div
          class="text-sm leading-130 flex items-center gap-2"
          :class="[
            { 'text-gray/40': disabled },
            { 'text-red': error },
            dark ? 'text-white' : 'text-black',
          ]"
        >
          {{
            selectedValue
              ? selectedValue[labelKey] || selectedValue
              : placeholder
          }}

          <p v-if="addInfo" class="text-gray font-normal">
            {{ selectedValue?.info }}
          </p>
        </div>
      </slot>
    </div>

    <!--  OPTIONS  -->
    <Transition name="select" mode="out-in">
      <div
        v-if="showOptions || languageSwitch"
        :key="showOptions"
        :class="[optionsStyle]"
        class="grid grid-cols-3 w-fit absolute top-10 z-50 p-4 min-w-[200px] border border-solid border-white/20 rounded-xl w-auto h-auto z-50 backdrop-blur"
      >
        <slot name="options">
          <button
            v-for="(option, idx) in options"
            :key="idx"
            type="button"
            :class="[
              optionStyle,
              dark
                ? isActive(option)
                  ? 'text-white'
                  : 'text-white'
                : isActive(option)
                ? ''
                : 'text-black',
            ]"
            class="flex items-center space-x-2 transition-200 relative cursor-pointer max-w-full w-full p-2 hover:bg-white/[4%] rounded-lg"
            :disabled="option[disabledOption]"
            @click="onSelect(option)"
          >
            <slot name="option" :option="option" :index="idx">
              <div>
                {{ option[labelKey] }}
              </div>
            </slot>
            <i
              class="transition-200 icon-check text-lg text-white inline-block"
              :class="{
                'opacity-0': !isActive(option),
              }"
            />
          </button>
        </slot>
      </div>
    </Transition>
  </div>
</template>

<script>
import { useHomeStore } from '~/store/index'

const homeStore = useHomeStore()

export default {
  name: 'FormSelect',
  emits: ['on-toggle', 'input'],
  props: {
    addInfo: {
      type: Boolean,
      default: false,
    },
    value: {
      type: [String, Number, Object],
      default: '',
    },
    options: {
      type: Array,
      required: true,
    },
    showArrow: {
      type: Boolean,
      default: true,
    },
    labelKey: {
      type: String,
      default: 'name',
    },
    infoKey: {
      type: String,
      default: 'info',
    },
    valueKey: {
      type: String,
      default: 'value',
    },
    selectedOptionStyles: {
      type: String,
      default: '',
    },
    defaultIconStyle: {
      type: String,
      default: '',
    },
    placeholder: {
      type: String,
      default: 'Select',
    },
    optionsStyle: {
      type: String,
      default: '',
    },
    optionStyle: {
      type: String,
      default: '',
    },
    error: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    disabledOption: {
      type: String,
      default: 'disabled',
    },
    dark: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      showOptions: false,
      targetIsVisible: false,
      selectedValue: undefined,
    }
  },
  watch: {
    value: {
      handler() {
        this.updateValueByProp()
      },
      deep: true,
      immediate: true,
    },
    options() {
      this.updateValueByProp()
    },
  },
  computed: {
    languageSwitch() {
      return homeStore.languageSwitch
    },
  },
  methods: {
    focusOut() {
      homeStore.languageTrigger(false)
      this.showOptions = false
    },
    toggleSelect() {
      if (!this.disabled) {
        this.showOptions = !this.showOptions
        homeStore.languageTrigger(this.showOptions)
        this.$emit('on-toggle', this.showOptions)
      }
    },
    findOption(option) {
      return this.options?.find(
        (o) =>
          // eslint-disable-next-line
          o == option ||
          // eslint-disable-next-line
          o[this.valueKey] == option[this.valueKey] ||
          // eslint-disable-next-line
          o[this.valueKey] == option
      )
    },
    onSelect(option) {
      this.selectedValue = option
      this.toggleSelect()
      this.$emit('input', option[this?.valueKey] || option)
    },
    isActive(option) {
      return (
        this.selectedValue === option ||
        (this.selectedValue &&
          this.selectedValue[this.valueKey] === option[this.valueKey])
      )
    },
    updateValueByProp() {
      this.selectedValue =
        ![undefined, null, ''].includes(this.value) && this.valueKey
          ? this.findOption(this.value)
          : undefined
    },
  },
}
</script>

<style scoped>
/* slightly transparent fallback */
.backdrop-blur {
  background-color: rgba(7, 9, 28, 0.12);
}

/* if backdrop support: very transparent and blurred */
@supports ((-webkit-backdrop-filter: none) or (backdrop-filter: none)) {
  .backdrop-blur {
    background-color: rgba(7, 9, 28, 0.12);
    -webkit-backdrop-filter: blur(2em);
    backdrop-filter: blur(2em);
  }
}
.select-enter-active,
.select-leave-active {
  transition: all 0.2s ease-out;
}

.select-enter-from,
.select-leave-to {
  opacity: 0;
  transform: translateY(-5px);
}
</style>
