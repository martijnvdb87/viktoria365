import { createApp } from 'vue';
import { Router, createRouter, createWebHistory, RouteLocationNormalized, NavigationGuardNext, RouteRecordRaw } from 'vue-router';
import { setCurrentRoute, routes } from '@/routes';
import LanguageSelector from '@/components/LanguageSelector.vue';
import { getLanguage, getTitleFromPath, Languages, setLanguage } from '@/enums';

import App from '@/App.vue';

import '@/assets/styles/reset.css';
import '@/assets/styles/colors.css';
import '@/assets/styles/main.scss';

const allRoutes: RouteRecordRaw[] = [{
  path: '/',
  name: 'LanguageSelector',
  component: LanguageSelector
}, ...routes] as RouteRecordRaw[];

export const router: Router = createRouter({
  history: createWebHistory(),
  routes: allRoutes
});

router.afterEach(() => {
  setTimeout(() => {
    document.body.classList.remove('preload');
  }, 100);
});

router.beforeEach((to: RouteLocationNormalized, _: RouteLocationNormalized, next: NavigationGuardNext): void => {
  if(to.path === '/') {
    const language = getLanguage();

    if(language !== null) {
      next(language.path);
    }
  }
  
  next();
});

router.beforeEach((to: RouteLocationNormalized, _: RouteLocationNormalized, next: NavigationGuardNext): void => {
  if(to.path !== '/') {
    const currentLanguage = Object.values(Languages).find((langauge) => langauge.menu.find(item => item.path === to.path))
    setLanguage(currentLanguage ?? null);
  }
  
  next();
});

router.beforeEach((to: RouteLocationNormalized, _: RouteLocationNormalized, next: NavigationGuardNext): void => {
  const route = allRoutes.find(route => route.path === to.path) ?? null;
  setCurrentRoute(route);

  if(typeof route?.name === 'string') {
    document.body.setAttribute('data-page', route.name.toLowerCase());
  }
  next();
});

router.beforeEach((to: RouteLocationNormalized, _: RouteLocationNormalized, next: NavigationGuardNext): void => {
  const title = getTitleFromPath(to.path);
  const parts: string[] = [];

  if(title !== '') {
    parts.push(title);
  }

  parts.push('Viktoria365.com');
  document.title = parts.join(' ⎯ ');

  next();
});

createApp(App)
.use(router)
.mount('#app')
