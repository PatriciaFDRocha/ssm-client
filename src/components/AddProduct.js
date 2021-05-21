import React from 'react';
import '../styles/AddProduct.css';
import { addProduct, uploadFile } from '../api';
import { Form, Button } from 'react-bootstrap';
import {toast} from 'react-toastify';

class AddProduct extends React.Component {
    state = {
        pictureUrl: '',
        name: '',
        price: 0,
        description: '',
        brand: '',
        shopName: ''
    }

    handleFileChange = (event) => {
        this.setState({
            pictureUrl: event.target.files[0]
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
            pictureUrl, 
            name, 
            price,
            description,
            brand,
            shopName
        } = this.state;
        
        const uploadData = new FormData();
        uploadData.append("file", pictureUrl);

        //Upload image to api
        const response = await uploadFile(uploadData)
        
        //Create the project on our api
        const newProduct = {
            pictureUrl: response.data.fileUrl, 
            name, 
            price,
            description,
            brand,
            shopName,
        };

        await addProduct(newProduct);
        toast.success('Product Created');
        
        this.props.history.push("/products");
    }


    render() {
        const {
            name, 
            price,
            description,
            brand,
            shopName,
        } = this.state;

        return(
            <div className="add" style={{ height: '100%' }}>
            <h3>Add Product</h3>
            <Form className="form" onSubmit={this.handleFormSubmit} encType="multipart/form-data" >
                <Form.Group>
                    <Form.File id="exampleFormControlFile1" label="Image" style={{fontWeight: "bold"}} onChange={this.handleFileChange} width="250px" height="300px"  />
                </Form.Group>
                <br />
                <Form.Group controlId="exampleForm.ControlInput1">
                    <Form.Label><b>Name</b></Form.Label>
                    <Form.Control type="text" name="name" onChange={this.handleChange} value={name} />
                </Form.Group>
                <br />
                <Form.Group controlId="exampleForm.ControlInput1">
                    <Form.Label> <b>Price</b> </Form.Label>
                    <Form.Control type="number" name="price" onChange={this.handleChange} value={price} />
                </Form.Group>
                <br />
                <Form.Group controlId="exampleForm.ControlTextarea1">
                    <Form.Label><b>Description</b></Form.Label>
                    <Form.Control as="textarea" rows={3} name="description" onChange={this.handleChange} value={description} />
                </Form.Group>
                <br />
                <Form.Group controlId="exampleForm.ControlTextarea1">
                    <Form.Label><b>Brand</b></Form.Label>
                    <Form.Control type="text" name="brand" onChange={this.handleChange} value={brand} />
                </Form.Group>
                <br />
                <Form.Group controlId="exampleForm.ControlTextarea1">
                    <Form.Label><b>Shop Name</b></Form.Label>
                    <Form.Control type="text" name="shopName" onChange={this.handleChange} value={shopName} />
                </Form.Group>
                <Button variant="info" as="input" type="submit" value="Create Product" />
                <br></br>
                <br></br>
            </Form>
            </div>
        )
    }
}

export default AddProduct;