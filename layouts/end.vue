<script setup>
defineProps({
  eyebrow: { type: String, default: '' },
})
</script>

<template>
  <div class="slidev-layout dc dc-end">
    <DcLogo width="280px" />
    <div class="dc-end__content">
      <div v-if="eyebrow" class="eyebrow">{{ eyebrow }}</div>
      <slot />
    </div>
    <DcFooter />
  </div>
</template>

<style scoped>
.dc-end {
  background: var(--dc-mist) url('/img/bg-sky.jpg') center / cover no-repeat;
}

.dc-end__content {
  margin-top: 90px;
  max-width: 62%;
}

.dc-end__content :deep(h1) {
  font-size: var(--dc-size-section);
  line-height: 1.1;
  margin: 8px 0 32px;
}

.dc-end__content :deep(h2) {
  font-size: 32px; /* 24 pt */
  font-weight: 400;
  color: var(--dc-blue);
  margin-bottom: 24px;
}
</style>
