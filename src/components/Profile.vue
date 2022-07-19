<script setup lang="ts">
</script>

<template>
  <div class="profile">
    <figure>
      <img src="https://avatars.githubusercontent.com/u/41451264">
      <figcaption>Martijn van den Bosch</figcaption>
    </figure>
    <header>
      <h1>Martijn van den Bosch</h1>
      <p>Full Stack Developer</p>
    </header>
  </div>
</template>

<style scoped lang="scss">
.profile {
  display: grid;
  grid-template-columns: 8rem 1fr;
  gap: 1.5rem;

  figure {
    width: 7.5rem;
    aspect-ratio: 1;
    border-radius: 999rem;
    background-color: var(--gray-100);
    overflow: hidden;

    img {
      width: 100%;
      height: 100%;
      border: none;
    }

    figcaption {
      display: none;
    }
  }

  header {
    display: flex;
    flex-direction: column;
    justify-content: center;

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
