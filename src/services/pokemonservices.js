import { http } from './api'

export default {

  findAll: () => {
    return http.get('pokedex');
  },

  findById: (pokemon) => {
    return http.get(`pokedex/${pokemon.id}`, { data: pokemon });
  },

  save: (pokemon) => { //vai vir o objeto client sem ID
    return http.post('pokedex', pokemon);
  },

  delete: (pokemon) => {
    return http.delete(`pokedex/${pokemon.id}`, { data: pokemon });
  },

  update: (pokemon) => { //vai vir o objeto client com ID
    return http.put(`pokedex`, pokemon);
  }

}
