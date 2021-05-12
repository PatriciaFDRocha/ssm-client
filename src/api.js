import axios from "axios";
const baseUrl = `${process.env.REACT_APP_PROJECTS_API}/api`;

export const getAllProducts = () => {
  return axios.get(`${baseUrl}/products`);
};

export const addProduct = (product) => {
  return axios.post(`${baseUrl}/products`, product);
};

export const uploadFile = (uploadData) => {
  return axios.post(`${baseUrl}/upload`, uploadData);
};
