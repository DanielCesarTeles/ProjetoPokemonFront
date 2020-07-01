<template>
  <div id="app">

    <Menu/>
    <router-view></router-view>

    <Rodape/>

  </div>
</template>

<script>
import Menu from './components/Menu.vue'
import Rodape from './components/Rodape.vue'

export default {
    name: 'App',
    components: {Menu, Rodape}
}

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 98%;
  width: 99%;
  position: absolute;
}
</style>
