import React from 'react';
import { getAllShops } from '../api';
import { NavLink } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import '../styles/SeeAllShops.css';

class SeeAllShops extends React.Component {
    state = {
        _id: '',
        shops: [],
    }

    async componentDidMount() {
        const response = await getAllShops();

        this.setState({
            shops: response.data,
        });
    };


    render() {
        const { shops } = this.state;
        
        return(
            <div className="see-div" style={{ height: '100%' }}>
            {shops.map((shop) => {
                return(
                    <div className="shop">
                        <h2> <strong> Name: </strong> {shop.shopName} </h2>
                        <p> <strong>Description: </strong>  {shop.description} </p>
                        {/* <p>Location: {latitude} {longitude}</p> */}
                        <NavLink to={`/shop/${shop._id}`}>  <Button variant="info" as="input" type="button" value="See Shop" /> </NavLink>
                        
                    </div>
                )
            })}

                <br />
                <br />
                <NavLink to="/shop/add">  <Button variant="success" as="input" type="button" value="Add Shop" /> </NavLink>
                
            </div>
        )   
    }
}

export default SeeAllShops;

