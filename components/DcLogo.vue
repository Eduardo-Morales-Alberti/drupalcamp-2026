<script setup>
defineProps({
  white: { type: Boolean, default: false },
  width: { type: String, default: '220px' },
})
</script>

<template>
  <img
    class="dc-logo"
    :src="white ? '/img/logo-white.png' : '/img/logo.png'"
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
