import React from "react";
import { getShoppingCart } from '../api';
import { loadStripe } from '@stripe/stripe-js';
const stripePromise = loadStripe('pk_test_51Ir1FjKKq6FQy3uVGBKpsNIbYTn4SKPhFwv8Mu3zMEbrVj5j83zE2BOeMwnJ3GEPwtBYWKgkGcHngKRD2vGbp32V00lzQ5qx7A');


class ShoppingCart extends React.Component {
    state = {
        productsInCart: [],
        _id: ''
    }

    async componentDidMount () {
        const response = await getShoppingCart();

        this.setState({
            productsInCart: response.data,
            id: response.data._id,
        })
    }

    deleteFromCart = (id) => {
        this.setState({
            productsInCart: this.state.products.filter((product) => product.id !== id)
        })
    }

    handleClick = async () => {
        // Get Stripe.js instance
        const stripe = await stripePromise;
    
        // Call your backend to create the Checkout Session
        const response = await fetch('/create-checkout-session', { method: 'POST' });
    
        const session = await response.json();
    
        // When the customer clicks on the button, redirect them to Checkout.
        const result = await stripe.redirectToCheckout({
          sessionId: session.id,
        });
    
        if (result.error) {
          // If `redirectToCheckout` fails due to a browser or network
          // error, display the localized error message to your customer
          // using `result.error.message`
          alert(result.error.message);
        }
      };

    render() {
        const { productsInCart, _id } = this.state;

        return(
            <div style={{ height: '100%' }}>
            {productsInCart.map((product) => {
                return (
                    <>
                    <img src={product.pictureUrl} alt={product.name} width="50px" height="70px" />
                    <h5> {product.name} </h5>
                    <h5> {product.quantity} </h5>
                    <h5> {product.price} € </h5>

                    <button onClick={() => this.deleteFromCart(_id)}> Remove </button>
                    <button role="link" onClick={this.handleClick} > Checkout </button>
                    </>
                    
                )
            })}
            </div>
        )
    }

}

export default ShoppingCart;