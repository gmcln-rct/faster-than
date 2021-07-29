import { createApp } from 'vue';

import App from './App.vue';
import router from './router.js';

import BaseCard from './components/ui/BaseCard.vue';
import BaseSelect from './components/ui/BaseSelect.vue';

import VueGtag from 'vue-gtag';

const app = createApp(App);

app.component('base-card', BaseCard);
app.component('base-select', BaseSelect);

app.use(router);

app.use(VueGtag, {
  config: { id: 'G-FDFF33B2C1' }
});

router.isReady().then(function() {
  app.mount('#app');
});
