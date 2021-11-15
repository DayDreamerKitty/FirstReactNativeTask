import axios from "axios";

const baseURL = "http://192.168.1.55:8000";

const instance = axios.create({
  baseURL: `${baseURL}/api`,
});

export default { instance, baseURL };
