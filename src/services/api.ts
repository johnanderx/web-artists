import axios from "axios";

const baseURL = "http://localhost:8080/https://api.deezer.com/";

const api = axios.create({
  baseURL,
});

export default api;
