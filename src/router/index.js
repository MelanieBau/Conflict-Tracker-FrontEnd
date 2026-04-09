import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ConflictsView from '../views/ConflictsView.vue'
import ConflictDetailView from '../views/ConflictDetailView.vue'
import CreateConflictView from '../views/CreateConflictView.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: HomeView
    },
    {
      //pagina principal (lista de conflictos)
      path: '/conflicts', 
      component: ConflictsView
    },
    {
      //pagina principal (detalle de conflicto)
      path: '/conflicts/:id',
      component: ConflictDetailView
    },
    {
      //pagina principal (crear nuevo conflicto)
      path: '/create', 
      component: CreateConflictView
    }
  ]
})

export default router