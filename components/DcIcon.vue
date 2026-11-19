<script setup>
/* Icons from the template (Lucide style), in public/img/icons/. */
defineProps({
  name: { type: String, required: true },
  bg: { type: String, default: 'white' }, // white | sky | dusk | dawn
})

// Prefix with the deploy base so the path works under a subfolder (GitHub Pages).
const base = import.meta.env.BASE_URL
</script>

<template>
  <span class="dc-icon" :class="`dc-icon--${bg}`">
    <img :src="`${base}img/icons/${name}.png`" alt="">
  </span>
</template>

<style scoped>
.dc-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: 56px;
  height: 56px;
  border-radius: 50%;
}

.dc-icon img {
  width: 28px;
  height: 28px;
}

.dc-icon--white { background: var(--dc-white); }
.dc-icon--sky { background: var(--dc-sky); }
.dc-icon--dusk { background: var(--dc-dusk); }
.dc-icon--dawn { background: var(--dc-dawn); }
</style>
