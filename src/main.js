import { createApp } from 'vue';

import store from './store/index';

import App from './App.vue';

import BaseCard from './components/ui/BaseCard.vue';

const app = createApp(App);

app.use(store);

app.component('base-card', BaseCard);

app.mount('#app');
