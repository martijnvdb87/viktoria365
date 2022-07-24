<script setup lang="ts">
import Link from '@/components/Link.vue';
import qrCode from '@/assets/images/qr-code.svg';
</script>

<template>
  <div class="qr-code">
    <p class="qr-code__text">
      For projects and more visit
      <Link href="https://martijnvandenbosch.com" target="_blank">martijnvandenbosch.com</Link>
    </p>
    <a class="qr-code__link" href="https://martijnvandenbosch.com" aria-label="martijnvandenbosch.com" target="_blank">
      <img :src="qrCode" alt="martijnvandenbosch.com">
    </a>
  </div>
</template>

<style scoped lang="scss">
.qr-code {
  display: flex;
  position: absolute;
  top: 4rem;
  gap: 1.5rem;
  right: 4rem;

  .qr-code__text {
    display: flex;
    flex-direction: column;
    text-align: right;
    font-size: 0.9375rem;
    color: var(--gray-400);
    justify-content: center;
  }

  .qr-code__link {
    border-radius: 0.125rem;
    transition: transform ease 160ms;

    &:active {
      transform: scale(0.95);
    }
    &:hover,
    &:focus-visible {
      z-index: 1;
      outline: 0.1875rem solid var(--blue-350);
    }
  }

  img {
    width: 7.5rem;
    height: 7.5rem;
  }
}
</style>
