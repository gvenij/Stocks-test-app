import Vue from 'vue';
import VueResource from 'vue-resource';
import VueRouter from 'vue-router';

import App from './App.vue';
import {routes} from "./routes";
import store from "./store/store";

Vue.use(VueResource);
Vue.use(VueRouter);

Vue.http.options.root = 'https://vue-http-1286b.firebaseio.com/vue-stocks';

Vue.filter('currency', (value) => {
  return '$' + value.toLocaleString();
});

const router = new VueRouter({
  mode: 'history',
  routes
});

new Vue({
  el: '#app',
  router,
  store ,
  render: h => h(App)
});
