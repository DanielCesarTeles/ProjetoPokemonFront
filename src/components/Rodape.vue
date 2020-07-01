<template>

  <footer id="Rodape">
    <div>
      <img id="LogoMenu">
    </div>
    <div id="Contato">
      <ul>
        <li><a href="https://github.com/DanielCesarTeles">Github</a></li>
        <li>Daniel.cesarteles@gmail.com</li>
      </ul>
    </div>
  </footer>

</template>

<script>
  export default {name: 'Rodape',  props: {} }
</script>

<style scoped>
*{
  padding: 0;
  margin: 0;
}
#Rodape{
  height: 8%;
  border-radius: 15px;
  background-color: #000000;
  padding: 0.7%;
  display: flex;
  justify-content: space-between;
}
#LogoMenu{
  margin: -4.5px;
  margin-top: 5%;
  margin-left: 20.5px;
  height: 45px;
  width: 50px;
}
#Contato{
  padding: 5px;
  text-align: right;
  padding-right: 2%;
  color:#ffffff;
}
a{
  padding-left: 10px;
  color: #ffffff;
  text-decoration: none;
  }
ul{
  list-style: none;
}
</style>
