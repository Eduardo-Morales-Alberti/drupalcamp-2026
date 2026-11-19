<script setup>
defineProps({
  role: { type: String, default: '' },
  tag: { type: String, default: '' },
})
</script>

<template>
  <div class="slidev-layout dc dc--dark dc-speaker">
    <div class="dc-speaker__photo"><slot name="aside" /></div>
    <div class="dc-speaker__content">
      <div class="dc-speaker__eyebrow">Ponente · Speaker</div>
      <slot />
    </div>
    <DcLogo white class="dc-speaker__logo" />
    <DcFooter light />
  </div>
</template>

<style scoped>
.dc-speaker {
  display: grid;
  grid-template-columns: 1fr 1.25fr;
  gap: 56px;
  align-items: center;
  background: var(--dc-navy) url('/img/bg-navy-map.jpg') center / cover no-repeat;
}

.dc-speaker__photo {
  height: 78%;
}

.dc-speaker__photo :deep(img) {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center 30%;
  border-radius: var(--dc-radius);
}

.dc-speaker__eyebrow {
  font-size: var(--dc-size-eyebrow);
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  color: var(--dc-yellow);
  margin-bottom: 14px;
}

.dc-speaker__content :deep(h1) {
  font-size: var(--dc-size-header-num);
  margin-bottom: 14px;
}

.dc-speaker__content :deep(h2 img.brand) {
  display: inline-block;
  height: 1.5em;
  vertical-align: -0.35em;
}

.dc-speaker__content :deep(h2) {
  font-size: var(--dc-size-subhead);
  font-weight: 400;
  color: var(--dc-sky);
  margin-bottom: 22px;
}

.dc-speaker__content :deep(li),
.dc-speaker__content :deep(p) {
  font-size: var(--dc-size-small);
}

.dc-speaker__logo {
  position: absolute;
  right: var(--dc-pad-x);
  bottom: 30px;
}
</style>
