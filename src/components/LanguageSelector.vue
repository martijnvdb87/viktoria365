<script setup lang="ts">
import Button from '@/components/Button.vue';
import { Languages, Language, setLanguage } from '@/enums';
import flagNl from '@/assets/flags/nl.svg';
import flagHu from '@/assets/flags/hu.svg';
import flagUk from '@/assets/flags/uk.svg';

function switchLanguage(language: Language) {
  setLanguage(language, true);
}
</script>

<template>
  <div class="language-selector">
    <div class="language-selector__box">
      <section>
        <h2>Lorem ipsum dolor sit amet</h2>
        <p>consectetur adipiscing elit. Quisque ut ante at arcu tempus gravida dignissim non purus. Aenean turpis dolor, scelerisque eget magna a, rhoncus lacinia turpis. Vivamus mauris dolor, molestie nec augue vehicula, fermentum vehicula ante.</p>
      </section>
      <ol>
        <li>
          <Button :action="() => switchLanguage(Languages.Dutch)" variant="selector">
            <img class="flag" :src="flagNl">
            <span>Ik spreek Nederlands</span>
          </Button>
        </li>
        <li>
          <Button :action="() => switchLanguage(Languages.Hungarian)" variant="selector">
            <img class="flag" :src="flagHu">
            <span>Beszélek magyarul</span>
          </Button>
        </li>
        <li>
          <Button :action="() => switchLanguage(Languages.English)" variant="selector">
            <img class="flag" :src="flagUk">
            <span>I speak English</span>
          </Button>
        </li>
      </ol>
    </div>
  </div>
</template>

<style lang="scss">
.language-selector {
  position: fixed;
  overflow: auto;
  inset: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;

  section {
    padding: 1rem;
  }

  button {
    margin-bottom: 10rem;
  }

  &__box {
    padding: 1rem;
    width: 32rem;
    max-width: 100%;
    background-color: #ffffff;
    border-radius: 0.5rem;
    box-shadow: 0rem 1rem 1rem rgba(0, 0, 0, 0.04);

    ol {
      list-style: none;
      margin: 0px;
      padding: 0px;
    }
  }

  .flag {
    width: 2rem;
    margin-right: 0.5rem;
    border-radius: 99rem;
  }
}

</style>
