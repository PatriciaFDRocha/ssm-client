import React  from 'react';
import { getAllProducts } from '../api';
import {NavLink} from 'react-router-dom';

class ProductList extends React.Component {
    state = {
        products: []
    }

    async componentDidMount() {
        const response = await getAllProducts();
        
        this.setState({
            products: response.data,
        });
    }

    render() {
        return(
            <>
            <ul>
                {this.state.products.map((product) => {
                    return <li key={product._id}>
                        <NavLink to={`/products`} >{product.name}</NavLink>
                    </li>
                })}
            </ul>
            </>
        )
    }
}

export default ProductList;