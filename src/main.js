import { createApp } from 'vue';
// import {
//   createMetaManager,
//   defaultConfig,
//   resolveOption,
//   useMeta
// } from 'vue-meta';

import App from './App.vue';
import router from './router.js';

import BaseCard from './components/ui/BaseCard.vue';
import BaseSelect from './components/ui/BaseSelect.vue';

const app = createApp(App);

app.component('base-card', BaseCard);
app.component('base-select', BaseSelect);

app.use(router);

app.mount('#app');
