import axios from "axios";
const baseUrl = `${process.env.REACT_APP_PROJECTS_API}/api`;


//Products
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



//Reviews
export const addNewReview = ( comment, rating, id) => {
  return axios.post(`${baseUrl}/reviews/${id}/add`, { comment, rating }, { withCredentials: true })
};



//Favourites
export const getWishList = () => {
  return axios.get(`${baseUrl}/products/favourites`, { withCredentials: true })
};

export const addToWishList = (id) => {
  return axios.post(`${baseUrl}/products/${id}/favourites`, { withCredentials: true })
};

export const removeFromWishList = (id) => {
  return axios.delete(`${baseUrl}/favourites/${id}`, { withCredentials: true })
};



//Shopping cart
export const addShoppingToDB = (id) => {
  return axios.post(`${baseUrl}/shopping-cart`, id, { withCredentials: true })
};

export const getShoppingCart = () => {
  return axios.get(`${baseUrl}/shopping-cart`, { withCredentials: true })
};



//Shops
export const getAllShops = () => {
  return axios.get(`${baseUrl}/shop`)
};

export const getShop = (id) => {
  return axios.get(`${baseUrl}/shop/${id}`);
};

export const addShop = (shop) => {
  return axios.post(`${baseUrl}/shop/add`, shop,  { withCredentials: true });
};

export const editShop = (editedShop) => {
  return axios.put(`${baseUrl}/shop/${editedShop._id}edit`, editedShop, { withCredentials: true });
};

export const deleteShop = (id) => {
  return axios.delete(`${baseUrl}/shop/${id}`, { withCredentials: true });
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
