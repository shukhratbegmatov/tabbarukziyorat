<template>
  <div class="w-full">
    <Transition name="fade" mode="out-in">
      <div :key="$route.path">
        <NuxtPage />
      </div>
    </Transition>
  </div>
</template>

<script>
export default {
  name: "religions"
}
</script>

