import axios from "axios";

const instance = axios.create({
    baseURL: 'http://localhost:5001/clone-3d78e/us-central1/api' //  THE API (cloud fucntion) URL
});

export default instance;