import Vue from 'vue';
import VueRouter from 'vue-router';
import VueMaterial from 'vue-material';
import AppBackend from '../views/AppBackend.vue';
import AppChecklist from '../views/AppChecklist.vue';

Vue.use(VueMaterial);
Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: AppBackend,
  },
  {
    path: '/backend',
    name: 'Backend',
    component: AppBackend,
  },
  {
    path: '/checklist',
    name: 'Checklist',
    component: AppChecklist,
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
  },
];

const router = new VueRouter({
  // mode: 'history',
  mode: 'hash',
  // base: '/client/',
  base: process.env.BASE_URL,
  routes,
});

export default router;
