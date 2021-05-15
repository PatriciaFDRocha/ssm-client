import React from "react";
import { getShoppingCart } from '../api';

class ShoppingCart extends React.Component {
    state = {
        setCartProduct: []
    }

    async componentDidMount () {
        const response = await getShoppingCart();

        this.setState({
            setCartProduct: response.data,
        })
    }

    deleteFromCart = (id) => {
        this.setState({
            setCartProduct: this.state.products.filter((product) => product.id !== id)
        })
    }

    render() {
        const { setCartProduct } = this.state;

        return(
            <>
            {setCartProduct.map((product) => {
                <>
                <img src={product.pictureUrl} alt={product.name} width="50px" height="70px" />
                <h5> {product.name} </h5>
                <h5> {product.quantity} </h5>
                <h5> {product.price} € </h5>

                <button onClick={() => this.deleteFromCart(id)}> Remove </button>
                </>
            })}
            </>
        )
    }

}

export default ShoppingCart;