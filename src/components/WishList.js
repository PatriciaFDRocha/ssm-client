import React from 'react';
import { Form } from 'react-bootstrap';
import { getWishList, removeFromWishList } from '../api';


class WishList extends React.Component {

    state = {
        favourites: [],
    }

    async componentDidMount() {
        const response = await getWishList();
        
        this.setState({
            favourites: response.data.product
        })
    }

    deleteFromFavourites = async (id) => {
        await removeFromWishList(id);
        this.props.history.push('/favourites');
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
                                <div>
                                 <h4>{favourite.name}</h4>
                                 <p>{favourite.price}€ </p>
                                 <img src={favourite.pictureUrl} alt="img" />
                                </div>
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