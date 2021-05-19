import React from 'react';
import { Form } from 'react-bootstrap';
import { getProduct, getWishList, removeFromWishList } from '../api';
import { Button } from 'react-bootstrap';


class WishList extends React.Component {

    state = {
        favourites: [],
        _id : '',
    }

    async componentDidMount() {
        const response = await getWishList();
        const productId = await getProduct(this.props.match.params.id);
        
        this.setState({
            favourites: response.data,
            _id: productId,
        })
    }

    deleteFromFavourites = async (id) => {
        await removeFromWishList(id);
        this.props.history.push('/products/favourites');
    }

    render() {
        const { favourites, _id } = this.state; 
        
        return(
            <div className="add" style={{ height: '100%' }} >
            
                {this.props.loggedInUser ? (
                    <>
                    <h3>WishList</h3>
                   
                    <Form className="form" >
                    
                        {favourites.map((favourite) => {
                            return(
                                <>
                                <Form.Group controlId="exampleForm.ControlInput1">
                                    <Form.Label><b> {favourite.name} </b></Form.Label>
                                    <Form.Control type="text" name="name" onChange={this.handleChange} value={favourite.name} />
                                </Form.Group>

                                <Button onClick={() => this.deleteFromFavourites(_id)} variant="danger" > Remove </Button>
                                </>
                            )
                        })}

                    </Form>
                    </>
                    
                ) : (
                    <>
                    <h5>Can only see Wish List when Logged in</h5>
                    </>
                    )
                }
            </div>
        )
    }
}

export default WishList;