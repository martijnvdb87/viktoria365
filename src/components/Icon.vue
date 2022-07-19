<script setup lang="ts">
import { computed, } from 'vue';

import iconBriefcase from '@/assets/icons/briefcase.svg?raw';
import iconCode from '@/assets/icons/code.svg?raw';
import iconExternalLink from '@/assets/icons/external-link.svg?raw';
import iconSmile from '@/assets/icons/smile.svg?raw';
import iconUser from '@/assets/icons/user.svg?raw';

const props = defineProps<{
  type: string
}>();

const icon = computed(() => {
  switch(props.type) {
    case 'briefcase': return iconBriefcase;
    case 'code': return iconCode;
    case 'external-link': return iconExternalLink;
    case 'smile': return iconSmile;
    case 'user': return iconUser;
  }

  return '';
});


</script>

<template>
  <svg v-if="icon" v-html="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"></svg>
</template>

<style scoped>
svg {
  width: 1.5rem;
  height: 1.5rem;
  fill: none;
  stroke: currentColor;
  stroke-width: 2;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style>
