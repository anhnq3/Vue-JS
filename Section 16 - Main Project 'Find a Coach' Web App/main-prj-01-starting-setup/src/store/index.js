import { createStore } from 'vuex';
import coachesModules from './modules/coaches/index.js';
// import requestsModules from './modules/requests/index.js';

const store = createStore({
  // namespaces: true,
  modules: {
    coaches: coachesModules,
    // requests: requestsModules,
  },
  //   state() {},
  //   mutations: {},
  //   actions: {},
  //   getters: {},
});

export default store;
