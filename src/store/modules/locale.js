import * as types from "@/store/mutation-types";
import store from "@/store";
import i18n from "@/plugins/i18n";
import { loadLocale } from "@/plugins/veevalidate";

const getters = {
  locale: state => state.locale
};

const actions = {
  setLocale({ commit }, payload) {
    store.commit(types.SUCCESS, null);
    store.commit(types.ERROR, null);
    i18n.locale = payload;
    loadLocale(payload);
    window.localStorage.setItem("locale", JSON.stringify(payload));
    commit(types.SET_LOCALE, payload);
  }
};

const mutations = {
  [types.SET_LOCALE](state, value) {
    state.locale = value;
  }
};

const state = {
  locale:
    JSON.parse(localStorage.getItem("locale")) ||
    /*  navigator.language.slice(0, 2) || */
    "es"
};
export default {
  state,
  getters,
  actions,
  mutations
};
