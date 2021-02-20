import { createStore } from 'vuex';

import animalsModule from './modules/animals';

const store = createStore({
  modules: {
    animals: animalsModule
  },
  state() {
    return {};
  },
  getters: {
    getAnimals(state) {
      return state.animals;
    }
  }
});

export default store;
