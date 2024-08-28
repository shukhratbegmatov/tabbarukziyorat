<template>
  <div
    class="s-dropdown inline-flex relative"
    :class="{ 'pointer-events-none': loading }"
  >
    <!-- DROPDOWN BUTTON: -->
    <div @focusout="close" class="inline-block" @click.stop="open">
      <slot name="button" :isOpen="isOpened" />
    </div>

    <!-- DROPDOWN LIST -->
    <Transition name="slideDown" mode="out-in">
      <div
        v-if="isOpened"
        class="w-fit absolute top-10 z-50 min-w-[200px] border border-solid border-white/20 rounded-lg w-auto h-auto z-50 backdrop-blur"
        :class="[
          {
            'right-0': position === 'right',
            '-left-[120px]': position === 'left',
          },
          dropdownStyle,
        ]"
        @click="close"
      >
        <slot name="items" />
      </div>
    </Transition>
  </div>
</template>

<script lang="ts" setup>
interface Props {
  position?: string
  dropdownStyle?: string
  size?: string
  loading?: boolean
}
withDefaults(defineProps<Props>(), {
  position: 'right',
  dropdownStyle: '',
  size: '32px',
  loading: false,
})
const emit = defineEmits(['on-open', 'close'])
const isOpened = ref(false)
const open = () => {
  isOpened.value = !isOpened.value
  if (isOpened.value) {
    emit('on-open')
  }
}
const close = () => {
  isOpened.value = false
  emit('close')
}
</script>

<style scoped>
.slideDown-enter-active {
  animation: slideDown 0.2s linear;
}
.slideDown-leave-active {
  animation: slideDown 0.2s linear reverse;
}

@keyframes slideDown {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
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
</style>
