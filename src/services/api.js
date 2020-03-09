import axios from 'axios';

//instanciei a API para ser consumida pela aplicação 
const api = axios.create({baseURL: 'https://rocketseat-node.herokuapp.com/api'});

export default api;