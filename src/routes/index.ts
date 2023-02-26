import { Ref, ref, computed } from 'vue';
import { RouteRecordRaw } from 'vue-router';

import DutchAbout from '@/components/Dutch/About.vue';
import DutchHome from '@/components/Dutch/Home.vue';
import HungarianHome from '@/components/Hungarian/Home.vue';
import EnglishHome from '@/components/English/Home.vue';

const currentRoute: Ref<Partial<RouteRecordRaw> | null> = ref(null);

export const setCurrentRoute = (route: Partial<RouteRecordRaw> | null): void => {
  currentRoute.value = route;
}

export const getCurrentRoute = computed(() => {
  return currentRoute.value;
});

export const routes: (Partial<RouteRecordRaw> & { title: string })[] = [{
  path: '/nl/',
  name: 'DutchHome',
  title: 'Home',
  component: DutchHome
},{
  path: '/nl/over-mij/',
  name: 'DutchAbout',
  title: 'Over mij',
  component: DutchAbout
},{
  path: '/hu/',
  name: 'HungarianHome',
  title: 'Home',
  component: HungarianHome
},{
  path: '/en/',
  name: 'EnglishHome',
  title: 'Home',
  component: EnglishHome
}];