import axios from "axios";

const instance = axios.create({
    withCredentials: true, // Important for cookies to be sent across domains
});

export default instance;