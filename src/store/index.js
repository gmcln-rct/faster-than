import { createStore } from 'vuex';

import animalModule from './modules/animals';

const store = createStore({
  modules: {
    animals: animalModule
  },
  state() {
    return {};
  },
  getters: {}
});

export default store;
