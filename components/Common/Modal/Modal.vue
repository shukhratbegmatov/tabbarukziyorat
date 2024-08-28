<template>
  <div>
    <div
      v-if="show"
      class="fixed top-0 w-full h-full bg-black/60 z-50 flex items-center justify-center transition-300 p-5"
      @click="$emit('close')"
    />
    <Transition name="modal">
      <div
        id="ModalBg"
        v-if="show"
        class="fixed top-0 w-full h-full z-[51] flex items-center justify-center transition-300 p-5"
      >
        <div
          id="Modal"
          class="bg-dark rounded-xl w-full max-w-[484px] overflow-hidden scale-110 transition-300"
          :class="[{ '!scale-100': show }, bodyStyle]"
        >
          <slot name="header">
            <div
              class="px-5 py-2 md:py-3 flex justify-between items-center border-b border-white/18"
              :class="headerStyle"
            >
              <h3
                class="text-white text-lg md:text-2xl font-semibold text-white"
              >
                {{ title }}
              </h3>
              <button
                @click="$emit('close')"
                class="text-white/50 transition-300 hover:text-white"
                :class="buttonClass"
              >
                <i class="icon-xmark"></i>
              </button>
            </div>
          </slot>
          <slot> </slot>
        </div>
      </div>
    </Transition>
  </div>
</template>
<script setup lang="ts">
import { useEventListener } from '@vueuse/core'
interface Props {
  title?: string
  show?: boolean
  bodyStyle?: string
  headerStyle?: string
  buttonClass?: string
}
withDefaults(defineProps<Props>(), {
  title: 'Modal',
})

const emit = defineEmits<{
  (e: 'close'): void
}>()

const onMousedown = (event: Event) => {
  const target = event.target as HTMLTextAreaElement

  if (target.id !== 'Modal' && target.id === 'ModalBg') {
    close()
  }
}

onMounted(() => {
  document?.addEventListener('mousedown', onMousedown, { passive: true })
  document?.addEventListener(
    'keydown',
    (e) => {
      e.code == 'Escape' ? close() : ''
    },
    { passive: true }
  )
})
onBeforeUnmount(() => {
  document?.removeEventListener('mousedown', onMousedown, { passive: true })
})

function close() {
  emit('close')
}
</script>

<style scoped>
.modal-enter-active {
  animation: modal 200ms ease-out forwards;
}

.modal-leave-active {
  animation: modal 200ms ease-in reverse forwards;
}

@keyframes modal {
  0% {
    opacity: 0;
    transform: scale(0.8);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}
</style>
