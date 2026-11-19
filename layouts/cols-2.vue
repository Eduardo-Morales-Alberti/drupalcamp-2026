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
  <div class="slidev-layout dc dc-content dc-cols-2" :style="numVar">
    <DcLogo class="dc-content__logo" />
    <slot />
    <div class="dc-cols">
      <div class="dc-col"><slot name="col-1" /></div>
      <div class="dc-col"><slot name="col-2" /></div>
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

.dc-cols {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 56px;
}

.dc-col :deep(p),
.dc-col :deep(li) {
  font-size: var(--dc-size-small);
}
.dc-content {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.dc-col :deep(img.screenshot) {
  max-height: 300px;
}
</style>
