import Vue from 'vue';
import Vuex from 'vuex';

import blogs from './stores/blogs.js';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    blogs,
  },
});