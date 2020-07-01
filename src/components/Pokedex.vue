<template>
  <section>
    <div id="Conteudo1">
      <h1>Explicações sobre a página</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    </div>
    <div id="CaixaTabela">
      <p>Quantidade de Pokemon: {{pokedex.length}}</p>
      <table v-show="pokedex.length > 0" id="Tabela">
        <thead>
          <tr>
            <th>Código</th>
            <th>Nome</th>
            <th>Geração</th>
            <th>Tipo</th>
            <th>Genero</th>
            <th>Fraquezas</th>
            <th>Vantagens</th>
            <th>Excluir</th>
          </tr>
        </thead>
         <tfoot>
          <tr>
            <th>Código</th>
            <th>Nome</th>
            <th>Geração</th>
            <th>Tipo</th>
            <th>Genero</th>
            <th>Fraquezas</th>
            <th>Vantagens</th>
            <th>Excluir</th>
          </tr>
        </tfoot>
        <tbody>
          <tr v-for="pokemon in pokedex" :key="pokemon.id">
            <td>{{pokemon.id}}</td>
            <td>{{pokemon.name}}</td>
            <td>{{pokemon.generation}}</td>
            <td>{{pokemon.type}}</td>
            <td>{{pokemon.gender}}</td>
            <td>{{pokemon.weaknesses}}</td>
            <td >{{pokemon.advantage}}</td>
            <td>
              <button type="button" @click="deletePokemon(pokemon)">Excluir</button>
            </td>
          </tr>
        </tbody>
      </table>
      <form @submit.prevent="findById">
        <div>
          <input id="Busca1" type="text" v-model="pokemon.id" placeholder="Digite o código do pokemon que deseja buscar">
        </div>
        <button>Procurar</button>
      </form>
      <div v-show="findPokemon.id">
        <h1>Pokemon encontrado</h1>
        <p>
          Código:{{findPokemon.id}} <br>
          Nome:{{findPokemon.name}} <br>
          Geração:{{findPokemon.generation}} <br>
          Tipo:{{findPokemon.type}} <br>
          Genero:{{findPokemon.gender}}<br>
          Fraquezas:{{findPokemon.weaknesses}}<br>
          Vantagens:{{findPokemon.advantage}}<br>
        </p>
      </div>
    </div>
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
    deletePokemon(pokemon) {
      if(confirm("Deseja excluir o pokemon?!")) {
        PokemonServices.delete(pokemon).then(response => {
          this.listPokemon();
          alert("pokemon excluido com sucesso!");
          return response; //gambi
        });
      }
    },
    findById() {
      // console.log(`id: ${this.client.id}`);
      PokemonServices.findById(this.pokemon).then(response => {
        this.findPokemon = response.data;
      });
    },
  }
} //Fecha tudo

</script>

<style scoped>
section{
  display: flex;
  height: 150%;
  width: 100%;
  padding: 1%;
}
#Conteudo1{
  background-color: #000000;
  color: #ffffff;
  border-color: #000000;
  border-radius: 25px;
  border-width: 8px;
  border-style: solid;
  margin-top: 2.5%;
  padding: 2%;
  text-align: justify;
  text-indent: 25px;
  margin-right:5%;
  height: 85%;
  width: 25%;
}
#CaixaTabela{
  background-color:#000000;
  border-color: #000000;
  color: #ffffff;
  border-radius: 25px;
  margin-top: 2.5%;
  padding: 3%;
  margin-right:5%;
  height: 80%;
  width: 80%;
  text-align: left;
}
#Tabela{
  background-color:#000000;
  border-radius: 15px;
  color:#ffffff;
  height: 50%;
  width: 10%
}
a{
  color: red;
}

td{
  border-style: solid;
  border-width: 2.5px;
  border-color: #ffffff;
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
#Busca1{
  margin-top: 3%;
}
button{
  margin-top: 2%;
  margin-left: 5%;
  background-color:#d50000;
  border-color: ##9b0000;
  border-radius: 20px;
  color:#ffffff;
}
</style>
