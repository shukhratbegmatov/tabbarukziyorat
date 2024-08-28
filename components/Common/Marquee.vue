<template>
  <div>
    <div class="flex flex-col gap-4 md:gap-6 overflow-hidden">
      <div class="marquee">
        <div aria-hidden="true" class="marquee__group_left">
          <CardMedia
            v-for="(card, idx) in generateItem(galleryData)"
            :key="idx"
            v-bind="{ card }"
            @click="openGallery(card)"
          />
        </div>
      </div>
      <div class="marquee">
        <div aria-hidden="true" class="marquee__group_right">
          <CardMedia
            v-for="(card, idx) in generateItem(galleryData)"
            :key="idx"
            v-bind="{ card }"
            @click="openGallery(card)"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
interface Gallery {
  id: number
  image: string
  name: string
}
interface Props {
  loading?: boolean
  position?: string
  isDark?: boolean
}

defineProps<Props>()

const loading = ref(true)

function generateItem(arr: Gallery[]) {
  let index = 0 // 1 / 2
  const generatedArray = [] // [{id: 1},{id: 2}, {id: 3}, {id: 1}]
  const checkResponseLength = arr?.length // 3
  const checkAdditionalItems = 100 - checkResponseLength // 97
  for (let i = 0; i <= checkAdditionalItems; i++) {
    generatedArray.push(arr[index])
    if (index + 1 === checkResponseLength) {
      index = 0
    } else {
      index++
    }
  }
  return generatedArray
}

onMounted(() => {
  setTimeout(() => {
    loading.value = false
  }, 1000)
})

const galleryData = [
  {
    id: 0,
    image: '/media/image-1.jpg',
    name: 'asdf',
  },
  {
    id: 1,
    image: '/media/image-2.jpg',
    name: 'asdf',
  },
  {
    id: 2,
    image: '/media/image-3.jpg',
    name: 'asdf',
  },
  {
    id: 3,
    image: '/media/image-4.jpg',
    name: 'asdf',
  },
]

const gallerySingle = ref([
  {
    id: 0,
    image: '/media/image-1.jpg',
  },
  {
    id: 1,
    image: '/media/image-2.jpg',
  },
])

const title = ref('')
const showGallery = ref(false)

function openGallery(card: Gallery) {
  title.value = card?.name
  showGallery.value = true
}
</script>
