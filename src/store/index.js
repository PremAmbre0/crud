import Vue from "vue";
import Vuex from "vuex";
import crud from "./modules/Crud.js"

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    crud
  },
});
