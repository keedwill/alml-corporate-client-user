import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:5000" });

API.interceptors.request.use((req) => {
  if (localStorage.getItem("profile")) {
    req.headers.authorization = `Bearer ${
      JSON.parse(localStorage.getItem("profile")).token
    }`;
  }
  return req;
});

export const login = (data) => API.post("/v1/api/user/login", data);
export const register = (data) => API.post("/v1/api/user/register", data);
export const createProforma = (data) =>
  API.post("/v1/api/user/proforma/create", data);
export const getContractedServices = () =>
  API.get("/v1/api/user/dashboard/contractServices");
export const support = (data) => API.post("/v1/api/user/support", data);
export const getProformas = (page) =>
  API.get(`/v1/api/user/proforma?page=${page}`);
export const getSingleProforma = (id) => API.get(`/v1/api/user/proforma/${id}`);
export const getSingleContract = () => API.get(`/v1/api/user/contract`);
