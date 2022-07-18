import { ref } from 'vue';
import { RouteRecordRaw } from 'vue-router';

import About from './../components/About.vue';
import Resume from './../components/Resume.vue';
import Projects from './../components/Projects.vue';

export const routes: RouteRecordRaw[] = [{
  path: '/',
  name: 'About',
  component: About
},{
  path: '/resume/',
  name: 'Resume',
  component: Resume
},{
  path: '/projects/',
  name: 'Projects',
  component: Projects
}];
