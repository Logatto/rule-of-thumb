import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import "normalize.css";
import "./filters";
import titleMixin from "./mixins/titleMixin";

import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faThumbsUp,
  faThumbsDown,
  faSearch,
  faBars,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookSquare,
  faTwitter,
  faWikipediaW,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(
  faThumbsUp,
  faThumbsDown,
  faSearch,
  faBars,
  faFacebookSquare,
  faTwitter,
  faWikipediaW
);

Vue.component("fa", FontAwesomeIcon);
Vue.mixin(titleMixin);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
