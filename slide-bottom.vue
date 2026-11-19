<script setup>
/*
 * Progress bar on every slide except the cover.
 * Slidev renders slide-bottom.vue inside every slide, so it also reaches the PDF export.
 */
import { computed } from 'vue'
import { useSlideContext } from '@slidev/client'

const { $page, $nav } = useSlideContext()

const total = computed(() => $nav.value.total)
const width = computed(() => `${(($page.value - 1) / Math.max(total.value - 1, 1)) * 100}%`)
</script>

<template>
  <div v-if="$page > 1" class="dc-progress">
    <div class="dc-progress__bar" :style="{ width }" />
  </div>
</template>

<style scoped>
.dc-progress {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  height: 6px;
  background: rgba(204, 237, 249, 0.5); /* --dc-sky, translucent */
  z-index: 10;
}

.dc-progress__bar {
  height: 100%;
  background: var(--dc-cyan);
  transition: width 0.3s ease;
}
</style>
