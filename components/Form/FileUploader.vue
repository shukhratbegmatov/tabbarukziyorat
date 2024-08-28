<template>
  <label
    :for="forId ?? `holder-${randomNumber}`"
    class="flex-center cursor-pointer bg-light border border-dashed border-gray-light hover:border-orange hover:bg-white focus-within:border-orange focus-within:bg-white relative rounded-lg transition-300 group"
    :class="[{ '!bg-white': file }, { '!border-red': error }]"
  >
    <input
      :id="forId ?? `holder-${randomNumber}`"
      type="file"
      name="file"
      class="absolute w-0 h-0"
      @change="handleFile"
      accept="application/pdf, application/msword, image/jpg, image/png"
    />
    <div v-if="file" class="flex-y-center justify-between w-full p-3">
      <div class="flex-y-center gap-2">
        <i class="text-2xl leading-6 text-[#767676] icon-document" />
        <p class="leading-130 text-dark">
          {{ fileName }}
        </p>
      </div>
      <span
        class="icon-Trash-Bin-Trash text-2xl leading-6 text-[#767676] hover:text-orange cursor-pointer transition-300"
        @click.stop="removeImage"
      />
    </div>
    <div v-else class="flex-y-center flex-col py-7 w-full">
      <i
        class="icon-document text-32 leading-8 text-[#767676] pointer-events-none"
      />
      <p
        class="mt-1.5 mb-0.5 font-semibold leading-130 text-dark pointer-events-none"
      >
        {{ $t('drag_and_drop_or') }}
      </p>
      <span
        class="text-orange cursor-pointer text-13 font-semibold leading-130 transition-300 group-hover:text-orange-dark"
      >
        {{ $t('upload') }} <span>(.pdf, .doc, .jpg, .png)</span>
      </span>
    </div>
  </label>
</template>
<script setup lang="ts">
import CollapseTransition from '@ivanv/vue-collapse-transition/src/CollapseTransition.vue'
import { onMounted, ref, defineProps } from 'vue'
export interface Props {
  label?: string
  error?: boolean
  errorLabel?: string
  forId?: string
}
const randomNumber = ref(0)
const emit = defineEmits(['upload', 'delete', 'update:modelValue'])
const props = defineProps<Props>()

const file = ref()
let fileName = ref('')

const handleFile = (event: any) => {
  fileName.value = event.target.files[0].name
  if (event.target.files[0]) {
    file.value = event.target.files
    send()
  }
}
const removeImage = () => {
  file.value = undefined
  emit('update:modelValue', null)
}
const send = () => {
  emit('update:modelValue', file.value[0])
}
const dragFile = () => {
  const dropZone = document.getElementById('file-input') as HTMLElement

  // handle dragenter
  if (dropZone) {
    dropZone.ondragenter = () => {
      dropZone.classList.add('!bg-white', '!border-orange')
    }

    // handle dragleave
    dropZone.ondragleave = () => {
      dropZone.classList.remove('!bg-white', '!border-orange')
    }

    dropZone.ondrop = (e) => {
      e.preventDefault()
      e.stopPropagation()
      file.value = e?.dataTransfer?.files[0]
      fileName.value = e?.dataTransfer?.files[0].name || ''
      if (e?.dataTransfer?.files[0]) {
        send()
      }
    }
  }
}
onMounted(() => {
  randomNumber.value = Math.floor(Math.random() * 101)
  dragFile()
})
</script>
