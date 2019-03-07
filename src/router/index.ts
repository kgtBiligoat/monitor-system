import Vue from 'vue';
import Router from 'vue-router';
import Login from '@/views/Login/index.vue';
import Users from '@/views/Users/index.vue'

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '',
      component: Login,
      children: [
        {
          path: '/users',
          component: Users
        }
      ]
    },
  ],
});
