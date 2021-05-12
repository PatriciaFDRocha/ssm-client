import React from 'react';
import { addProduct, uploadFile } from '../api';

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
            shopName } = this.state;
        
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
            shopName
        };

        await addProduct(newProduct);
        this.props.history.push("/products");
    }


    render() {
        const {
            name, 
            price,
            description,
            brand,
            shopName } = this.state;

        return(
            <>
            <form onSubmit={this.handleFormSubmit} encType="multipart/form-data" >
                
                <label>Image</label>
                <input type="file" onChange={this.handleFileChange} />
                
                <label>Name</label>
                <input type="text" name="name" onChange={this.handleChange} value={name} />

                <label>Price</label>
                <input type="number" name="price" onChange={this.handleChange} value={price} />

                <label>Description</label>
                <input type="text" name="description" onChange={this.handleChange} value={description} />

                <label>Brand</label>
                <input type="text" name="brand" onChange={this.handleChange} value={brand} />

                <label>From</label>
                <input type="text" name="shopName" onChange={this.handleChange} value={shopName} />

                <button type="submit">Create</button>
            </form>
            </>
        )
    }
}

export default AddProduct;