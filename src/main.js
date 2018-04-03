// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import VueGeolocation from 'vue-browser-geolocation';
import AsyncComputed from 'vue-async-computed';
import VueResource from 'vue-resource';
import VModal from 'vue-js-modal';
import App from './App';

import { createRouter } from '../src/router/';

Vue.config.productionTip = false;

Vue.use(VueGeolocation);
Vue.use(VueResource);
Vue.use(VModal);
Vue.use(AsyncComputed, {
  errorHandler: false,
},
);

const router = createRouter();

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
});
