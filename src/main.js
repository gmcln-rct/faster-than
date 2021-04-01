import { createApp } from 'vue';
import {
  createMetaManager,
  defaultConfig,
  resolveOption,
  useMeta
} from 'vue-meta';

import App from './App.vue';
import router from './router.js';

import BaseCard from './components/ui/BaseCard.vue';
import BaseSelect from './components/ui/BaseSelect.vue';

const app = createApp(App);

const decisionMaker5000000 = resolveOption((prevValue, context) => {
  const { uid = 0 } = context.vm || {};
  if (!prevValue || prevValue < uid) {
    return uid;
  }
});

const metaManager = createMetaManager(
  {
    ...defaultConfig,
    esi: {
      group: true,
      namespaced: true,
      attributes: ['src', 'test', 'text']
    }
  },
  decisionMaker5000000
);

useMeta(
  {
    og: {
      something: 'test'
    }
  },
  metaManager
);

app.component('base-card', BaseCard);
app.component('base-select', BaseSelect);

app.use(router);
app.use(metaManager);

app.mount('#app');
