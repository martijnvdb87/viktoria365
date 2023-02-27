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
        <h2>Viktoria365.com</h2>
        <p>The website is available in three languages. Choose one!</p>
        <p>A weboldal három nyelven is elérhető. Válassz egyet!</p>
        <p>De webpagina is beschikbaar in drie talen. Kies er één!</p>
      </section>
      <ol>
        <li>
          <Button :action="() => switchLanguage(Languages.English)" variant="selector">
            <img class="flag" :src="flagUk">
            <span>English</span>
          </Button>
        </li>
        <li>
          <Button :action="() => switchLanguage(Languages.Hungarian)" variant="selector">
            <img class="flag" :src="flagHu">
            <span>Magyar</span>
          </Button>
        </li>
        <li>
          <Button :action="() => switchLanguage(Languages.Dutch)" variant="selector">
            <img class="flag" :src="flagNl">
            <span>Nederlands</span>
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
    padding: 1rem 1rem 0rem 1rem;
    font-size: 0.9rem;

    h2 {
      margin-bottom: 0.5rem;
    }

    p {
      margin-bottom: 1rem;
    }
  }

  button {
    margin-bottom: 10rem;
  }

  &__box {
    padding: 1rem;
    width: 24rem;
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
