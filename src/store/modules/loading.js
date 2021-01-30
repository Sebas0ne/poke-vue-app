import * as types from "@/store/mutation-types";

const getters = {
  showLoading: state => state.showLoading
};

const mutations = {
  [types.SHOW_LOADING](state, value) {
    state.showLoading = value;
  }
};
const actions = {
  hideLoading({ commit }) {
    commit(types.SHOW_LOADING, false);
  }
};
const state = {
  showLoading: false
};
export default {
  state,
  getters,
  actions,
  mutations
};
