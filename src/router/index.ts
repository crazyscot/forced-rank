import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import SetupView from '@/views/SetupView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
    },
    {
      path: '/setup',
      name: 'setup',
      component: SetupView,
      props: { items: ['foo1', 'bar2'] }, // TODO to become a list of three empty strings ?
      // TODO: How to bind this to a variable at top level?
      // HERE: See https://vuejs.org/guide/scaling-up/state-management !
    },
  ],
})

export default router
