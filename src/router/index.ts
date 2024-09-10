import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import TargetView from '../views/TargetView.vue'
import SingleBodyPartView from '@/views/SingleBodyPartView.vue'
import CustomTraining from '@/views/CustomTraining.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/target',
    name: 'Target',
    component: TargetView
  },
  {
    path: '/my-training',
    name: 'MyTraining',
    component: CustomTraining
  },
  {
    path: '/SingleBodyPart/:bodyPart',
    name: 'SingleBodyPartView',
    component: SingleBodyPartView,
    props: true
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
