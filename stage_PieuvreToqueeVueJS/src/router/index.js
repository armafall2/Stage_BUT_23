import { createRouter, createWebHistory } from 'vue-router'
import PageAccueil from '/src/view/v-accueil.vue'
import PageDevis from '/src/view/v-devis.vue'
import madameLoick from '/src/view/easterEgg.vue'
import testPage from '/src/view/v-test.vue'
import PageCalendrier from '/src/view/v-calendrier.vue'

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
    },
    {
      path : '/madameLoick',
      name: 'easterEgg',
      component: madameLoick
    },
    {
      path : '/test',
      name : 'Page test',
      component: testPage

    },
    {
      path : '/calendrier',
      name : 'Page Calendrier',
      component: PageCalendrier
    }
  ]
})

export default router
