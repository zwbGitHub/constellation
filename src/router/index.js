import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'layout',
    component: () => import('../views/Layout.vue'),
    redirect:'/today',
    children: [
      {
        path: '/today',
        name: 'today',
        component: () => import('../views/Today.vue')
      },
      {
        path: '/tomorrow',
        name: 'tomorrow',
        component: () => import('../views/Tomorrow.vue')
      },
      {
        path: '/week',
        name: 'week',
        component: () => import('../views/Week.vue')
      },
      {
        path: '/month',
        name: 'month',
        component: () => import('../views/Month.vue')
      },
      {
        path: '/year',
        name: 'year',
        component: () => import('../views/Year.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
