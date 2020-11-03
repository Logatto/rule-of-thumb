import Vue from "vue";

import * as timeago from "timeago.js";

Vue.filter("timeago", (value) => {
  return timeago.format(value);
});
