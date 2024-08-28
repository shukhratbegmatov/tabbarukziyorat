import { nextTick, onMounted, ref } from 'vue'

export async function useMounted() {
  const mounted = ref(false)

  onMounted(() => {
    nextTick(() => {
      mounted.value = true
    }).then((r) => r)

    const placeholder = document.getElementById(
      'header-breadcrumbs'
    ) as HTMLElement
    if (placeholder) {
      placeholder.innerHTML = ''
    }
  })

  return { mounted }
}
