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
  name: 'About',
  path: '/'
},{
  name: 'Work',
  path: '/work/'
},{
  name: 'Projects',
  path: '/projects/'
},{
  name: 'Education',
  path: '/education/'
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
  isolation: isolate;
  flex-wrap: wrap;
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
    color: var(--gray-550);
    font-weight: 350;
    transition: all ease 240ms;
    white-space: nowrap;
  }

  a:hover {
    background-color: var(--gray-50);

    &::before {
      color: var(--gray-600);
    }
  }
  a:focus-visible {
    z-index: 1;
    outline: 0.1875rem solid var(--blue-350);
    background-color: var(--gray-50);

    &::before {
      color: var(--gray-600);
    }
  }

  a:active {
    transform: scale(0.95);
  }

  a,
  &.menu__item--active a {
    position: relative;
    display: grid;
    padding: 0 1.5rem;
    place-content: center;
    height: 3rem;
    color: var(--gray-500);
    text-decoration: none;
    transition: transform ease 320ms, background-color ease 320ms;
    white-space: nowrap;
    font-weight: 600;
    color: transparent;
    font-size: 0.9375rem;
    border-radius: 0.25rem;
  }
  &.menu__item--active a::before {
    font-weight: 600;
    color: var(--gray-900);
  }
}

.menu__item-indicator {
  position: absolute;
  z-index: 1;
  inset: 0;
  pointer-events: none;
  opacity: 0;
  transform-origin: 0% 0%;
  transition: transform ease 320ms;
}
.menu__item-indicator-inner {
  position: absolute;
  inset: 0 1.5rem 0.3rem 1.5rem;
  border-bottom: 0.25rem solid var(--blue-300);
  transform-origin: 0% 0%;
  transition: transform ease 320ms;
}
</style>
