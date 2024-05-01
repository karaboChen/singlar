import axios from "axios";

const instance = axios.create({
  //本地
  baseURL: "http://localhost:5129",

  timeout: 50000,
});



export const Get_key = () => instance.get("/get");


export const Post_key = (e) => instance.post("/movie",e);

export const Get_file = () => instance.get("/api/Values/read");