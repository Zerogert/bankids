import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {
        path: '/sign-in',
        name: 'sign-in',
        component: () => import('./components/SignIn.vue')
      },
      {
        path: '/game',
        name: 'game',
        component: () => import('./components/GamePage.vue')
      }
  ]

  const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
  })
  

createApp(App).use(router).mount('#app')
