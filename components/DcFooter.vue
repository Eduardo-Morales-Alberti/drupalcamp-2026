<script setup>
/* No page number: progress is shown by the bar in slide-bottom.vue. */
defineProps({
  light: { type: Boolean, default: false },
})
</script>

<template>
  <footer class="dc-footer" :class="{ 'dc-footer--light': light }">
    <span>#DrupalCampSpain2026</span>
  </footer>
</template>

<style scoped>
.dc-footer {
  position: absolute;
  left: var(--dc-pad-x);
  right: var(--dc-pad-x);
  bottom: 30px;
  display: flex;
  justify-content: space-between;
  font-family: var(--dc-font);
  font-size: var(--dc-size-eyebrow);
  font-weight: 700;
  color: var(--dc-blue);
  z-index: 2;
}

.dc-footer--light {
  color: var(--dc-white);
}
</style>
