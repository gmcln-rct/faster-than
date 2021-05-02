import { createRouter, createWebHistory } from 'vue-router';

import LandingPage from './pages/LandingPage.vue';
import ComparePage from './pages/ComparePage.vue';
import QuizPage from './pages/QuizPage.vue';
import AboutPage from './pages/AboutPage.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: LandingPage,
      meta: {
        title: 'Landing Page'
      }
    },
    {
      path: '/compare',
      name: 'compare',
      component: ComparePage,
      meta: {
        title: 'Compare Page'
      }
    },

    {
      path: '/quiz',
      name: 'quiz',
      component: QuizPage,
      meta: {
        title: 'Quiz Page'
      }
    },
    {
      path: '/about',
      name: 'about',
      component: AboutPage,
      meta: {
        title: 'About Page'
      }
    }
  ]
});

export default router;
