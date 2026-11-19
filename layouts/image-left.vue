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
  <div class="slidev-layout dc dc-content dc-image-left" :style="numVar">
    <DcLogo class="dc-content__logo" />
    <div class="dc-split">
      <div class="dc-split__aside"><slot name="aside" /></div>
      <div class="dc-split__main"><slot /></div>
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

.dc-split {
  display: grid;
  grid-template-columns: 1fr 1.2fr;
  gap: 48px;
  align-items: center;
  grid-template-rows: minmax(0, 1fr);
  height: 100%;
}

.dc-split__main :deep(h1) {
  max-width: 100%;
  text-wrap: pretty;
}

.dc-split__main :deep(p),
.dc-split__main :deep(li) {
  font-size: var(--dc-size-small);
}

.dc-split__aside {
  height: 72%;
}
.dc-split__aside {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.dc-split__aside :deep(p.caption) {
  text-align: center;
}

.dc-split__aside > :deep(img) {
  display: block;
  max-width: 100%;
  max-height: 440px;
  border-radius: var(--dc-radius);
  box-shadow: 0 8px 24px rgba(18, 40, 95, 0.12);
}
</style>
