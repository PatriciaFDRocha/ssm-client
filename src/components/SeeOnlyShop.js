import React from 'react';
import { getShop, deleteShop } from '../api';
import { NavLink } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { GoogleApiWrapper } from 'google-maps-react';


class SeeOnlyShop extends React.Component {
    map = null;
    state = {
        _id: "",
        shopName: "",
        description: '',
        latitude: 0,
        longitude: 0,
        user: null
    }

    async componentDidMount() {
        setTimeout( async () => {
            this.map = new window.google.maps.Map(document.getElementById("map"), {
              center: { lat: 38.7117164, lng: -9.1264315 },
              zoom: 15,
            });
            const shopId = this.props.match.params.id;
            const response = await getShop(shopId);
    
            this.setState({
                _id: response.data._id,
                shopName: response.data.shopName,
                description: response.data.description,
                user: response.data.user,
                latitude: response.data.latitude,
                longitude: response.data.longitude,
            });
          }, 100);
  
    };

    createMarker = (position) => {
        const google = window.google;
        new google.maps.Marker({
          position: position,
          map: this.map,
        });
      };

    
      drawMarkers = () => {
        this.state.markers.forEach((marker) => {
          this.createMarker(marker);
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
            // latitude,
            // longitude,
            user
        } = this.state;
        
        return(
            <div className="see-div" style={{ height: '100%' }}>

                <h2> <strong> Name: </strong> {shopName} </h2>
                <p> <strong>Description: </strong>  {description} </p>
                {/* <p>Location: {latitude} {longitude}</p> */}


                <NavLink to="/products"> <Button variant="info" as="input" type="button" value="See All Products" /> </NavLink>

                {user && this.props.loggedInUser._id === user._id &&
                <Button onClick={() => this.handleDeleteShop(_id)} variant="danger" > Delete </Button>}


                <br />
                <br />
                <NavLink to="/shop/add">  <Button variant="info" as="input" type="button" value="Add Shop" /> </NavLink>
                <NavLink to={`/shop/${_id}/edit`}>  <Button variant="info" as="input" type="button" value="Edit Shop" /> </NavLink>
                <NavLink to={`/products/add`}>  <Button variant="info" as="input" type="button" value="Add Product" /> </NavLink>


                <div style={{ width: 450, height: 250 }} id="map" />

            </div>
        )   
    }
}

export default GoogleApiWrapper ({
    apiKey: "AIzaSyAi9A7r2yp6ds9Zb_UalT9y3azzO2KsHFk"
})(SeeOnlyShop);

