<script setup lang="ts">
import Profile from '@/components/Profile.vue';
import Menu from '@/components/Menu.vue';
</script>

<template>
  <main class="app__main">
    <div class="app__content">
      <Profile />
    </div>
    <Menu />
    <div class="app__content">
      <router-view></router-view>
    </div>
  </main>
</template>

<style scoped>
.app__main {
  max-width: 50rem;
  padding: 1rem 0rem;
  margin: auto;
}

@media only screen and (min-width: 80rem) {
  .app__main {
    max-width: 74rem;
  }
}

.app__content {
  padding: 1.5rem;
}
</style>
