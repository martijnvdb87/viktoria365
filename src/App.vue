<script setup lang="ts">
import { getCurrentRoute } from '@/routes';
import Profile from '@/components/Profile.vue';
import Menu from '@/components/Menu.vue';
</script>

<template>
  <main class="app__main">
    <Transition>
      <div v-if="getCurrentRoute?.name !== 'Resume'" class="app__profile">
        <div class="container">
          <Profile :status="true" />
        </div>
      </div>
    </Transition>
    <Menu />
    <router-view v-slot="{ Component }">
      <transition name="fade" mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view>
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

.v-enter-active,
.v-leave-active {
  max-height: 10.5rem;
  transition: all 480ms ease;

  .profile {
    transform: none;
    transition: all 480ms ease;
  }
}

.v-enter-from,
.v-leave-to {
  max-height: 0rem;

  .profile {
    opacity: 0;
    transform: translateY(-100%);
    transition: all 480ms ease;
  }
}
</style>
