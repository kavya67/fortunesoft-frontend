import axios from "axios";

const http = axios.create({
  baseURL: "https://immense-badlands-83979.herokuapp.com",
});

http.interceptors.request.use(
  (config) => {
    config.headers["Content-Type"] = "application/json";

    return config;
  },
  (err) => {
    return Promise.reject(err);
  }
);

export default http;
