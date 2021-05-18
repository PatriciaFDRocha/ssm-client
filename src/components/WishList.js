import React from 'react';
import { getProduct, addToWishList } from '../api';
import { Form } from 'react-bootstrap';


class WishList extends React.Component {

    state = {
        favourites: [],
    }

    async componentDidMount() {
        const productId = this.props.match.params.id;
        const response = await getProduct(productId);

        this.setState({
            favourites: response.data
        })
    }

    handleChange = (event) => {
        let { name, value } = event.target;
        
        this.setState({
          [name]: value,
        });
    };


    handleFormSubmit = async (event) => {
        event.preventDefault();

        const { favourites } = this.state;
        
        const newFav = {
            favourites,
        };

        await addToWishList(newFav);
        this.props.history.push("/products");
    }



    render() {
        const { favourites } = this.state;
        
        return(
            <div className="add" style={{ height: '100%' }}>
                <h3>WishList</h3>
                <Form className="form" onSubmit={this.handleFormSubmit} >
                {favourites.map((favourite) => {
                    <Form.Group controlId="exampleForm.ControlInput1">
                        <Form.Label><b> {favourite.name} </b></Form.Label>
                        <Form.Control type="text" name="name" onChange={this.handleChange} value={favourite.name} />
                    </Form.Group>
                })}
                </Form>
            </div>
        )
    }
}

export default WishList;