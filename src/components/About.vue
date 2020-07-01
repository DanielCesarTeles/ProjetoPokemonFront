<template>
  <section>
      <div id="Conteudo1">
        <h1>Sobre mim</h1>
        <p>Meu nome é Daniel Teles, tenho 18 anos e esse é meu primeiro site, eu fiz esse site para o projeto final da turma de web III, eu escolhi o tema pokemon, por já ter uma afinidade com o tema, já que sou um grande fã dos jogos, conheci a franquia pelo Pokemon Fire Red, mas não no Gameboy Advenced, e sim por emuladores</p>
        <p>A API desse site foi feita com as linguagens Java e Springboot, cujas mesmas aprendi na cadeira web III, que faz parte do curso técnico em informática.</p>
      </div>
      <div id="Conteudo2">
        <h1>Processo de criação</h1>
          <p>A parte mais tranquila de toda a criação do projeto foi a parte da ideia, pelo fato de ter sido muito fácil de pensar em pokemon.</p>
          <p>Depois disso veio a criação da API, que foi um pouco trabalhoso, mas nada muito complicado, já que essa é a minha parte favorita do processo.</p>
          <p>E por fim, a parte de front, essa foi sem dúvida a parte mais trabalhosa do processo, porque eu não tenho uma boa noção de design, e também nunca tinha feito front usando Vuejs, só tinha familiaridade com HTML e CSS puros.</p>
        </div>

  </section>
</template>

<script>
  export default {name: 'About',  props: {} }
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
  /* background-image: url("../assets/FundoFormulario.jpg"); */
  background-repeat: no-repeat;
  background-position: left;
  background-size: 50%;
  height: 42%;
  width: 70%;
}
</style>
