import React from 'react';
import Rating from './Rating';
import { getProduct, deleteProduct, addShoppingToDB, getShoppingCart } from '../api';
import { NavLink } from 'react-router-dom';

class SeeProduct extends React.Component {
    state = {
        _id: "",
        pictureUrl: "",
        name: "",
        price: 0,
        description: "",
        brand: "",
        shopName: "",
        productsInCart: []
    }

    async componentDidMount() {
        const productId = this.props.match.params.id;
        const response = await getProduct(productId);

        const responseFromCart = await getShoppingCart();

        this.setState({
            _id: response.data._id,
            pictureUrl: response.data.pictureUrl,
            name: response.data.name,
            price: response.data.price,
            description: response.data.description,
            brand: response.data.brand,
            shopName: response.data.shopName,
            productsInCart: responseFromCart.data,
        });
    };

    handleDeleteProduct = async (id) => {
        await deleteProduct(id);
        this.props.history.push('/products');
    };


    addToCart = async (productId) => {

        await addShoppingToDB(1, productId);

        this.setState({
            productsInCart: this.state.productsInCart.concat(productId)
        });
    };

    render() {
        const {
            _id,
            pictureUrl,
            name, 
            price,
            description,
            brand,
            shopName 
        } = this.state;
        
        return(
            <div style={{ height: '100%' }}>
            <h2> {name} </h2>
            <img src={pictureUrl} alt={name} width="250px" height="350px" />
            <h4> {price} € </h4>
            <h4> {shopName} </h4>
            <p> {brand} </p>
            <p> {description} </p>

            <p>Rate the product</p>
            <button><Rating /></button>

            <br></br>

            <button onClick={() => this.addToCart(_id) }> Add to Shopping Cart </button>
            <br></br>

            <button onClick={() => this.handleDeleteProduct(_id)} > Delete Product </button>
            <br></br>
             <NavLink to={`/products/${_id}/edit`}>Edit</NavLink>
            </div>
        )   
    }
}

export default SeeProduct;