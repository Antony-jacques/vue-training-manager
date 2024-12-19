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
    component: ()=> import('@/views/CustomTraining.vue')
  },
  {
    path: '/target',
    name: 'Target',
    component: ()=> import('@/views/TargetView.vue'),
    meta: {
      title: 'Targeted muscle'
    }
  },
  {
    path: '/my-training',
    name: 'MyTraining',
    component: ()=> import('@/views/CustomTraining.vue'),
    beforeEnter(to, from){
      console.log('TODO: check if user is connected')
    }
  },
  {
    path: '/about',
    component: ()=> import('@/views/AboutView.vue'),
    meta: {
      title: 'About Page'
    }
  },
  {
    path: '/SingleBodyPart/:bodyPart',
    name: 'SingleBodyPartView',
    component: ()=>import('@/views/SingleBodyPartView.vue'),
    props: true,
  },
  {
    path: '/:unknown(.*)',
    component: NotFound
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return {
        el: to.hash,
        top: 120,
        behavior: 'smooth'
      };
    }
    return {
      top: 0,
    };
  },
});

router.beforeEach((to, from) => {
  console.log({
    to: to.path,
    from: from.path,
  });
});

export default router;
