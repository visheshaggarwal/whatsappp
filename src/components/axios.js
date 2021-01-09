import axios from 'axios'

const instance = axios.create({
    baseURL: "https://whatsaappp.herokuapp.com/"
});

export default instance;