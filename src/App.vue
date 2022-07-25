<script setup lang="ts">
import Profile from '@/components/Profile.vue';
import Menu from '@/components/Menu.vue';
import DownloadResume from '@/components/DownloadResume.vue';
</script>

<template>
  <main class="app__main">
    <div class="app__profile">
      <div class="container">
        <Profile :status="true" />
      </div>
    </div>
    <Menu />
    <div class="app__content">
      <router-view v-slot="{ Component }">
        <transition name="fade" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </div>
    <DownloadResume class="download-resume--resume" />
  </main>
</template>

<style scoped lang="scss">
.app__profile {
  background-color: var(--background-main);
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 240ms ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
