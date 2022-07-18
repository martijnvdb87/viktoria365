import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import { routes } from '@/routes';

import App from '@/App.vue';

import '@/assets/styles/reset.css';
import '@/assets/styles/colors.css';
import '@/assets/styles/main.scss';

const router = createRouter({
  history: createWebHistory(),
  routes
});

createApp(App)
.use(router)
.mount('#app')
