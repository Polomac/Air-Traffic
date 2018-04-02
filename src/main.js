// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import Vuetify from 'vuetify';
import VModal from 'vue-js-modal';
import App from './App';

import 'vuetify/dist/vuetify.min.css';

import { createRouter } from '../src/router/';

Vue.config.productionTip = false;


Vue.use(Vuetify)

const router = createRouter();

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
});
