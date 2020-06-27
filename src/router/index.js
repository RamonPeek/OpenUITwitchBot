import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Dashboard from '../views/dashboard/dashboard.vue'
import Commands from '../views/commands/commands.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/placeholder',
    name: 'Home',
    component: Home
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard
  },
  {
    path: '/commands',
    name: 'Commands',
    component: Commands
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
