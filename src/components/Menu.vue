<template>
  <div id="Menu">
    <nav>
      <div>
        <img id="LogoMenu" src="../assets/PokebolaMenu.png">
      </div>
      <div id="Links">
        <a href="/home">Home</a>
        <a href="/about">About</a>
        <a href="/cadastro">Cadastrar</a>
        <a href="/pokedex">Pokedex</a>
      </div>
    </nav>
  </div>
</template>

<script>
  export default {name: 'Menu',  props: {} }
</script>

<style scoped>
*{
  padding: 0;
  margin: 0;
}
nav{
  height: 10%;
  border-radius: 15px;
  background-color: #000000;
  padding: 0.7%;
  display: flex;
  justify-content: space-between;
}
#LogoMenu{
  margin: -4.5px;
  margin-left: 20.5px;
  height: 45px;
  width: 50px;
}
#Links{
  padding: 5px;
  text-align: right;
}
a{
  padding-left: 10px;
  color: #ffffff;
  text-decoration: none;
}
</style>
