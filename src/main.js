import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./components/index";
import "reset-css";
import mixin from "./mixins/index";
import echarts from "./chart";
import i18n from "./i18n";
import "@/assets/style/main.scss";

import VueWechatTitle from 'vue-wechat-title'

Vue.use(VueWechatTitle)
Vue.config.productionTip = false;
Vue.prototype.$chart = echarts;
// Vue.use(Element,{
//   i18n: (key, value) => i18n.t(key, value)
// })

Vue.prototype.$i18nObj = i18n
Vue.prototype.$lang = i18n.messages[i18n.locale]
Vue.mixin(mixin);
new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount("#app");
