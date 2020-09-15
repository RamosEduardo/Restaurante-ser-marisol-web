import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/Pages/Home'
import Sobre from '@/Pages/Sobre'
import Cardapio from '@/Pages/Cardapio'
import Eventos from '@/Pages/Eventos'
import Contato from '@/Pages/Contato'
import FotosCasa from '@/Pages/FotosCasa'
import Agenda from '@/Pages/Agenda'

Vue.use(Router)

const routes = [
  {
    name: 'Home',
    path: '/',
    component: Home
  },
  {
    name: 'Sobre',
    path: '/sobre',
    component: Sobre
  },
  {
    name: 'Cardapio',
    path: '/cardapio',
    component: Cardapio
  },
  {
    name: 'Eventos',
    path: '/eventos',
    component: Eventos
  },
  {
    name: 'Contato',
    path: '/contato',
    component: Contato
  },
  {
    name: 'FotosCasa',
    path: '/fotos-casa',
    component: FotosCasa
  },
  {
    name: 'Agenda',
    path: '/agenda',
    component: Agenda
  },
]

const router = new Router({
  routes
})

export default router
