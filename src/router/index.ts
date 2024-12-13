import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import TargetView from '../views/TargetView.vue'
import SingleBodyPartView from '@/views/SingleBodyPartView.vue'
import CustomTraining from '@/views/CustomTraining.vue'
import AboutView from '@/views/AboutView.vue'
import NotFound from '@/views/NotFound.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: CustomTraining
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
    path: '/about',
    component: AboutView
  },
  {
    path: '/SingleBodyPart/:bodyPart',
    name: 'SingleBodyPartView',
    component: SingleBodyPartView,
    props: true
  },
  {
    path: '/:unknown(.*)',
    component: NotFound
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
