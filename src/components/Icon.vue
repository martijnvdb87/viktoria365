<script setup lang="ts">
import { computed, } from 'vue';

import iconAward from '@/assets/icons/award.svg?raw';
import iconBriefcase from '@/assets/icons/briefcase.svg?raw';
import iconCode from '@/assets/icons/code.svg?raw';
import iconCodepen from '@/assets/icons/codepen.svg?raw';
import iconExternalLink from '@/assets/icons/external-link.svg?raw';
import iconFileText from '@/assets/icons/file-text.svg?raw';
import iconGithub from '@/assets/icons/github.svg?raw';
import iconHeart from '@/assets/icons/heart.svg?raw';
import iconLink from '@/assets/icons/link.svg?raw';
import iconLinkedin from '@/assets/icons/linkedin.svg?raw';
import iconMail from '@/assets/icons/mail.svg?raw';
import iconMapPin from '@/assets/icons/map-pin.svg?raw';
import iconMessageCircle from '@/assets/icons/message-circle.svg?raw';
import iconMessageSquare from '@/assets/icons/message-square.svg?raw';
import iconSmile from '@/assets/icons/smile.svg?raw';
import iconUser from '@/assets/icons/user.svg?raw';
import iconVideo from '@/assets/icons/video.svg?raw';

const props = defineProps<{
  type: string
}>();

const icon = computed(() => {
  switch(props.type) {
    case 'award': return iconAward;
    case 'briefcase': return iconBriefcase;
    case 'code': return iconCode;
    case 'codepen': return iconCodepen;
    case 'external-link': return iconExternalLink;
    case 'file-text': return iconFileText;
    case 'github': return iconGithub;
    case 'heart': return iconHeart;
    case 'link': return iconLink;
    case 'linkedin': return iconLinkedin;
    case 'mail': return iconMail;
    case 'map-pin': return iconMapPin;
    case 'message-circle': return iconMessageCircle;
    case 'message-square': return iconMessageSquare;
    case 'smile': return iconSmile;
    case 'user': return iconUser;
    case 'video': return iconVideo;
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
