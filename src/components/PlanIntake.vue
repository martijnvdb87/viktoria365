<script setup lang="ts">
import Icon from '@/components/Icon.vue';
import { store } from '@/store';
</script>

<template>
  <div class="plan-intake">
    <a href="mailto:viktoria365@yahoo.com" target="_blank" class="plan-intake__link">
      <Icon type="mail" class="plan-intake__icon"></Icon>
      {{ store.language?.planIntake }}
    </a>
  </div>
</template>

<style scoped lang="scss">
.plan-intake {
  margin: 0.5rem 0;

  .plan-intake__link {
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

  .plan-intake__icon {
    position: relative;
    width: 1.25rem;
    height: 1.25rem;
    vertical-align: middle;
  }
}

@media only screen and (min-width: 52rem) {
  .plan-intake {
    position: absolute;
    right: 0px;

    .plan-intake__link {
      padding: 0.75rem 1.25rem;
      font-size: 1rem;
      font-weight: 500;
      gap: 0.625rem;
    }
  }
}
</style>
