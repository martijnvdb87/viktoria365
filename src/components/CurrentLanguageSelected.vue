<script setup lang="ts">
import Button from '@/components/Button.vue';
import { setLanguage } from '@/enums';
import { router } from '@/main';
import { store } from '@/store';

function switchLanguage() {
  setLanguage(null);
  router.push('/');
}
</script>

<template>
  <div class="current-language-selected">
    <div class="current-language-selected__box">
      <Button :action="switchLanguage" variant="current-language-selected">
        <img class="flag" :src="store.language?.flag">
        <span>{{ store.language?.name }}</span>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
      </Button>
    </div>
  </div>
</template>

<style lang="scss">
.current-language-selected {
  display: inline-flex;

  .flag {
    width: 1rem;
    margin-right: 0.125rem;
    border-radius: 99rem;
  }

  svg {
    width: 0.875rem;
    opacity: 0.75;
  }
}
</style>
