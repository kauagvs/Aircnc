import axios from "axios";

const api = axios.create({
  baseURL: "http://10.220.237.208:3333"
});

export default api;
