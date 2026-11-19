<script setup>
defineProps({
  variant: { type: String, default: 'sky' }, // sky | navy
})
</script>

<template>
  <div class="slidev-layout dc dc-big" :class="[`dc-big--${variant}`, { 'dc--dark': variant === 'navy' }]">
    <img v-if="variant === 'sky'" class="dc-big__skyline" src="/img/torres-blancas.png" alt="">
    <div class="dc-big__content"><slot /></div>
    <DcLogo :white="variant === 'navy'" class="dc-big__logo" />
    <DcFooter :light="variant === 'navy'" />
  </div>
</template>

<style scoped>
.dc-big {
  display: flex;
  align-items: center;
}

.dc-big--sky { background: var(--dc-mist) url('/img/bg-sky.jpg') center / cover no-repeat; }
.dc-big--navy { background: var(--dc-navy) url('/img/bg-navy.jpg') center / cover no-repeat; }

.dc-big__skyline {
  position: absolute;
  right: 40px;
  bottom: 30px;
  height: 80%;
}

.dc-big__content {
  max-width: 56%;
}

.dc-big--navy .dc-big__content {
  max-width: 85%;
}

.dc-big__content :deep(h1) {
  font-size: var(--dc-size-display);
  line-height: 1;
  letter-spacing: -0.03em;
  margin-bottom: 28px;
}

.dc-big__content :deep(p) {
  font-size: var(--dc-size-body);
  margin-bottom: 6px;
}

.dc-big__content :deep(img.brand) {
  display: inline-block;
  height: 1.5em;
  vertical-align: -0.35em;
}

.dc-big__logo {
  position: absolute;
  top: 34px;
  right: var(--dc-pad-x);
}

.dc-big--sky .dc-big__logo {
  display: none;
}
</style>
