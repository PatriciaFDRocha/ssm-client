import React from 'react';
import { getShop, deleteShop } from '../api';
import { NavLink } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import '../styles/SeeOnlyShop.css';


class SeeOnlyShop extends React.Component {

    state = {
        _id: "",
        shopName: "",
        description: '',
        owner: '',
    }

    async componentDidMount() {

      const shopId = this.props.match.params.id;
      const response = await getShop(shopId);

      this.setState({
        _id: response.data._id,
        shopName: response.data.shopName,
        description: response.data.description,
        owner: response.data.user
      });
  
    };

    handleDeleteShop = async (id) => {
        await deleteShop(id);
        this.props.history.push('/shop');
    };

    render() {
        const {
            _id,
            shopName,
            description,
        } = this.state;
        
        return(
            <div className="see-div" style={{ height: '100%' }}>

                <h2 className="name"> <strong> Name: </strong> {shopName} </h2>
                <p className="desc"> <strong>Description: </strong>  {description} </p>

                <NavLink to="/products"> <Button variant="info" as="input" type="button" value="See All Products" /> </NavLink>

                {this.props.loggedInUser && (this.props.loggedInUser.username === this.state.owner.username &&
                <>
                <Button onClick={() => this.handleDeleteShop(_id)} variant="danger" > Delete </Button>
                <br></br>
                <NavLink to="/shop/add">  <Button variant="info" as="input" type="button" value="Add Shop" /> </NavLink>
                <br></br>
                <NavLink to={`/shop/${_id}/edit`}>  <Button variant="info" as="input" type="button" value="Edit Shop" /> </NavLink>
                <br></br>
                <NavLink to={`/products/add`}>  <Button variant="info" as="input" type="button" value="Add Product" /> </NavLink>
                </>
                )}


            </div>
        )   
    }
}

export default SeeOnlyShop;

