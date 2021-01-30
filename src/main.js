import Vue from "vue";
import App from "./components/App.vue";
import "./plugins/axios";
import "./registerServiceWorker";
import "./components";
import i18n from "./plugins/i18n";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import "roboto-fontface/css/roboto/roboto-fontface.css";
import "@mdi/font/css/materialdesignicons.css";

Vue.config.productionTip = false;

new Vue({
  router,
  i18n,
  store,
  vuetify,
  ...App
});
