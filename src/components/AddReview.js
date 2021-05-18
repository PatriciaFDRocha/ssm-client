import React from 'react';
import { getProduct, addReview } from '../api';
import StarRatings from 'react-star-ratings';
import { Form, Button } from 'react-bootstrap';


class AddReview extends React.Component {

    state = {
        user: '',
        comment: '',
        rating: 0
    }

    // async componentDidMount() {
    //     const productId = this.props.match.params.id;
    //     const response = await getProduct(productId);

    //     this.setState({
    //         user: response.data.reviews.user,
    //         comment: response.data.reviews.comment,
    //         rating: response.data.reviews.rating
    //     })
    // }
    
    changeRating = (rating) => {
        this.setState({
          rating: rating
        });
    }

    handleChange = (event) => {
        let { name, value } = event.target;
        
        this.setState({
          [name]: value,
        });
    };


    handleFormSubmit = async (event) => {
        event.preventDefault();

        const {
            user,
            comment,
            rating
        } = this.state;
        
        const newReview = {
            user,
            comment,
            rating,
        };

        await addReview(newReview);
        this.props.history.push("/reviews");
    }



    render() {
        const { user, comment, rating } = this.state;

        return(
            <>
            {this.props.loggedInUser ? (

                <Form className="form" onSubmit={this.handleFormSubmit} >
                <h3>Rate the product</h3>

                <Form.Group controlId="exampleForm.ControlInput1">
                    <Form.Label><b>User</b></Form.Label>
                    <Form.Control type="text" name="user" onChange={this.handleChange} value={user} />
                </Form.Group>
                <br />
                
                <Form.Group controlId="exampleForm.ControlTextarea1">
                    <Form.Label><b>Comment</b></Form.Label>
                    <Form.Control as="textarea" rows={3} name="comment" onChange={this.handleChange} value={comment} />
                </Form.Group>
                <br />

                <StarRatings
                    rating={rating}
                    starEmptyColor='grey'
                    starRatedColor="yellow"
                    starDimension='15px'
                    changeRating={ this.changeRating }
                    name='rating'
                />
                <br></br>
                <Button variant="info" as="input" type="submit" value="Rate Product" />
                <br></br>
                <br></br>
            </Form>

            ) : (
                <>
                <h5>No reviews available</h5>
                </>
                )
            }
        </>
        )
    }
}

export default AddReview;