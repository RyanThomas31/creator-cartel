import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import './style.css'

// Import components
import HomePage from './components/HomePage.vue'
import CategoryLanding from './components/CategoryLanding.vue'

// Create router
const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage
    },
    {
      path: '/category/:category',
      name: 'category',
      component: CategoryLanding
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    return { top: 0 }
  }
})

const app = createApp(App)
app.use(router)
app.mount('#app')
