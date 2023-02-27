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
}
</style>
