import React  from 'react';
import { getAllProducts } from '../api';
import {NavLink} from 'react-router-dom';
import queryString from 'query-string';

class ProductList extends React.Component {
    state = {
        products: [],
        filteredProducts: [],
        _id: ""
    }

    async componentDidMount() {
        const values = queryString.parse(this.props.location.search);
        const response = await getAllProducts();
        const filteredProducts = response.data.filter((product) => {
            return product.name.indexOf(values.search) !== -1
        })
        this.setState({
            products: response.data,
            filteredProducts: filteredProducts
        });
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.location !== this.props.location) {   
            const values = queryString.parse(this.props.location.search);
            this.setState({
                filteredProducts: this.state.products.filter((product) => {
                    return product.name.indexOf(values.search) !== -1
                })
            })
        }
    }

    render() {
        return(
            <>
            <ul>
                {this.state.filteredProducts.map((product) => {
                    return <li key={product._id}>
                        <NavLink to={`/products/${product._id}`} >{product.name}</NavLink>
                    </li>
                })}
            </ul>
            </>
        )
    }
}

export default ProductList;