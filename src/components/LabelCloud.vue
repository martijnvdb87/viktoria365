<script setup lang="ts">
</script>

<template>
  <div class="label-cloud">
    <slot></slot>
  </div>
</template>

<style scoped lang="scss">
.label-cloud {
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
}
</style>
