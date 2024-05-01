import axios from "axios";

const instance = axios.create({
  //本地
  baseURL: "http://localhost:5129",
  responseType: "blob",
  timeout: 50000,
});


export const Get_file = () => instance.get("/api/Values/read");


export const UP_file = (e) => instance.post("/api/Values/upload",e);