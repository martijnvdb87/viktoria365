<script setup lang="ts">
import Icon from '@/components/Icon.vue';

const props = withDefaults(defineProps<{
  title?: string,
  icon?: string,
  format?: string,
}>(), {
  format: 'medium'
});
</script>

<template>
  <section :class="['segment', `segment--${props.format}`]">
    <header v-if="props.title || props.icon" class="segment__header">
      <Icon v-if="props.icon" :type="props.icon" class="segment__icon" />
      <h2 v-if="props.title" class="segment__title">{{props.title}}</h2>
    </header>
    <div class="segment__content"><slot></slot></div>
  </section>
</template>

<style scoped lang="scss">
.segment {
  margin-bottom: 4rem;
}

.segment__header {
  display: flex;
  gap: 0.625rem;
  align-items: center;
  margin-bottom: 0.5rem;
  color: var(--gray-900);
}

.segment__icon {
  width: 1.25rem;
  height: 1.25rem;
}

.segment__title {
  font-size: 0.9375rem;
  font-weight: 600;
}

.segment.segment--small {
  margin-bottom: 3rem;

  .segment__content {
    font-size: 0.9375rem;
  }
}
</style>
