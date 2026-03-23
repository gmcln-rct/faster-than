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
        title: 'Faster Than - Which Animal Is Faster?',
        description: 'Faster Than is an educational science tool that helps kids and parents explore the fastest speeds of animals from around the world. Compare speeds or take a quiz to test your knowledge.'
      }
    },
    {
      path: '/compare',
      name: 'compare',
      component: ComparePage,
      meta: {
        title: 'Compare Animal Speeds - Faster Than',
        description: 'Select two animals and compare their top speeds. Discover which animal is faster with side-by-side speed comparisons from across the Animal Kingdom.'
      }
    },

    {
      path: '/quiz',
      name: 'quiz',
      component: QuizPage,
      meta: {
        title: 'Animal Speed Quiz - Faster Than',
        description: 'Test your animal speed knowledge with a five-question quiz. Can you guess which animal is faster?'
      }
    },
    {
      path: '/about',
      name: 'about',
      component: AboutPage,
      meta: {
        title: 'About - Faster Than',
        description: 'Learn about Faster Than, an educational site that helps kids and parents explore the fastest speeds of animals throughout the Animal Kingdom.'
      },
    }
  ]
});

router.afterEach((to) => {
  document.title = to.meta.title || 'Faster Than - Which Animal Is Faster?';

  const descriptionTag = document.querySelector('meta[name="description"]');
  if (descriptionTag && to.meta.description) {
    descriptionTag.setAttribute('content', to.meta.description);
  }

  let canonicalTag = document.querySelector('link[rel="canonical"]');
  if (canonicalTag) {
    canonicalTag.setAttribute('href', 'https://fasterthan.net' + to.path);
  }
});

export default router;
