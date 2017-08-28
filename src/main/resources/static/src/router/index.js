import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home'
import Login from '@/pages/Login'
import Signup from '@/pages/Signup'
import CreateArticle from '@/pages/CreateArticle'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    }, {
      path: '/login',
      name: 'Login',
      component: Login
    }, {
      path: '/signup',
      name: 'Signup',
      component: Signup
    }, {
      path: '/createArticle',
      name: 'CreateArticle',
      component: CreateArticle
    }
  ]
})
