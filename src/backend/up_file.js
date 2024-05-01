import axios from "axios";

const instance = axios.create({
  //本地
  baseURL: "http://localhost:5129",
  headers: {
    'Content-Type': 'multipart/form-data'
  },
  timeout: 50000,
});






export const UP_file = (e) => instance.post("/api/Values/upload", e);
