import axios from 'axios'

export const http = axios.create({
  baseURL : ' https://projeto-pokemon.herokuapp.com/'
});
