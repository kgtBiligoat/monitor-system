import Vue from 'vue';
import Router from 'vue-router';
import Login from '@/views/Login/index.vue';
import Users from '@/views/Users/index.vue'
import UsersMessage from '@/views/Users/components/message/index.vue'

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '',
      component: Login,
    },
    {
      path: '/users',
      component: Users,
      children: [
        {
          path: 'messageMange',
          name: 'message',
          component: UsersMessage
        }
      ]  
    }
  ],
});
