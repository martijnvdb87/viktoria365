<script setup lang="ts">
import profilePicture from '@/assets/images/profile-picture.jpg';
import Status from '@/components/Status.vue';
</script>

<template>
  <div class="profile">
    <figure>
      <img :src="profilePicture">
      <figcaption>Martijn van den Bosch</figcaption>
      <Status></Status>
    </figure>
    <header>
      <h1>Martijn van den Bosch</h1>
      <p>Senior full-stack developer</p>
    </header>
  </div>
</template>

<style scoped lang="scss">
.profile {
  display: grid;
  grid-template-columns: 8rem 1fr;
  gap: 1.5rem;

  figure {
    position: relative;

    img {
      width: 7.5rem;
      height: 7.5rem;
      border: none;
      border-radius: 999rem;
      overflow: hidden;
      background-color: var(--gray-100);
    }

    figcaption {
      display: none;
    }

    .status {
      position: absolute;
      bottom: 0;
      left: calc(100% - 2.5rem);
    }
  }

  header {
    display: flex;
    flex-direction: column;
    justify-content: center;
    line-height: 1.45;

    h1 {
      font-weight: 600;
      font-size: 1.375rem;
      color: var(--gray-900);
    }

    p {
      font-weight: 350;
      font-size: 1.0625rem;
    }
  }
}
</style>
