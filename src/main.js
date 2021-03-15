import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
// import {
//   createMetaManager,
//   defaultConfig,
//   resolveOption,
//   useMeta
// } from 'vue-meta';

import App from './App.vue';
import TheQuizSection from './components/quiz/TheQuizSection.vue';
import TheCompareSection from './components/compare/TheCompareSection.vue';

import BaseCard from './components/ui/BaseCard.vue';
import BaseSelect from './components/ui/BaseSelect.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [{ path: '/compare', component }]
});

const app = createApp(App);

app.component('base-card', BaseCard);
app.component('base-select', BaseSelect);

app.mount('#app');
