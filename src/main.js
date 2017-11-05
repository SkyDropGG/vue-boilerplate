import Vue from 'vue';
import Core from './core/core.vue';
import router from './router';
import store from './store';

import './shared/http';

Vue.config.productionTip = false;

new Vue({
  el: '#app',
  store,
  router,
  template: '<Core/>',
  components: {Core}
});
