import { createRouter, createWebHistory } from 'vue-router'
import PageAccueil from '@/view/v-accueil.vue'
import PageDevis from '@/view/v-devis.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Accueil',
      component: PageAccueil
    },
    {
      path: '/devis',
      name: 'Devis',
      component: PageDevis
    }
  ]
})

export default router
