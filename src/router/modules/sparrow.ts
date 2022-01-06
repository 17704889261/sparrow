import type { RouteConfig } from 'vue-router'
import DefaultLayout from '@/layout/index.vue'

const routes: Array<RouteConfig> = [
  {
    path: '/sparrow',
    name: 'Sparrow',
    component: DefaultLayout,
    children: [
      {
        path: 'bar',
        name: 'Bar',
        component: () => import(/* webpackChunkName: "sparrow" */ '@/views/bar/index.vue')
      }
    ]
  }
]

export default routes
