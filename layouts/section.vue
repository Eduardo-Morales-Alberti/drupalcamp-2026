<script setup>
import { computed } from 'vue'
import { useSectionNumber } from '../composables/useSectionNumber.js'

const props = defineProps({
  number: { type: [String, Number], default: undefined },
  variant: { type: String, default: 'sun' }, // sun | sky | card | navy
  block: { type: String, default: '' },
})

const num = useSectionNumber(props)
const dark = computed(() => props.variant === 'sun' || props.variant === 'navy')
const boxed = computed(() => props.variant === 'card' || props.variant === 'navy')
</script>

<template>
  <div
    class="slidev-layout dc dc-section"
    :class="[`dc-section--${variant}`, { 'dc-section--aside': $slots.aside }]"
  >
    <div class="dc-section__main" :class="{ 'dc-section__box': boxed }">
      <DcLogo v-if="boxed" :white="variant === 'navy'" width="240px" class="dc-section__box-logo" />
      <div class="dc-section__num">{{ num }}</div>
      <slot />
      <div v-if="block" class="dc-section__block">{{ block }}</div>
    </div>

    <div v-if="$slots.aside" class="dc-section__aside">
      <slot name="aside" />
    </div>

    <DcLogo v-if="!boxed" :white="dark" class="dc-section__logo" />
    <DcFooter v-if="!boxed" :light="dark" />
  </div>
</template>

<style scoped>
.dc-section {
  display: grid;
  grid-template-columns: 1fr;
  align-items: end;
  padding-bottom: 150px;
}

.dc-section--aside {
  grid-template-columns: 1.1fr 1fr;
  gap: 56px;
  align-items: center;
  padding-bottom: var(--dc-pad-bottom);
}

.dc-section--aside .dc-section__aside {
  height: 60%;
}

.dc-section--sun { background: var(--dc-navy) url('/img/bg-sun.jpg') center / cover no-repeat; }
.dc-section--sky { background: var(--dc-mist) url('/img/bg-sky.jpg') center / cover no-repeat; }

.dc-section__num {
  font-size: var(--dc-size-section-num);
  font-weight: 700;
  line-height: 1;
  margin-bottom: 14px;
  color: var(--dc-blue);
}

.dc-section__main :deep(h1) {
  font-size: var(--dc-size-section);
  line-height: 1.1;
  margin-bottom: 36px;
}

.dc-section__main :deep(p) {
  font-size: var(--dc-size-body);
}

.dc-section__block {
  font-size: var(--dc-size-body);
  color: var(--dc-ink);
}

.dc-section__box .dc-section__block {
  margin-top: 18px;
  font-size: var(--dc-size-small);
}

.dc-section--sun .dc-section__block,
.dc-section--navy .dc-section__block { color: var(--dc-mist); }

.dc-section--sun .dc-section__num { color: var(--dc-dawn); }
.dc-section--sun .dc-section__main :deep(h1) { color: var(--dc-white); }
.dc-section--sun .dc-section__main :deep(p) { color: var(--dc-mist); }

.dc-section__logo {
  position: absolute;
  right: var(--dc-pad-x);
  bottom: 30px;
}

.dc-section__aside {
  height: 100%;
}

/* Card variants: logo, number and title inside a rounded box on the left */
.dc-section--card,
.dc-section--navy {
  align-items: stretch;
  padding: 38px;
  grid-template-columns: 410px 1fr;
  grid-template-rows: minmax(0, 1fr);
  gap: 56px;
}

.dc-section__box {
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  padding: 40px;
  border-radius: var(--dc-radius);
  background: var(--dc-white);
}

.dc-section__box-logo {
  position: absolute;
  top: 40px;
  left: 40px;
}

.dc-section--navy .dc-section__box { background: var(--dc-navy); }
.dc-section--navy .dc-section__num { color: var(--dc-sky); }
.dc-section--navy .dc-section__main :deep(h1) { color: var(--dc-white); }

.dc-section__box :deep(h1) {
  font-size: var(--dc-size-header);
  margin-bottom: 0;
}

.dc-section--card .dc-section__aside,
.dc-section--navy .dc-section__aside {
  height: 100%;
  min-height: 0;
  padding: 40px 0;
  box-sizing: border-box;
}
.dc-section__aside {
  display: flex;
  align-items: center;
}

.dc-section__aside > :deep(img) {
  display: block;
  width: 100%;
  height: auto;
  max-height: 100%;
  object-fit: cover;
  border-radius: var(--dc-radius);
}
.dc-section__aside > :deep(img.illustration) {
  width: 100%;
  height: 100%;
  object-fit: contain;
  border-radius: 0;
}
</style>
