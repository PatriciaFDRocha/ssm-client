import React from 'react';
import { getShoppingCart } from '../api';
import { NavLink } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import '../styles/ShoppinCart.css';


class ShoppingCart extends React.Component {
    state = {
        productsInCart: [],
        _id: '',
    }

    async componentDidMount () {
        const response = await getShoppingCart();
        
        this.setState({
            productsInCart: response.data.products
        })

    }

    deleteFromCart = (id) => {
        this.setState({
            productsInCart: this.state.products.filter((product) => product.id !== id)
        })
    }

    render() {
        const { productsInCart, _id } = this.state;

        const { loggedInUser } = this.props;

        return loggedInUser && productsInCart ? (  
                    productsInCart.map((productInCart) => {
                        return (
                            <>
                            <div className="check">
                                <img key="img" className="img" src={productInCart.product.pictureUrl} alt="img" />
                                
                                <div className="check-2">
                                    <strong key="name">{productInCart.product.name}</strong>
                                    <br />
                                    <strong key="price">{productInCart.product.price} €</strong>
                                    <br/>
                                    <strong key="quantity"> Quantity: {productInCart.quantity} </strong>
                                </div>

                                <div className="buttons">
                                    <Button key="button-1" variant="success" onClick={() => this.deleteFromCart(_id)}>Remove</Button>
                                    <NavLink key="link-1" to="/payment"> <Button variant="success" > Checkout </Button> </NavLink> 
                                </div>
                            </div>
                            <hr />
                            </>
                        )
                    })
                    ) : (
            <h3> Shopping Cart Not Available. Please login </h3>
        )
    }
}


export default ShoppingCart;