import React  from 'react';
import { getAllProducts } from '../api';
import {NavLink} from 'react-router-dom';
import queryString from 'query-string';
import '../styles/ProductList.css';

class ProductList extends React.Component {
    state = {
        products: [],
        filteredProducts: [],
        _id: ""
    }

    async componentDidMount() {
        const values = queryString.parse(this.props.location.search);
        const response = await getAllProducts();
        let filteredProducts;
        if (values.search) {
            filteredProducts = response.data.filter((product) => {
                return product.name.toLowerCase().indexOf(values.search.toLowerCase()) !== -1
            })
        } else {
            filteredProducts = response.data;
        }

        this.setState({
            products: response.data,
            filteredProducts: filteredProducts
        });
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.location !== this.props.location) {   
            const values = queryString.parse(this.props.location.search);
            if (values.search) {
                this.setState({
                    filteredProducts: this.state.products.filter((product) => {
                        return product.name.indexOf(values.search) !== -1
                    })
                })
            } else {
                this.setState({
                    filteredProducts: this.state.products
                })
            }
        }
    }

    render() {
        return(
            <div className="main" style={{ height: '100%' }} >
            <ul>
                {this.state.filteredProducts.map((product) => {
                    return <li className="list" key={product._id}>
        
                            <NavLink to={`/products/${product._id}`}>
                                <img src={product.pictureUrl} alt={product.name} width="150px" height="100px" />

                                <h4 className="product-name">{product.name}</h4>
                                <p className="product-price">{product.price}€</p>

                                <p className="product-shopName">{product.shopName}</p>
                            </NavLink>

                    </li>
                })}
            </ul>
            </div>
        )
    }
}

export default ProductList;