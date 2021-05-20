import React from 'react';
import { editProduct, getProduct, uploadFile } from '../api';
import { Form, Button } from 'react-bootstrap';

class EditProduct extends React.Component {
    state = {
        _id: '',
        pictureUrl: '',
        name: '',
        price: 0,
        description: '',
        brand: '',
        shopName: ''
    }

    async componentDidMount() {
        const response = await getProduct(this.props.match.params.id);

        this.setState({
            _id: response.data._id,
            pictureUrl: response.data.pictureUrl,
            name: response.data.name,
            price: response.data.price,
            description: response.data.description,
            brand: response.data.brand,
            shopName: response.data.shopName
        })
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
            _id,
            pictureUrl,
            name,
            price,
            description,
            brand,
            shopName } = this.state;
        
        const uploadData = new FormData();
        uploadData.append("file", pictureUrl);

        //Upload image to api
        const response = await uploadFile(uploadData);
        
        const updatedProject = {
            _id,
            name,
            price,
            description,
            brand,
            shopName,
            pictureUrl: response.data.fileUrl,
        }
        await editProduct(updatedProject);
        this.props.history.push("/products");
    }

    render() {
        const {
            name, 
            price,
            description,
            brand,
            shopName 
        } = this.state;

        return(
            <div style={{ height: '100%' }}>
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
                    <Form.Control  type="text" name="shopName" onChange={this.handleChange} value={shopName} />
                </Form.Group>
                <br />
                <Button as="input" type="submit" value="Update Product" />
                <br />
            </Form>
            <br />
            </div>
        )
    }
}

export default EditProduct;