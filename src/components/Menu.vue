<script setup lang="ts">
import { ref, watch, computed } from 'vue';
import { RouteRecordRaw, useRoute } from 'vue-router';
import { store } from '@/store';
import { getTitleFromPath } from '@/enums';

const route = useRoute();

const afterMountedPath = ref('');

const animateMenuIndicator = (): void => {
  const currentMenuItemIndex = menuItems.value.findIndex(path => path.path === route.path);
  const previousMenuItemIndex = menuItems.value.findIndex(path => path.path === afterMountedPath.value);

  if(currentMenuItemIndex < 0 || previousMenuItemIndex < 0) {
    return;
  }

  if(previousMenuItemIndex > -1) {
    const previousElement = menu.value[previousMenuItemIndex];
    const previousIndicator = previousElement.querySelector('.menu__item-indicator');
    const previousRect = previousIndicator.getBoundingClientRect();

    const currentElement = menu.value[currentMenuItemIndex];

    if(!currentElement) {
      return;
    }

    const previousAnchor = previousElement?.querySelector('a');
    const currentAnchor = currentElement?.querySelector('a');
    const currentIndicator = currentElement?.querySelector('.menu__item-indicator');
    const currentIndicatorInner = currentElement?.querySelector('.menu__item-indicator-inner');
    const currentRect = currentIndicator?.getBoundingClientRect();

    const previousAnchorComputedStyle = getComputedStyle(previousAnchor);
    const currentAnchorComputedStyle = getComputedStyle(currentAnchor);

    const offsetX = previousRect.x - currentRect.x;
    const offsetY = previousRect.y - currentRect.y;

    const previousAnchorWidth = previousAnchor.clientWidth - (parseFloat(previousAnchorComputedStyle.paddingLeft) + parseFloat(previousAnchorComputedStyle.paddingRight));
    const currentAnchorWidth = currentAnchor.clientWidth - (parseFloat(currentAnchorComputedStyle.paddingLeft) + parseFloat(currentAnchorComputedStyle.paddingRight));

    const scaleX = previousAnchorWidth / currentAnchorWidth;

    currentIndicator.style.transitionDuration = '0ms';
    currentIndicatorInner.style.transitionDuration = '0ms';
    currentIndicator.style.transform = `translateX(${offsetX}px) translateY(${offsetY}px)`;
    currentIndicatorInner.style.transform = `scaleX(${scaleX})`;

    setTimeout(() => {
      currentIndicator.style.transitionDuration = '';
      currentIndicatorInner.style.transitionDuration = '';
      currentIndicator.style.transform = ``;
      currentIndicatorInner.style.transform = ``;
    });
  }
};

const menuItems = computed<Partial<RouteRecordRaw>[]>(() => (
  store.language ? store.language.menu.map(item => ({
    name: item.name,
    path: item.path
  })) : []
))

const menu = ref();

watch(route, () => {
  animateMenuIndicator();
  afterMountedPath.value = route.path;
});
</script>

<template>
  <div class="menu">
    <div class="container">
      <ol class="menu__list">
        <li ref="menu" v-for="{path} in menuItems" :class="['menu__item', route.path === path ? 'menu__item--active' : '']">
          <router-link :data-text="getTitleFromPath(path ?? '')" :to="path ?? ''">{{getTitleFromPath(path ?? '')}}</router-link>
          <div class="menu__item-indicator">
            <div class="menu__item-indicator-inner"></div>
          </div>
        </li>
      </ol>
    </div>
  </div>
</template>

<style scoped lang="scss">
.menu {
  background-color: var(--background-main);
}
.menu__list {
  display: flex;
  padding: 0;
  margin: 0;
  min-height: 3rem;
  list-style: none;
  isolation: isolate;
  flex-wrap: wrap;
  background-color: var(--background-main);
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
