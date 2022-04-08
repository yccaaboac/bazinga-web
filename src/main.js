import Vue from "vue";
import router from "./router/routers";
import App from "./App.vue";
import Element from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import "@fortawesome/fontawesome-free/css/all.css";
import store from "./store";

Vue.use(Element);

import "./assets/styles/index.scss";
Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
  router,
  store,
}).$mount("#app");
