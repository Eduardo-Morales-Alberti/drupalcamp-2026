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
  <div class="slidev-layout dc dc-content dc-default" :style="numVar">
    <DcLogo class="dc-content__logo" />
    <slot />
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
.dc-content {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
</style>
