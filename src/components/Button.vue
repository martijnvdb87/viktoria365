<script setup lang="ts">
import { computed } from 'vue';

import Icon from '@/components/Icon.vue';

const props = withDefaults(defineProps<{
  action?: (event: MouseEvent) => void,
  href?: string,
  target?: string,
  variant?: string,
}>(), {
  target: '',
  variant: 'default',
});

const isInternalLink = computed(() => {
  const pattern = /^((http|https|ftp):\/\/)|mailto/;
  return !pattern.test(props.href ?? '');
});
</script>

<template>
  <button v-if="props.action" @click="(e) => props.action?.(e)" :class="['button', `button--variant-${props.variant}`]">
    <span class="button__text">
      <slot></slot>
    </span>
    <Icon v-if="props.target === '_blank'" type="external-button" class="button__icon"></Icon>
  </button>

  <router-link v-else-if="isInternalLink" :to="props.href ?? ''" :class="['button', `button--variant-${props.variant}`]">
    <span class="button__text">
      <slot></slot>
    </span>
    <Icon v-if="props.target === '_blank'" type="external-button" class="button__icon"></Icon>
  </router-link>

  <a v-else :href="props.href" :target="props.target" :class="['button', `button--variant-${props.variant}`]">
    <span class="button__text">
      <slot></slot>
    </span>
    <Icon v-if="props.target === '_blank'" type="external-button" class="button__icon"></Icon>
  </a>
</template>

<style scoped lang="scss">
button {
  border: none;
  background: none;
  cursor: pointer;
}
.button {
  margin: 0.5rem 0;
  text-decoration: none;

  .button__text {
    display: inline-flex;
    text-decoration: none;
    gap: 0.5rem;
    color: #ffffff;
    background-color: var(--blue-450);
    padding: 0.625rem 0.75rem;
    border-radius: 0.25rem;
    font-size: 0.9375rem;
    font-weight: 450;
    align-items: center;
    transition: transform ease 240ms, color ease 240ms, background-color ease 240ms;
    
    &:hover {
      background-color: var(--blue-550);
    }

    &:focus-visible {
      z-index: 1;
      outline: 0.1875rem solid var(--blue-350);
    }

    &:active {
      transform: scale(0.95);
    }
  }

  .button__icon {
    position: relative;
    width: 1.25rem;
    height: 1.25rem;
    vertical-align: middle;
  }
}
</style>
