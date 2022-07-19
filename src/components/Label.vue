<script setup lang="ts">
</script>

<template>
  <span class="label"><slot></slot></span>
</template>

<style scoped lang="scss">
.label {
  display: inline-block;
  padding: 0.25rem 0.75rem;
  font-size: 0.8125rem;
  font-weight: 500;
  color: var(--gray-600);
  background-color: var(--gray-50);
  border-radius: 999rem;
}
</style>
