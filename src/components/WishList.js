import React from 'react';
import { Form } from 'react-bootstrap';
import { getProduct, getWishList, removeFromWishList } from '../api';
import { Button } from 'react-bootstrap';


class WishList extends React.Component {

    state = {
        favourites: [],
    }

    async componentDidMount() {
        const response = await getWishList();
        
        this.setState({
            favourites: response.data,
        })
    }

    deleteFromFavourites = async (id) => {
        await removeFromWishList(id);
        this.props.history.push('/products/favourites');
    }

    render() {
        const { favourites } = this.state; 
        
        return(
            <div className="add" style={{ height: '100%' }} >
            
                {this.props.loggedInUser ? (
                    <>
                    <h3>WishList</h3>
                   
                    <Form className="form" >
                    
                        {favourites.map((favourite) => {
                            return(
                                <>
                                 <p>{favourite.product.name}</p>
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