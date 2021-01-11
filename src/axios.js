import axios from "axios";

const instance = axios.create({
    baseURL: 'http://localhost:5001/challange-7a663/us-central1/api'
});

export default instance;