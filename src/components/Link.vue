<script setup lang="ts">
import { computed } from 'vue';

import Icon from '@/components/Icon.vue';

const props = withDefaults(defineProps<{
  href: string,
  target?: string,
}>(), {
  target: ''
});

const isInternalLink = computed(() => {
  const pattern = /^((http|https|ftp):\/\/)/;
  return !pattern.test(props.href);
});


</script>

<template>
  <router-link v-if="isInternalLink" :to="props.href" class="link">
    <span class="link__text">
      <slot></slot>
    </span>
    <Icon v-if="props.target === '_blank'" type="external-link" class="link__icon"></Icon>
  </router-link>

  <a v-else :href="props.href" :target="props.target" class="link">
    <span class="link__text">
      <slot></slot>
    </span>
    <Icon v-if="props.target === '_blank'" type="external-link" class="link__icon"></Icon>
  </a>
</template>

<style scoped lang="scss">
.link {
  display: inline-flex;
  padding: 0 0.0625rem;
  color: var(--gray-700);
  font-weight: 450;
  text-decoration: none;
  align-items: center;
  gap: 0.25rem;
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
  
  &::before {
    position: absolute;
    z-index: -1;
    inset: 0 0 0.125rem 0;
    content: '';
    border-bottom: 0.125rem solid var(--blue-300);
    pointer-events: none;
    transition: ease all 160ms;
  }
}

.link__icon {
  position: relative;
  width: 1rem;
  height: 1rem;
  width: 0.875rem;
  height: 0.875rem;
}
</style>
