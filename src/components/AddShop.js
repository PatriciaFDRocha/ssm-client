import React from 'react';
import '../styles/AddProduct.css';
import { addShop } from '../api';
import { Form, Button } from 'react-bootstrap';

class AddShop extends React.Component {
    state = {
        _id: "",
        shopName: "",
        description: '',
        latitude: 0,
        longitude: 0,
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
            shopName,
            description,
        } = this.state;
        

        const newShop = {
            shopName,
            description,
        };


        await addShop(newShop);
        this.props.history.push("/shop");
    }


    render() {
        const {
            shopName, 
            description,
        } = this.state;

        return(
            <div className="add" style={{ height: '100%' }}>
            <h3>Add Shop</h3>
            <Form className="form" onSubmit={this.handleFormSubmit} >
                
                <Form.Group controlId="exampleForm.ControlInput1">
                    <Form.Label><b>Shop Name:</b></Form.Label>
                    <Form.Control type="text" name="shopName" onChange={this.handleChange} value={shopName} />
                </Form.Group>
                <br />
                <Form.Group controlId="exampleForm.ControlInput1">
                    <Form.Label> <b>Description: </b> </Form.Label>
                    <Form.Control as="textarea" rows={3} placeholder="open times, types of products" type="text" name="description" onChange={this.handleChange} value={description} />
                </Form.Group>
                <br />
 
 
                <br />
                <Button variant="info" as="input" type="submit" value="Create Shop" />
                <br></br>
                <br></br>
            </Form>
            </div>
        )
    }
}

export default AddShop;