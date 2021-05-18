import React from 'react';
import { getProduct, deleteProduct } from '../api';
import { NavLink } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import '../styles/SeeProduct.css';
import AddReview from './AddReview';

class SeeProduct extends React.Component {
    state = {
        _id: "",
        pictureUrl: "",
        name: "",
        price: 0,
        description: "",
        brand: "",
        shopName: "",
        owner: '',
    }

    async componentDidMount() {
        const productId = this.props.match.params.id;
        const response = await getProduct(productId);


        this.setState({
            _id: response.data._id,
            pictureUrl: response.data.pictureUrl,
            name: response.data.name,
            price: response.data.price,
            description: response.data.description,
            brand: response.data.brand,
            shopName: response.data.shopName,
            owner: response.data.user
        });
    };

    handleDeleteProduct = async (id) => {
        await deleteProduct(id);
        this.props.history.push('/products');
    };


    // addToCart = async (productId) => {
    //     let response = await addShoppingToDB(1, productId);
    //     this.setState({
    //         productsInCart: response.data
    //     });
    // };

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
            <div className="see-div" style={{ height: '100%' }}>
                <h2> <strong> Name: </strong> {name} </h2>
                <img src={pictureUrl} alt={name} width="250px" height="350px" />
                <h4> {price}€ </h4>
                <h5> <strong>Shop Name: </strong>  {shopName} </h5>
                <p> <strong>Brand: </strong>  {brand} </p>
                <p> <strong>Description: </strong>  {description} </p>
                
                {this.props.loggedInUser && (this.props.loggedInUser.username === this.state.owner.username && (
                    <>
                    <AddReview />
                    <Button onClick={() => this.handleDeleteProduct(_id)} variant="danger" > Delete </Button>

                    <NavLink to={`/products/${_id}/edit`}> <Button variant="info" > Edit </Button> </NavLink>
                    </>
                ))}
            </div>
        )   
    }
}

export default SeeProduct;

