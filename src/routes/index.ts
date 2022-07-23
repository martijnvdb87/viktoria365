import { Ref, ref, computed } from 'vue';
import { RouteRecordRaw } from 'vue-router';

import About from './../components/About.vue';
import Education from '../components/Education.vue';
import Work from './../components/Work.vue';
import Projects from './../components/Projects.vue';
import Resume from './../components/Resume.vue';

const currentRoute: Ref<RouteRecordRaw | null> = ref(null);

export const routes: RouteRecordRaw[] = [{
  path: '/',
  name: 'About',
  component: About
},{
  path: '/work/',
  name: 'Work',
  component: Work
},{
  path: '/projects/',
  name: 'Projects',
  component: Projects
},{
  path: '/education/',
  name: 'Education',
  component: Education
},{
  path: '/resume/',
  name: 'Resume',
  component: Resume
}];

export const setCurrentRoute = (route: RouteRecordRaw | null): void => {
  currentRoute.value = route;
}

export const getCurrentRoute = computed(() => {
  return currentRoute.value;
});