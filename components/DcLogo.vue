<script setup>
defineProps({
  white: { type: Boolean, default: false },
  width: { type: String, default: '220px' },
})

// Prefix with the deploy base so the path works under a subfolder (GitHub Pages).
const base = import.meta.env.BASE_URL
</script>

<template>
  <img
    class="dc-logo"
    :src="`${base}img/${white ? 'logo-white' : 'logo'}.png`"
    :style="{ width }"
    alt="DrupalCamp Spain Madrid"
  >
</template>

<style scoped>
.dc-logo {
  display: block;
  height: auto;
}
</style>
