import { RouteRecordRaw } from 'vue-router';

import About from './../components/About.vue';
import Education from '../components/Education.vue';
import Work from './../components/Work.vue';
import Projects from './../components/Projects.vue';

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
}];
