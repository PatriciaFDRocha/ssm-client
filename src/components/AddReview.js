import React from 'react';
import { addNewReview } from '../api';
import StarRatings from 'react-star-ratings';
import { Form, Button } from 'react-bootstrap';
import '../styles/AddReview.css';


class AddReview extends React.Component {
    
    state = {
        comment: "",
        rating: 0
    }

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
            comment,
            rating
        } = this.state;

        
        await addNewReview( comment, rating, this.props.productId);
        this.props.history.push("/products");
    }



    render() {
        const { comment, rating } = this.state;

        return(
            <div className="review">
            {this.props.loggedInUser ? (

                <Form className="form" onSubmit={this.handleFormSubmit} >
                <h3>Review Product</h3>

                <Form.Group controlId="exampleForm.ControlInput1">
                    <Form.Label><b>User</b></Form.Label>
                    <Form.Control type="text" name="name" readOnly value={this.props.loggedInUser.name} />
                </Form.Group>
                <br />
                
                <Form.Group controlId="exampleForm.ControlTextarea1">
                    <Form.Label><b>Comment</b></Form.Label>
                    <Form.Control as="textarea" rows={5} name="comment" onChange={this.handleChange} value={comment} />
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
                <Button variant="info" as="input" type="submit" value="Rate Product" ></Button>
                <br></br>
                <br></br>
            </Form>

            ) : (
                <>
                <h5>No reviews available</h5>
                </>
                )
            }
        </div>
        )
    }
}

export default AddReview;