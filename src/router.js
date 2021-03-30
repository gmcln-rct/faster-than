import { createRouter, createWebHistory } from 'vue-router';

import LandingPage from './pages/LandingPage.vue';
import ComparePage from './pages/ComparePage.vue';
import QuizPage from './pages/QuizPage.vue';
import AboutPage from './pages/AboutPage.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/faster-than', component: LandingPage },
    { path: '/faster-than/compare', component: ComparePage },

    { path: '/faster-than/quiz', component: QuizPage },
    { path: '/faster-than/about', component: AboutPage }
  ]
});

export default router;
