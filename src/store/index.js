import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    defaultHeight: 0,
    rate: 1,
    loadCount: 0,
    theme: "dark",
    isMobile: true,
    lang: localStorage.lang || 'en',
  },
  mutations: {
    setIsMobile(state, isMobile) {
      state.isMobile = isMobile;
    },
    setHeight(state, height) {
      state.defaultHeight = height;
    },
    setRate(state, rate) {
      state.rate = rate;
    },
    increaseLoadCount(state) {
      state.loadCount++;
    },
    setTheme(state, theme) {
      state.theme = theme;
    },
  },
  actions: {},
  modules: {}
});
