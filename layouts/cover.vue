<script setup>
defineProps({
  date: { type: String, default: '' },
  subtitle: { type: String, default: '' },
  speaker: { type: String, default: '' },
  profile: { type: String, default: '' },
})
</script>

<template>
  <div class="slidev-layout dc dc-cover">
    <DcLogo width="340px" />
    <img class="dc-cover__skyline" src="/img/torres-blancas.png" alt="">

    <div class="dc-cover__content">
      <div v-if="date" class="eyebrow">{{ date }}</div>
      <slot />
      <div v-if="subtitle" class="dc-cover__subtitle">{{ subtitle }}</div>
      <div v-if="speaker" class="dc-cover__speaker">{{ speaker }}</div>
      <a v-if="profile" class="dc-cover__profile" :href="`https://${profile}`" target="_blank">{{ profile }}</a>
    </div>
  </div>
</template>

<style scoped>
.dc-cover {
  background: var(--dc-mist) url('/img/bg-map.jpg') center / cover no-repeat;
  padding: 44px 58px;
}

.dc-cover__skyline {
  position: absolute;
  right: 40px;
  bottom: 30px;
  height: 86%;
}

.dc-cover__content {
  position: absolute;
  left: 58px;
  top: 250px;
  max-width: 52%;
}

.dc-cover__content :deep(h1) {
  font-size: var(--dc-size-cover);
  line-height: 1.12;
  margin: 10px 0 28px;
}

.dc-cover__subtitle {
  font-size: var(--dc-size-body);
  font-weight: 700;
  color: var(--dc-blue);
  margin-bottom: 26px;
}

.dc-cover__speaker {
  font-size: var(--dc-size-small);
  color: var(--dc-ink);
}

.dc-cover__profile {
  display: block;
  margin-top: 6px;
  font-size: var(--dc-size-small);
}
</style>
