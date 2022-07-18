<script setup lang="ts">
import { ref, watch } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();

const afterMountedPath = ref('');

type MenuItem = {
  name: string,
  path: string
}

const animateMenuIndicator = (): void => {const currentMenuItemIndex = menuItems.findIndex(path => path.path === route.path);
  const previousMenuItemIndex = menuItems.findIndex(path => path.path === afterMountedPath.value);

  if(previousMenuItemIndex > -1) {
    const previousElement = menu.value[previousMenuItemIndex];
    const previousIndicator = previousElement.querySelector('.menu__item-indicator');
    const previousRect = previousIndicator.getBoundingClientRect();

    const currentElement = menu.value[currentMenuItemIndex];
    const currentIndicator = currentElement.querySelector('.menu__item-indicator');
    const currentIndicatorInner = currentElement.querySelector('.menu__item-indicator-inner');
    const currentRect = currentIndicator.getBoundingClientRect();

    const offsetX = previousRect.x - currentRect.x;
    const offsetY = previousRect.y - currentRect.y;
    const scaleX = previousRect.width / currentRect.width;
    const scaleY = previousRect.height / currentRect.height;

    currentIndicator.style.transitionDuration = '0ms';
    currentIndicatorInner.style.transitionDuration = '0ms';
    currentIndicator.style.transform = `translateX(${offsetX}px) translateY(${offsetY}px)`;
    currentIndicatorInner.style.transform = `scaleX(${scaleX}) scaleY(${scaleY})`;

    setTimeout(() => {
      currentIndicator.style.transitionDuration = '';
      currentIndicatorInner.style.transitionDuration = '';
      currentIndicator.style.transform = ``;
      currentIndicatorInner.style.transform = ``;
    });
  }
};

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

watch(route, () => {
  animateMenuIndicator();
  afterMountedPath.value = route.path;
});
</script>

<template>
  <ol class="menu">
    <li ref="menu" v-for="{name, path} in menuItems" :class="['menu__item', route.path === path ? 'menu__item--active' : '']">
      <router-link :data-text="name" :to="path">{{name}}</router-link>
      <div class="menu__item-indicator">
        <div class="menu__item-indicator-inner"></div>
      </div>
    </li>
  </ol>
</template>

<style scoped lang="scss">
.menu {
  display: flex;
  padding: 0;
  list-style: none;
  gap: 1rem;
  isolation: isolate;
}

.menu__item {
  position: relative;

  &--active {
    .menu__item-indicator {
      opacity: 1;
    }
  }

  a::before {
    position: absolute;
    inset: 0;
    display: grid;
    place-content: center;
    content: attr(data-text);
    color: var(--gray-500);
    font-weight: 300;
    font-size: 0.9rem;
    transition: ease all 240ms;
    white-space: nowrap;
  }

  a,
  &.menu__item--active a {
    position: relative;
    display: grid;
    padding: 0 1rem;
    place-content: center;
    height: 2.4rem;
    color: var(--gray-500);
    text-decoration: none;
    transition: ease all 320ms;
    white-space: nowrap;
    font-weight: 550;
    color: transparent;
    font-size: 1rem;
  }
  &.menu__item--active a::before {
    font-weight: 550;
    color: var(--gray-700);
    font-size: 1rem;
  }
}

.menu__item-indicator {
  position: absolute;
  z-index: -1;
  inset: 0;
  pointer-events: none;
  opacity: 0;
  transform-origin: 0% 0%;
  transition: transform ease 320ms;
}
.menu__item-indicator-inner {
  position: absolute;
  inset: 0 1rem;
  border-bottom: 3px solid var(--blue-350);
  transform-origin: 0% 0%;
  transition: transform ease 320ms;
}
</style>
