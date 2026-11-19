<script setup>
import { computed } from 'vue'
import { useSectionNumber } from '../composables/useSectionNumber.js'

const props = defineProps({
  number: { type: [String, Number], default: undefined },
})

const num = useSectionNumber(props)
const numVar = computed(() => ({ '--dc-num': num.value ? `'${num.value}'` : 'none' }))
</script>

<template>
  <div class="slidev-layout dc dc-content dc-cols-3" :style="numVar">
    <DcLogo class="dc-content__logo" />
    <slot />
    <div class="dc-cards">
      <div class="dc-card dc-card--sky"><slot name="col-1" /></div>
      <div class="dc-card dc-card--dusk"><slot name="col-2" /></div>
      <div class="dc-card dc-card--dawn"><slot name="col-3" /></div>
    </div>
    <DcFooter />
  </div>
</template>

<style scoped>
.dc-content__logo {
  position: absolute;
  top: 34px;
  right: var(--dc-pad-x);
}

.dc-content :deep(h1) {
  max-width: calc(100% - 260px);
  margin-bottom: 44px;
}

.dc-content :deep(h1)::before {
  content: var(--dc-num);
  font-size: var(--dc-size-header-num);
  font-weight: 700;
  line-height: 1;
  color: var(--dc-blue);
  margin-right: 28px;
}

.dc-cards {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}

.dc-card {
  min-height: 300px;
  padding: 32px 28px;
  border-radius: var(--dc-radius);
}

.dc-card--sky { background: var(--dc-sky); }
.dc-card--dusk { background: var(--dc-dusk); }
.dc-card--dawn { background: var(--dc-dawn); }

.dc-card :deep(h3) {
  font-size: var(--dc-size-card-title);
  color: var(--dc-navy);
  margin-bottom: 22px;
}

.dc-card :deep(p),
.dc-card :deep(li) {
  font-size: var(--dc-size-small);
}
.dc-content {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
</style>
