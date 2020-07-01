<template>
  <section>
      <div id="Conteudo1">
        <h1>Pokemon</h1>
        <p>
          Pokémon é uma franquia de mídia que pertence a The Pokémon Company,tendo sido criada por Satoshi Tajiri em 1995.<br>
           Ela é centrada em criaturas ficcionais chamadas "Pokémon", que os seres humanos capturam e os treinam para lutarem um contra o outro como um esporte.<br>
         </p>
        <p>
           A franquia começou com um par de jogos lançados para o Game Boy original, desenvolvidos pela Game Freak e publicados pela Nintendo.<br>
           Atualmente, a franquia se estende em jogos, cartas colecionáveis, série de televisão, além de filmes, mangás e brinquedos.<br>
           Pokémon é a segunda franquia de mídia de jogos mais bem sucedida e lucrativa do mundo, atrás da franquia de Mario que também pertence a Nintendo.<br>
        </p>
      </div>
      <div id="Conteudo2">
        <h1>Jogos mais famoso</h1>
        <p>
          <ul>
            <li>Pokemon Red</li>
            <li>Poekmon Blue</li>
            <li>Pokemon Yellow</li>
            <li>Pokemon Gold</li>
            <li>Pokemon Silver</li>
            <li>Pokemon Ruby</li>
            <li>Pokemon Sapphira</li>
            <li>Pokemon Diamond</li>
            <li>Pokemon Pearl</li>
          </ul>
        </p>
      </div>

  </section>
</template>

<script>
  export default {name: 'Home',  props: {} }
</script>

<style scoped>
section{
  display: flex;
  height: 100%;
  width: 100%;
  padding: 1%;
  background-image:url("../assets/Fundo.png");
}
div{
  background-color:#000000;
  color: #ffffff;
  border-radius: 25px;
  margin-top: 2.5%;
  padding: 2%;
  text-align: justify;
  text-indent: 25px;
  margin-right:5%;
}
#Conteudo1{
  height: 82%;
  width: 25%;
}
#Conteudo2{
  height: 42%;
  width: 70%;
}
</style>
