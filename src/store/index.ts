import Vue from 'vue';
import Vuex from 'vuex';
import UserMsg from './userMsg'
import GraphMsg from './graphMsg'

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    UserMsg,
    GraphMsg
  }
});
