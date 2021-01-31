import Vue from "vue";
import Vuex from "vuex";
import app from "./modules/app.js";
import loading from "./modules/loading.js";
import locale from "./modules/locale.js";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    app,
    loading,
    locale
  }
});
