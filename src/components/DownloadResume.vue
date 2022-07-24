<script setup lang="ts">
import Icon from '@/components/Icon.vue';
import resumeLink from '@/assets/martijn-van-den-bosch-resume-full-stack-developer.pdf';
</script>

<template>
  <div class="download-resume">

    <a :href="resumeLink" target="_blank" class="download-resume__link" download="Martijn van den Bosch - Resume full-stack developer">
      <Icon type="file-text" class="download-resume__icon"></Icon>
      Download resume
    </a>
  </div>
</template>

<style scoped lang="scss">
.download-resume {
  margin: 0.5rem 0;

  .download-resume__link {
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
      background-color: var(--gray-50);
    }

    &:active {
      transform: scale(0.95);
    }
  }

  .download-resume__icon {
    position: relative;
    width: 1.25rem;
    height: 1.25rem;
    vertical-align: middle;
  }
}

@media only screen and (min-width: 52rem) {
  .download-resume {
    position: absolute;
    right: 0px;

    .download-resume__link {
      padding: 0.75rem 1.25rem;
      font-size: 1rem;
      font-weight: 500;
      gap: 0.625rem;
    }
  }
}
</style>
