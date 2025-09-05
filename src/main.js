import './assets/main.css'

import { ViteSSG } from 'vite-ssg'
import { createPinia } from 'pinia'
import { createHead } from '@unhead/vue'

import App from './App.vue'
import { routes } from './router'

export const createApp = ViteSSG(
  App,
  { routes },
  ({ app, router, routes, isClient, initialState }) => {
    const pinia = createPinia()
    const head = createHead()

    app.use(pinia)
    app.use(head)

    if (import.meta.env.SSR) {
      // Set initial state during server side
      initialState.pinia = pinia.state.value
    } else {
      // Restore the initial state on the client side
      pinia.state.value = initialState.pinia || {}
    }
  },
)
