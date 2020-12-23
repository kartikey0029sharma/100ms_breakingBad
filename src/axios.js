import axios from 'axios';

const instance = axios.create({
    baseURL: "https://breakingbadapi.com/api/characters"
})

export default instance;