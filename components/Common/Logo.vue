<template>
  <img :src="`/logo/${locale}.svg`" alt="Main logo" />
</template>

<script setup lang="ts">
const { locale } = useI18n()
</script>

<style scoped></style>
