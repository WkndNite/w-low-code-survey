<template>
  <div class="flex align-items-center space-between">
    <div class="flex align-items-center">
      <div class="mr-20">{{ title }}</div>
      <div class="currentStatus">{{ status }}</div>
    </div>
    <div><slot /></div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  title: string;
  status: string;
}>();
</script>

<style scoped lang="scss">
.currentStatus {
  color: var(--info-color);
  font-size: var(--font-size-base);
}
</style>
