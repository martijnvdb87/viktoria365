<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import { afterMountedPath } from  '@/routes';
import { useRoute } from 'vue-router';

const route = useRoute();

type MenuItem = {
  name: string,
  path: string
}

onMounted(() => {
  const currentMenuItemIndex = menuItems.findIndex(path => path.path === route.path);
  const previousMenuItemIndex = menuItems.findIndex(path => path.path === afterMountedPath.value);

  if(previousMenuItemIndex > -1) {
    const previousElement = menu.value[previousMenuItemIndex];
    const previousIndicator = previousElement.querySelector('.menu__item-indicator');
    const previousRect = previousIndicator.getBoundingClientRect();
    console.log(previousRect)

    const currentElement = menu.value[currentMenuItemIndex];
    const currentIndicator = currentElement.querySelector('.menu__item-indicator');
    const currentRect = currentIndicator.getBoundingClientRect();
    console.log(currentRect)

  }

  afterMountedPath.value = route.path;
});

const menuItems: MenuItem[] = [{
  name: 'Home',
  path: '/'
},{
  name: 'Resume',
  path: '/resume/'
},{
  name: 'Projects',
  path: '/projects/'
}];

const menu = ref();
</script>

<template>
  <ol class="menu">
    <li ref="menu" v-for="{name, path} in menuItems" :class="['menu__item', route.path === path ? 'menu__item--active' : '']">
      <router-link :to="path">{{name}}</router-link>
      <div class="menu__item-indicator"></div>
    </li>
  </ol>
</template>

<style scoped lang="scss">
.menu {
  display: flex;
  padding: 0;
  list-style: none;
  gap: 3rem;
  isolation: isolate;
}

.menu__item {
  position: relative;

  a {
    display: grid;
    color: var(--gray-500);
    text-decoration: none;
  }

  &--active a {
    font-weight: 700;
    color: var(--sky-500);
  }
}

.menu__item-indicator {
  position: absolute;
  z-index: -1;
  inset: 0;
  pointer-events: none;
  border-bottom: 3px solid red;
}
</style>
