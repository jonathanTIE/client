import Vue from 'vue';
import Vuex from 'vuex';
import App from './App.vue';
import router from './router';

Vue.config.productionTip = false;
Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    count: 0,
  },
  mutations: {
    increment(state) {
      state.count += 1;
    },
  },
});

new Vue({
  router,
  store,
  render: (h) => h(App),
  data: {
    test: 5,
  },
}).$mount('#app');
