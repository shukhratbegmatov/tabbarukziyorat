<template>
  <CommonModal :show="show" />
</template>
<script lang="ts" setup>
interface Props {
  show?: boolean
}
defineProps<Props>()
</script>
