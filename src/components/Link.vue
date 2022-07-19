<script setup lang="ts">
import { computed } from 'vue';

import Icon from '@/components/Icon.vue';

const props = withDefaults(defineProps<{
  href: string,
  target?: string,
  variant?: string,
}>(), {
  target: '',
  variant: 'default',
});

const isInternalLink = computed(() => {
  const pattern = /^((http|https|ftp):\/\/)|mailto/;
  return !pattern.test(props.href);
});
</script>

<template>
  <router-link v-if="isInternalLink" :to="props.href" :class="['link', `link--variant-${props.variant}`]">
    <span class="link__text">
      <slot></slot>
    </span>
    <Icon v-if="props.target === '_blank'" type="external-link" class="link__icon"></Icon>
  </router-link>

  <a v-else :href="props.href" :target="props.target" :class="['link', `link--variant-${props.variant}`]">
    <span class="link__text">
      <slot></slot>
    </span>
    <Icon v-if="props.target === '_blank'" type="external-link" class="link__icon"></Icon>
  </a>
</template>

<style scoped lang="scss">
.link {
  display: inline-block;
  padding: 0 0.0625rem;
  color: var(--gray-700);
  font-weight: 450;
  text-decoration-color: var(--blue-350);
  text-decoration-thickness: 0.125rem;
  text-underline-offset: 0.125rem;
  border-radius: 0.125rem;
  transition: transform ease 160ms, color ease 160ms;

  &:hover {
    color: var(--blue-500);
  }

  &:active {
    transform: scale(0.95);
  }
  &:focus-visible {
    z-index: 1;
    outline: 0.1875rem solid var(--blue-350);
    color: var(--blue-500);
  }
}

.link__text {
  isolation: isolate;
  position: relative;
}

.link__icon {
  position: relative;
  width: 1rem;
  height: 1rem;
  width: 0.875rem;
  height: 0.875rem;
  margin-left: 0.25rem;
  vertical-align: middle;
}

.link.link--variant-simple {
  text-decoration-thickness: 0.0625rem;
  color: var(--gray-650);

  &:hover {
    color: var(--blue-500);
  }
}
</style>
