import React from 'react';
import { getProduct, deleteProduct, addShoppingToDB, addToWishList, getShoppingCart } from '../api';
import { NavLink } from 'react-router-dom';
import { Button, Container } from 'react-bootstrap';
import '../styles/SeeProduct.css';
import {toast} from 'react-toastify';


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
        productsInCart: [],
        reviews: [],
        favourites: [],
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
            owner: response.data.user,
            reviews: response.data.reviews,
            productsInCart: responseFromCart.data,
        });
    };

    handleDeleteProduct = async (id) => {
        await deleteProduct(id);
        toast.warning('Product Deleted');

        this.props.history.push('/products');
    };


    addToCart = async (productId) => {
        const response = await addShoppingToDB(productId, 1);

        this.setState({
            productsInCart: response.data
        });

        toast.success('Product Added To Shopping Cart');
    };

    addToFavourites = async (id) => {
        await addToWishList(id);
        toast.success('Product Added To Wish List');

        this.props.history.push("/products");
    };

    render() {
        const {
            _id,
            pictureUrl,
            name, 
            price,
            description,
            brand,
            shopName,
            reviews,
        } = this.state;

        return(
            <div className="see-div" style={{ height: '100%' }}>
                <h2 className="name"> <strong> Name: </strong> {name} </h2>
                <img src={pictureUrl} alt={name} width="250px" height="350px" />
                <h4> {price}€ </h4>
                <h5> <strong>Shop Name: </strong>  {shopName} </h5>
                <p> <strong>Brand: </strong>  {brand} </p>
                <p> <strong>Description: </strong>  {description} </p>
                
                
                {this.props.loggedInUser && (this.props.loggedInUser.username === this.state.owner.username && (
                    <div className="see-div"> 
                    <Button className="button1" onClick={() => this.handleDeleteProduct(_id)} variant="danger" > Delete </Button>

                    <NavLink to={`/products/${_id}/edit`}> <Button className="button2" variant="success" > Edit </Button> </NavLink>
                    <br></br>
                    
                    </div>
                ))}

                <NavLink to={`/reviews/${_id}/add`} > <Button variant="success" >Add review</Button> </NavLink>
                <br></br>
                <Button className="button3" onClick={() => this.addToFavourites(_id)} variant="info" type="button" >Add to Wish List</Button>
                <br></br>
                <Button onClick={() => this.addToCart(_id)} variant="info" >Add To Shopping Cart</Button>
                <br></br>
                <Container fluid style={{ backgroundColor: 'maroon', color: 'whitesmoke', paddingBottom: '1%', paddingTop: '1%' }}>
                    
                    <p> <strong> Reviews: </strong> </p>
                    {reviews.map((review) => {
                        return(
                            <>
                            <h5>{this.props.loggedInUser.name}: {review.comment}</h5>
                            </>
                        )
                    })}
                    
                </Container>

            </div>
        )   
    }
}

export default SeeProduct;

