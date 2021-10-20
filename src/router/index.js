import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Layout',
    component: () => import('../views/Layout.vue'),
    children: [
      {
        path: '/day',
        name: 'Day',
        component: () => import('../views/Day.vue')
      },
      {
        path: '/tomorrow',
        name: 'Tomorrow',
        component: () => import('../views/Tomorrow.vue')
      },
      {
        path: '/week',
        name: 'Week',
        component: () => import('../views/Week.vue')
      },
      {
        path: '/month',
        name: 'Month',
        component: () => import('../views/Month.vue')
      },
      {
        path: '/year',
        name: 'Year',
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
