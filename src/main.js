import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'

import Home from './components/Home.vue'
import About from './components/About.vue'
import CadastroPokemon from './components/CadastroPokemon.vue'
import Pokedex from './components/Pokedex.vue'

Vue.config.productionTip = false

Vue.use(VueRouter);

const router = new VueRouter({
  mode : 'history',
  routes :[
    {
      path : '/',
      redirect : '/home',
      component : Home
  },
  {
      path : '/home',
      component : Home
  },
  {
    path : '/about',
    component : About
  },{
    path : '/cadastro',
    component : CadastroPokemon
  },{
    path : '/pokedex',
    component : Pokedex
  }
]
}
)

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
