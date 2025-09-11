import { createRouter, createWebHistory, createMemoryHistory } from 'vue-router'
import HomeView from '@views/HomeView.vue'
import AboutView from '@views/AboutView.vue'
import PlaceholderView from '@views/PlaceholderView.vue'
import MembershipConfirmationView from '@views/MembershipConfirmationView.vue'
import ResourcesView from '@views/ResourcesView.vue'
import MemberView from '@views/MemberView.vue'
import EventsView from '@views/EventsView.vue'
import ContactView from '@views/ContactView.vue'
import ThankYouView from '@views/ThankYouView.vue'

export const routes = [
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
    children: [
      {
        path: 'listserv',
        name: 'resources-listserv',
        component: () => import('@views/resources/ListservView.vue'),
      },
      {
        path: 'award-recognition',
        name: 'resources-award-recognition',
        component: () => import('@views/resources/AwardRecognitionView.vue'),
      },
      {
        path: 'family-treatment',
        name: 'resources-family-treatment',
        component: () => import('@views/resources/FamilyTreatmentView.vue'),
      },
      {
        path: 'articles',
        name: 'resources-articles',
        component: () => import('@views/resources/ArticlesView.vue'),
      },
      {
        path: 'web',
        name: 'resources-web',
        component: () => import('@views/resources/WebResourcesView.vue'),
      },
      {
        path: 'child-adolescent',
        name: 'resources-child-adolescent',
        component: () => import('@views/resources/ChildAdolescentView.vue'),
        children: [
          {
            path: 'aacap',
            name: 'resources-child-adolescent-aacap',
            component: () => import('@views/resources/child-adolescent/AACAPView.vue'),
          },
          {
            path: 'family-centered',
            name: 'resources-child-adolescent-family-centered',
            component: () => import('@views/resources/child-adolescent/FamilyCenteredView.vue'),
          },
        ],
      },
      {
        path: 'couples-adults',
        name: 'resources-couples-adults',
        component: () => import('@views/resources/CouplesAdultsView.vue'),
        children: [
          {
            path: 'psychiatric-resources',
            name: 'resources-couples-adults-psychiatric-resources',
            component: () => import('@views/resources/couples-adults/PsychiatricResourcesView.vue'),
          },
          {
            path: 'books',
            name: 'resources-couples-adults-books',
            component: () => import('@views/resources/couples-adults/BooksView.vue'),
          },
        ],
      },
      {
        path: 'culture-family',
        name: 'resources-culture-family',
        component: () => import('@views/resources/CultureFamilyView.vue'),
        children: [
          {
            path: 'resources',
            name: 'resources-culture-family-resources',
            component: () =>
              import('@views/resources/culture-family/CultureFamilyResourcesView.vue'),
          },
          {
            path: 'cultural-anthropology',
            name: 'resources-culture-family-cultural-anthropology',
            component: () => import('@views/resources/culture-family/CulturalAnthropologyView.vue'),
          },
        ],
      },
      {
        path: 'training',
        name: 'resources-training',
        component: () => import('@views/resources/TrainingView.vue'),
        children: [
          {
            path: 'curriculum-in-adult-psychiatric-residency-training',
            name: 'resources-training-curriculum',
            component: () =>
              import(
                '@views/resources/training/CurriculumInAdultPsychiatricResidencyTrainingView.vue'
              ),
          },
          {
            path: 'training-programs-in-family-psychiatry',
            name: 'resources-training-programs',
            component: () =>
              import('@views/resources/training/TrainingProgramsInFamilyPsychiatryView.vue'),
          },
        ],
      },
    ],
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
    path: '/thank-you',
    name: 'thank-you',
    component: ThankYouView,
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
]

// Create router instance for client-side use
const router = createRouter({
  history: import.meta.env.SSR ? createMemoryHistory() : createWebHistory(),
  routes,
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
