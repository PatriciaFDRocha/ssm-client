import axios from "axios";
const baseUrl = `${process.env.REACT_APP_PROJECTS_API}/api`;

export const getAllProducts = () => {
  return axios.get(`${baseUrl}/products`);
};

export const addProduct = (product) => {
  return axios.post(`${baseUrl}/products`, product,  { withCredentials: true });
};

export const uploadFile = (uploadData) => {
  return axios.post(`${baseUrl}/upload`, uploadData);
};

export const getProduct = (id) => {
  return axios.get(`${baseUrl}/products/${id}`);
};

export const editProduct = (editedProduct) => {
  return axios.put(`${baseUrl}/products/${editedProduct._id}/edit`, editedProduct, { withCredentials: true });
};

export const deleteProduct = (id) => {
  return axios.delete(`${baseUrl}/products/${id}`, { withCredentials: true });
};

export const addReview = (id) => {
  return axios.post(`${baseUrl}/reviews/${id}`, { withCredentials: true })
};

export const addToWishList = (id) => {
  return axios.post(`${baseUrl}/favourites/${id}`, { withCredentials: true })
};


//Authentication
export const signup = ( name, username, password) => {
  return axios.post(`${baseUrl}/signup`, { name, username, password});
};

export const login = ( username, password ) => {
  return axios.post(`${baseUrl}/login`, { username, password }, { withCredentials: true });
};

export const loggedin = () => {
  return axios.get(`${baseUrl}/loggedin`, {withCredentials: true});
};

export const logout = () => {
  return axios.post(`${baseUrl}/logout`, null, {withCredentials: true});
}
