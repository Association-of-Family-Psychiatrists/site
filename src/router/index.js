import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '@views/HomeView.vue'
import AboutView from '@views/AboutView.vue'
import PlaceholderView from '@views/PlaceholderView.vue'
import ResourcesView from '@views/ResourcesView.vue'
import MemberView from '@views/MemberView.vue'

const router = createRouter({
  history: createWebHashHistory(),
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
      // component: () => import('../views/AboutView.vue'),
      component: AboutView,
    },
    {
      path: '/resources',
      name: 'resources',
      component: ResourcesView,
    },
    {
      path: '/members',
      name: 'members',
      component: MemberView,
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'NotFound',
      component: PlaceholderView,
    },
  ],
})

export default router
