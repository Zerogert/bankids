import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'
import { createStore } from 'vuex'

const routes = [  
  {
    path: '/create-account',
    name: 'create-account',
    component: () => import('./components/CreateAccount.vue')
  },
  {
    path: '/sign-in',
    name: 'sign-in',
    component: () => import('./components/SignIn.vue')
  },
  {
    path: '/',
    name: 'main',
    component: () => import('./components/MainPage.vue')
  },
  {
    path: '/courses',
    name: 'courses',
    component: () => import('./components/CoursesList.vue')
  },
  {
    path: '/course-create',
    name: 'course-create',
    component: () => import('./components/CourseCreate.vue')
  },
  {
    path: '/course-view/:id',
    name: 'course-view',
    props: true,
    component: () => import('./components/CoursePage.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})


const store = createStore({
  state () {
    return {
      user: null,
      token: null
    }
  },
  mutations: {
    setUser(state, user) {
      state.user = user;
    },
    setToken(state, token) {
      state.token = token;
    },
  },
  getters: {
    isLoggedIn(state) {
      return !!state.token;
    },
  },
})


createApp(App).use(router).use(store).mount('#app')
