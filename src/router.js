import { createRouter, createWebHistory } from 'vue-router';

import ComparePage from './pages/ComparePage.vue';
import QuizPage from './pages/QuizPage.vue';
import AboutPage from './pages/AboutPage.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', redirect: '/compare' },
    { path: '/compare', component: ComparePage },

    { path: '/quiz', component: QuizPage },
    { path: '/about', component: AboutPage }
  ]
});

export default router;
