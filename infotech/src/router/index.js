import Vue from 'vue'
import VueRouter from 'vue-router'
import HelloWorld from "@/views/HelloWorld";
import NousJoindre from "@/views/NousJoindre";
import Register from "@/views/Register";
import Login from "@/views/Login";

Vue.use(VueRouter)

const routes = [
  {
    path: '/home',
    name: 'Accueil',
    component: HelloWorld
  },
  {
    path: '/',
    name: 'Home',
    component: HelloWorld
  },
  {
    path: '/contact',
    name: 'NousJoindre',
    component: NousJoindre
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
