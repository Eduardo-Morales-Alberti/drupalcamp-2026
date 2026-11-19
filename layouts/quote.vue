<template>
  <div class="slidev-layout dc dc--dark dc-quote">
    <div class="dc-quote__mark">&ldquo;</div>
    <div class="dc-quote__content"><slot /></div>
    <DcLogo white class="dc-quote__logo" />
    <DcFooter light />
  </div>
</template>

<style scoped>
.dc-quote {
  background: var(--dc-navy) url('/img/bg-navy.jpg') center / cover no-repeat;
  padding-top: 40px;
}

.dc-quote__mark {
  font-size: 150px;
  font-weight: 700;
  line-height: 1;
  height: 100px;
  color: var(--dc-cyan);
}

.dc-quote__content {
  max-width: 72%;
}

.dc-quote__content :deep(h1) {
  font-size: 48px; /* 36 pt */
  line-height: 1.2;
  margin-bottom: 40px;
}

.dc-quote__content :deep(p),
.dc-quote__content :deep(li) {
  font-size: var(--dc-size-body);
}

.dc-quote__logo {
  position: absolute;
  right: var(--dc-pad-x);
  bottom: 30px;
}
</style>
