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

export const getProduct = (id) => {
  return axios.get(`${baseUrl}/products/${id}`);
};

export const deleteProduct = (id) => {
  return axios.delete(`${baseUrl}/products/${id}`);
};

//?add to cart
export const addShoppingToDB = (product) => {
  return axios.post(`${baseUrl}/shopping-cart`, product);
}

export const getShoppingCart = () => {
  return axios.get(`${baseUrl}/shopping-cart`);
}

//Authentication
export const signup = (username, email, password) => {
  return axios.post(`${baseUrl}/signup`, {username, email, password});
};

export const login = ( email, password ) => {
  return axios.post(`${baseUrl}/login`, { email, password }, { withCredentials: true });
};