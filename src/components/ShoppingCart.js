import React from 'react';
import { getShoppingCart } from '../api';
import 'bulma/css/bulma.css';


class ShoppingCart extends React.Component {
    state = {
        productsInCart: [],
        _id: '',
    }

    async componentDidMount () {
        const response = await getShoppingCart();

        this.setState({
            productsInCart: response.data
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

        return loggedInUser ? (
            <div>
                {productsInCart === null  ( <h4>Shopping Cart is empty</h4> ) : (
                    
                    {productsInCart.map((productInCart) => {
                        return ( 
                        <div className="box" style={{ height: '100%' }} >
                        <article className="media">
                            <div className="media-left">
                            <figure className="image is-64x64">
                                <img src={productInCart.product.pictureUrl} alt="img" />
                            </figure>
                            </div>
                            <div className="media-content">
                            <div className="content">
                                <p>
                                <strong>{productInCart.product.name}</strong>
                                </p>
                                <p>
                                <strong>{productInCart.product.price} €</strong>
                                </p>
                            </div>
                            </div>
                            <div className="media-right">
                            <div className="field has-addons">
                                <div className="control">
                                <input className="input" type="number" value={productInCart.quantity} />
                                </div>
                                <div className="control">
                                    
                                    <button className="button is-info" onClick={() => this.deleteFromCart(_id)}> 
                                        Remove
                                    </button>
                                    {/* <NavLink to="/payment" ><button className="button is-info" > Checkout </button></NavLink>  */}

                                </div>
                                </div>
                                </div>
                            </article>
                            </div>
                        )}
                        )}
                    )}  
                </div>
        ) : (
            <h3>Login Nedded </h3>
        )
    }
}


export default ShoppingCart;