<script setup lang="ts">
import Button from '@/components/Button.vue';
import { Languages, Language, setLanguage } from '@/enums';

function switchLanguage(language: Language) {
  setLanguage(language, true);
}
</script>

<template>
  <div class="language-selector">
    <div class="language-selector__box">
      <ol>
        <li v-for="language in Languages">
          <Button :action="() => switchLanguage(language)">{{ language.name }}</Button>
        </li>
      </ol>
    </div>
  </div>
</template>

<style lang="scss">
.language-selector {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;

  &__box {
    padding: 2rem;
    background-color: #ffffff;
    border-radius: 0.5rem;
    box-shadow: 0rem 1rem 1rem rgba(0, 0, 0, 0.04);

    ol {
      list-style: none;
      margin: 0px;
      padding: 0px;
    }
  }
}

</style>
