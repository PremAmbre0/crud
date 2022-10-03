import Vue from "vue";
import Vuex from "vuex";
import crud from "./modules/Crud.js";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    showDialogForm: false,
  },
  mutations: {
    openDialogForm(state) {
      state.showDialogForm = true;
    },
    closeDialogForm(state) {
      state.showDialogForm = false;
    },
  },
  getters: {
    showDialogForm: (state) => state.showDialogForm,
  },
  actions: {
    apiCall(context, config) {
      return new Promise((resolve, reject) => {
        axios({
          ...config,
        })
          .then((response) => {
            let data = response.data;
            resolve(data);
          })
          .catch((err) => {
            reject(err);
          });
      })
    },
  },
  modules: {
    crud
  },
});
