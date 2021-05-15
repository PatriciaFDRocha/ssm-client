import React from 'react';
//import { NavLink } from 'react-router-dom';
import { getProduct, deleteProduct, addShoppingToDB, getShoppingCart } from '../api';

class SeeProduct extends React.Component {
    state = {
        _id: "",
        pictureUrl: "",
        name: "",
        price: 0,
        description: "",
        brand: "",
        shopName: "",
        setCartProduct: []
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
            setCartProduct: responseFromCart.data,
        });
    };

    handleDeleteProduct = async (id) => {
        await deleteProduct(id);
        this.props.history.push('/products');
    };


    addToCart = async (product) => {
        const response = await addShoppingToDB(product);

        this.setState({
            setCartProduct: this.state.products.concat(response)
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
            shopName } = this.state;
        
            return(
                <>
                <h2> {name} </h2>
                <img src={pictureUrl} alt={name} width="250px" height="350px" />
                <h4> {price} € </h4>
                <h4> {shopName} </h4>
                <p> {brand} </p>
                <p> {description} </p>


                <button onClick={() => this.addToCart(_id) }> Add to Shopping Cart </button>
                </>
            )
                {/* <NavLink exact to ={`/products/${_id}/edit`} > Edit </NavLink> only if shopName admin
                <button onClick={() => this.handleDeleteProduct(_id)}> Delete </button> */}
                
    }
}

export default SeeProduct;