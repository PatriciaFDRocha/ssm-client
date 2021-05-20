import React from 'react';
import { addNewReview } from '../api';
import { Form, Button } from 'react-bootstrap';
import '../styles/AddReview.css';


class AddReview extends React.Component {
    
    state = {
        comment: "",
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
        } = this.state;

        
        await addNewReview( comment, this.props.productId);
        this.props.history.push("/products");
    }



    render() {
        const { comment } = this.state;

        return(
            <div className="review">
            {this.props.loggedInUser ? (
                <>

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

                <br></br>
                <Button variant="info" as="input" type="submit" value="Review Product" ></Button>
                <br></br>
                <br></br>
            </Form>

            </>

            ) : (
                <>
                <h5 style={{backgroundColor: 'orange'}}>No reviews available</h5>
                </>
                )
            }
        </div>
        )
    }
}

export default AddReview;