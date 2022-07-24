import { createApp } from 'vue';
import { Router, createRouter, createWebHistory, RouteLocationNormalized, NavigationGuardNext } from 'vue-router';
import { routes, setCurrentRoute } from '@/routes';

import App from '@/App.vue';

import '@/assets/styles/reset.css';
import '@/assets/styles/colors.css';
import '@/assets/styles/main.scss';

const router: Router = createRouter({
  history: createWebHistory(),
  routes
});

router.afterEach(() => {
  setTimeout(() => {
    document.body.classList.remove('preload');
  }, 100);
});

router.beforeEach((to: RouteLocationNormalized, _: RouteLocationNormalized, next: NavigationGuardNext): void => {
  const route = routes.find(route => route.name === to.name) ?? null;
  setCurrentRoute(route);

  if(typeof route?.name === 'string') {
    document.body.setAttribute('data-page', route.name.toLowerCase());
  }
  next();
});

router.beforeEach((to: RouteLocationNormalized, _: RouteLocationNormalized, next: NavigationGuardNext): void => {
  document.title = (typeof to.name === 'string' ? to.name : '') + ' ⎯ Martijn van den Bosch';
  next();
});

createApp(App)
.use(router)
.mount('#app')
