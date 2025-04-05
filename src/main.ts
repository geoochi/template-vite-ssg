import { ViteSSG } from 'vite-ssg'
import routes from '~pages'
import App from './App.vue'
import { createPinia } from 'pinia'
import { useUserStore } from './store'

export const createApp = ViteSSG(
  App,
  {
    base: import.meta.env.BASE_URL,
    routes,
  },
  ({ app, router, initialState }) => {
    const pinia = createPinia()
    app.use(pinia)

    pinia.state.value = initialState?.pinia || {}

    router.beforeEach((to, from, next) => {
      const userStore = useUserStore(pinia)
      userStore.initialize()
      next()
    })
  }
)
