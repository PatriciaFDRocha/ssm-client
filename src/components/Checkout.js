import React from 'react';
import { NavLink } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import '../styles/Checkout.css';

function Checkout() {
    return(
        <div className="checkout" style={{ height: '100%' }}>
            <h3>Thank you for your order!</h3>
            <p> We appreciate your support to our business </p>

            <p className="text">
                If you have any questions, please email
                <NavLink to="/"> orders@example.com</NavLink>
            </p>
            <NavLink to="/"><Button variant="danger" >Home</Button></NavLink>
        </div>
    )
}

export default Checkout;