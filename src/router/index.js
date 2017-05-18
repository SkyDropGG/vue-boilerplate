import Vue from 'vue'
import Router from 'vue-router'

import Main from '../components/main/main.vue'

Vue.use(Router);

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main
    }
  ]
});

export default router;
