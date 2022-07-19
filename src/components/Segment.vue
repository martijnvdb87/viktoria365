<script setup lang="ts">
import Icon from '@/components/Icon.vue';

const props = defineProps<{
  title?: string,
  icon?: string,
}>()
</script>

<template>
  <section>
    <header v-if="props.title || props.icon">
      <Icon v-if="props.icon" :type="props.icon" />
      <h2 v-if="props.title">{{props.title}}</h2>
    </header>
    <div><slot></slot></div>
  </section>
</template>

<style scoped lang="scss">
section {
  margin-bottom: 4rem;
}

header {
  display: flex;
  gap: 0.625rem;
  align-items: center;
  margin-bottom: 0.5rem;
  color: var(--gray-900);

  svg {
    width: 1.25rem;
    height: 1.25rem;
  }

  h2 {
    font-size: 0.9375rem;
    font-weight: 600;
  }
}
</style>
