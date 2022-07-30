import axios from "axios";

const api = axios.create({
    baseURL: 'http://localhost:5221',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    }
});