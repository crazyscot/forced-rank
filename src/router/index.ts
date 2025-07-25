import { createRouter, createWebHashHistory } from 'vue-router'
import SetupView from '@/views/SetupView.vue'
import AboutView from '@/views/AboutView.vue'
import AboutMoreView from '@/views/AboutMoreView.vue'
import QuestionsView from '@/views/QuestionsView.vue'
import ResultsView from '@/views/ResultsView.vue'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: AboutView,
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      // component: () => import('../views/AboutView.vue'),
    },
    {
      path: '/about_more',
      name: 'about_more',
      component: AboutMoreView,
    },
    {
      path: '/setup',
      name: 'setup',
      component: SetupView,
    },
    {
      path: '/questions',
      name: 'questions',
      component: QuestionsView,
    },
    {
      path: '/results',
      name: 'results',
      component: ResultsView,
    },
  ],
  scrollBehavior() {
    return { top: 0 }
  },
})

export default router
