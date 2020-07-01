<template>
  <section>
    <div id="Conteudo1">
      <h1>Cadastro</h1>
      <p>Esta pagina foi criada para que o usuaro possa cadastrar os pokemon.
        todos os pokemon cadastrados iram para a <a href="/pokedex">Pokedex</a> assim como no jogo.
      </p>
      <p>
        O Pokédex no mundo fictício dos Pokémon é um dispositivo eletrônico que intervém nos videogames e nas séries de anime.
         Nos jogos, sua função é registrar os dados de um Pokémon. No manga e no anime, o Pokédex é uma enciclopédia eletrônica, que fornece ao treinador informações sobre um pokémon que é desconhecido simplesmente expondo o Pokédex na frente dos pokémon.
      </p>
    </div>
    <form @submit.prevent="saveAndUpdatePokemon">
      <div id="Conteudo2">
        <h1>Cadastro de pokemon</h1>
        <input type="text" v-model="pokemon.name" placeholder="Digite o nome do pokemon">
        <input type="text" v-model="pokemon.generation" placeholder="Digite a geração do pokemon">
        <input type="text" v-model="pokemon.type" placeholder="Digite o tipo do pokemon">
        <input type="text" v-model="pokemon.gender" placeholder="Digite ogenero do pokemon">
        <input type="text" v-model="pokemon.weaknesses" placeholder="Digite as fraquezas do pokemon">
        <input type="text" v-model="pokemon.advantage" placeholder="Digite as vantagens do pokemon">
        <br>
        <button>Salvar</button>
        <br>
        <input type="text" v-model="pokemon.id" placeholder="Digite o Id do pokemon se desejar alterar">
        <br>
        <button v-show="pokemon.id" @click="cancelUpdate">Cancelar</button>
        <button v-show="pokemon.id">Alterar</button>
      </div>
    </form>
  </section>
</template>

<script>

import PokemonServices from '../services/pokemonservices'

  export default {
    data() {
      return {
        pokemon : { id : '', name: '' ,generation : '' ,type : '',gender : '', weaknesses : '', advantage : ''},
        findPokemon : {id : '', name: '' ,generation : '' ,type : '',gender : '', weaknesses : '', advantage : ''},
        pokedex : []  }
    },
      name: 'CadastroPokemon',
      props: {
      },
      mounted () {
      this.listPokemon();
    },
    methods : {
      listPokemon() {
        PokemonServices.findAll().then(response =>{this.pokedex = response.data;
          }
        );
      },
    saveAndUpdatePokemon() {
      if(!this.pokemon.id) {
        //salvar
        PokemonServices.save(this.pokemon).then(response => {
          this.listPokemon();
          this.pokemon = {};
          alert("Pokemon adicionado com sucesso!");
          return response; //gambi
        });
      } else {
        //atualizar
        PokemonServices.update(this.pokemon).then(response => {
          this.listPokemon();
          this.pokemon = {};
          alert("Pokemon atualizado com sucesso!");
          return response; //gambi by Thiago Cury
        });
      }
    },
    updatePokemon(pokemon) {
      this.pokemon = pokemon;
    },
    cancelUpdate() {
      this.pokemon = {};
      alert("Alteração cancelada!");
    }
  }
} //Fecha tudo

</script>

<style scoped>
section{
  display: flex;
  height: 100%;
  width: 100%;
  padding: 1%;
  background-image:url("../assets/Fundo.png");
}
#Conteudo1{
  background-color: #000000;
  color: #ffffff;
  border-radius: 25px;
  margin-top: 2.5%;
  padding: 2%;
  text-align: justify;
  text-indent: 25px;
  margin-right:5%;
  height: 85%;
  width: 25%;
}
#Conteudo2{
  background-color: #000000;
  color: #ffffff;
  background-image: url("../assets/FundoFormulario.gif");
  background-repeat: no-repeat;
  background-position: right;
  border-radius: 25px;
  margin-top: 2.5%;
  padding: 3%;
  margin-right:5%;
  text-align: left;
  height: 55%;
  width: 70%;
}
h1{
  margin-left: 2%;
}

input{
  margin-left: 15%;
  margin:0.5%;
  width: 50%;
  text-align: center;
  background-color:#ffffff;
  border-color: #ffffff;
  border-radius: 25px;
}
button{
  margin-top: 2%;
  margin-bottom: 2%;
  margin-left: 5%;
  background-color:#d50000;
  border-color: ##9b0000;
  border-radius: 20px;
  color:#ffffff;
}
</style>
