import Vue from 'vue';
import Router from 'vue-router';
import Login from '@/views/Login/index.vue';
import Users from '@/views/Users/index.vue'
import UsersMessage from '@/views/Users/components/message/index.vue'
import ShowData from '@/views/Users/components/showData/index.vue'
import GetData from '@/views/Users/components/getData/index.vue'

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
        }, 
        {
          path: 'getData',
          name: 'getData',
          component: GetData
        },
        {
          path: 'showData',
          name: 'showData',
          component: ShowData
        }
      ]  
    }
  ],
});
