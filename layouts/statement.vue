<script setup>
defineProps({
  big: { type: Boolean, default: false },
})
</script>

<template>
  <div class="slidev-layout dc dc-statement" :class="{ 'dc-statement--big': big }">
    <DcLogo class="dc-statement__logo" />
    <div class="dc-statement__card">
      <slot />
    </div>
    <DcFooter />
  </div>
</template>

<style scoped>
.dc-statement {
  display: flex;
  align-items: center;
}

.dc-statement__logo {
  position: absolute;
  top: 34px;
  right: var(--dc-pad-x);
}

.dc-statement__card {
  width: 100%;
  box-sizing: border-box;
  margin-top: 40px;
  padding: 64px 72px;
  border-radius: var(--dc-radius);
  background: var(--dc-dusk);
}

.dc-statement__card :deep(h1) {
  font-size: var(--dc-size-statement);
  line-height: 1.2;
  max-width: 24ch;
  margin-bottom: 28px;
}

.dc-statement--big .dc-statement__card :deep(h1) {
  font-size: var(--dc-size-display);
  line-height: 1;
  letter-spacing: -0.03em;
  color: var(--dc-blue);
  max-width: none;
}

.dc-statement__card :deep(p),
.dc-statement__card :deep(li) {
  font-size: var(--dc-size-body);
}

.dc-statement__card :deep(> :last-child) {
  margin-bottom: 0;
}
.dc-statement__card :deep(p.source) {
  font-size: var(--dc-size-eyebrow);
}
</style>
