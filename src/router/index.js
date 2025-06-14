import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '@views/HomeView.vue'
import AboutView from '@views/AboutView.vue'
import PlaceholderView from '@views/PlaceholderView.vue'
import MembershipConfirmationView from '@views/MembershipConfirmationView.vue'
import ResourcesView from '@views/ResourcesView.vue'
import MemberView from '@views/MemberView.vue'
import EventsView from '@views/EventsView.vue'
import ContactView from '@views/ContactView.vue'

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
      path: '/events',
      name: 'events',
      component: EventsView,
    },
    {
      path: '/contact',
      name: 'contact',
      component: ContactView,
    },
    {
      path: '/confirmation',
      name: 'confirmation',
      component: () => import('@views/MembershipConfirmationView.vue'),
    },
    {
      path: '/membership',
      name: 'membership',
      component: () => import('@views/MembershipView.vue'),
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'NotFound',
      component: () => import('@views/PlaceholderView.vue'),
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth',
      }
    }
    return { top: 0 }
  },
})

export default router
