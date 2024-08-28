<template>
  <button
    v-bind="{ disabled, type }"
    class="transition-300 rounded-lg py-4 px-3 flex-center cursor-pointer relative group disabled:bg-grey-light disabled:hover:bg-grey-light disabled:text-dark/40 outline-none"
    :style="{ '--box-shadow': shadowColor, '--spinnerColor': spinnerColor }"
    :class="[
      buttonClass,
      { 'pointer-events-none w-[110px]': loading },
      buttonVariantClass,
    ]"
    @click="onClick"
  >
    <i
      :class="[
        's-transition absolute-center-h absolute-center-v',
        loading ? 'opacity-100 visible' : 'opacity-0 invisible w-0',
      ]"
    >
      <svg
        class="loading-icon"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          :opacity="[loading ? 1 : 0.2]"
          d="M11.9999 3.14746C16.8856 3.14746 20.8524 7.11425 20.8524 11.9999C20.8524 16.8856 16.8856 20.8524 11.9999 20.8524C7.11425 20.8524 3.14746 16.8856 3.14746 11.9999C3.14746 7.11425 7.11425 3.14746 11.9999 3.14746Z"
          :stroke="[loading ? '#ffffff' : '#111325']"
          stroke-width="3"
        />
        <path
          d="M11.2458 20.8191C9.38896 20.6622 7.56653 19.9205 6.07624 18.5787C3.60297 16.3517 2.67826 13.0422 3.37337 10.0106"
          stroke="#1A1A1A"
          stroke-width="3"
          stroke-linecap="round"
        />
      </svg>
    </i>
    <slot v-if="!loading">
      <slot v-if="icon" name="icon" />
      <span :class="textStyle" class="s-transition">
        {{ text }}
      </span>
      <slot v-if="suffix" name="suffix" />
    </slot>
  </button>
</template>

<script setup lang="ts">
import { computed } from 'vue'

import { ButtonVariants } from '~/types'

interface Props {
  text?: string
  textClass?: string
  shadowColor?: string
  hasShadow?: boolean
  spinnerColor?: string
  disabled?: boolean
  loading?: boolean
  type?: string
  variant?: ButtonVariants
  icon?: string
  iconClass?: string
  buttonClass?: string
  suffix?: boolean
}

// ******* PROPS *******
const props = withDefaults(defineProps<Props>(), {
  hasShadow: true,
  text: 'Button',
  type: 'button',
  textClass: '',
  shadowColor: '',
  spinnerColor: 'white',
  disabled: false,
  loading: false,
  variant: 'primary',
})

const buttonVariantClass = computed(() => `s-button-${props.variant}`)

// ******* EMITS *******
interface Emits {
  (e: 'click'): void
}

const emit = defineEmits<Emits>()

const onClick = () => {
  emit('click')
}

const textStyle = computed(() => {
  const labelClass = props.textClass
  return [
    labelClass,
    !props.loading ? 'opacity-100 visible' : 'opacity-0 invisible',
    'font-semibold leading-150 text-base select-none',
  ]
})
</script>

<style>
.s-button:active:not(:disabled) {
  transform: scale(0.9);
}

.s-button:disabled {
  background: #2b2b30 !important;
  box-shadow: none;
}

.s-button:disabled h1,
.s-button:disabled p,
.s-button:disabled {
  color: #a5aab4;
}

.s-button:disabled {
  cursor: not-allowed;
  background-color: #e6e9ef !important;
}

.s-button .circular-loader {
  width: 24px;
  height: 24px;
  stroke: var(--spinnerColor);
}

/* .s-button .circular-loader__path */
.loading-icon {
  /* fill: none;
  stroke-width: 5px;
  stroke-linecap: round; */
  animation: animate-stroke 1s linear infinite;
}

@keyframes animate-stroke {
  0% {
    /* stroke-dasharray: 1, 200;
     stroke-dashoffset: 0; */
    transform: rotate(0deg);
  }
  /*50% {
  stroke-dasharray: 89, 200;
  stroke-dashoffset: -35;
}*/
  100% {
    /* stroke-dasharray: 89, 200;
    stroke-dashoffset: -124; */
    transform: rotate(360deg);
  }
}

/*Primary*/
.s-button-primary {
  @apply text-white bg-red hover:bg-[#C72727];
}

/* Secondary */
.s-button-secondary {
  @apply text-white bg-[#2C2E3E]  hover:bg-[#181A2A];
}
</style>
