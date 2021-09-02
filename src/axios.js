import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://tik--tok--clone--backend.herokuapp.com'
})

export default instance;