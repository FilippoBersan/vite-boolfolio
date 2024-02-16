import { createRouter, createWebHistory } from 'vue-router';

import AppHome from './components/pages/AppHome.vue';
import PostList from './components/pages/PostList.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: AppHome,
    },
    {
      path: '/blog',
      name: 'posts',
      component: PostList,
    },
  ],
});

export { router };
