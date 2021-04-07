import { createRouter, createWebHistory } from 'vue-router';

import LandingPage from './pages/LandingPage.vue';
import ComparePage from './pages/ComparePage.vue';
import QuizPage from './pages/QuizPage.vue';
import AboutPage from './pages/AboutPage.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: LandingPage },
    { path: '/compare', component: ComparePage },

    { path: '/quiz', component: QuizPage },
    { path: '/about', component: AboutPage }
  ]
});

export default router;
