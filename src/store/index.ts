import Vue from 'vue';
import Vuex from 'vuex';
import UserMsg from './userMsg'

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    UserMsg
  }
});
