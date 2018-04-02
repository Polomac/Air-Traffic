import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);
// eslint-disable-next-line
export function createRouter() {
  return new VueRouter({
    mode: 'history',
    routes: [{
      path: '/',
      component: () => import(/* webpackChunkName: "home" */ '../components/Home.vue'),
    },
    {
      path: '/home',
      component: () => import(/* webpackChunkName: "home" */ '../components/Home.vue'),
    }],
  });
}
