import React from 'react';
import { editShop, getShop } from '../api';
import { Form, Button } from 'react-bootstrap';

class EditShop extends React.Component {
    state = {
        _id: "",
        shopName: "",
        description: '',
        latitude: 0,
        longitude: 0,
        // user: null,
    }

    async componentDidMount() {
        const response = await getShop(this.props.match.params.id);

        this.setState({
            _id: response.data._id,
            shopName: response.data.shopName,
            description: response.data.description,
            // latitude: response.data.latitude,
            // longitude: response.data.longitude,
            // user: response.data.user
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

        const { 
            _id,
            description,
            shopName,
            // latitude,
            // longitude,
        } = this.state;

        
        const updatedShop = {
            _id,
            shopName,
            description,
        }

        await editShop(updatedShop);
        this.props.history.push("/shop");
    }


    render() {
        const {
            description,
            shopName,
            // latitude,
            // longitude, 
        } = this.state;

        return(
            <div style={{ height: '100%' }}>
            <Form className="form" onSubmit={this.handleFormSubmit} >
 
                <Form.Group controlId="exampleForm.ControlInput1">
                    <Form.Label><b>Shop Name</b></Form.Label>
                    <Form.Control type="text" name="shopName" onChange={this.handleChange} value={shopName} />
                </Form.Group>
                <br />

                <br />
                <Form.Group controlId="exampleForm.ControlTextarea1">
                    <Form.Label><b>Description</b></Form.Label>
                    <Form.Control as="textarea" rows={3} name="description" onChange={this.handleChange} value={description} />
                </Form.Group>
                <br />

                <br />
                <Button as="input" type="submit" value="Update Shop" />
                <br />
            </Form>
            <br />
            </div>
        )
    }
}

export default EditShop;