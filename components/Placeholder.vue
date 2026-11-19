<script setup>
defineProps({
  label: { type: String, required: true },
  height: { type: String, default: '100%' },
})
</script>

<template>
  <div class="dc-placeholder" :style="{ height }">
    <img src="/img/icons/image.png" alt="">
    <span>[placeholder: {{ label }}]</span>
  </div>
</template>

<style scoped>
.dc-placeholder {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 14px;
  width: 100%;
  min-height: 160px;
  box-sizing: border-box;
  padding: 24px;
  border-radius: var(--dc-radius);
  background: var(--dc-sky);
  text-align: center;
}

.dc-placeholder img {
  width: 48px;
  height: 48px;
}

.dc-placeholder span {
  font-family: var(--dc-font);
  font-size: var(--dc-size-eyebrow);
  font-weight: 700;
  color: var(--dc-blue);
}
</style>
