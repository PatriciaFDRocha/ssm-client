import React from 'react';
import { NavLink } from 'react-router-dom'

function Checkout() {
    return(
        <div style={{ height: '100%' }}>
            <h3>Thank you for your order!</h3>
            <p> We appreciate your support to our business </p>

            <p>
                If you have any questions, please email
                <NavLink to="/"> orders@example.com</NavLink>
            </p>
            <button> <NavLink to="/"> Back To Home Page</NavLink> </button>
        </div>
    )
}

export default Checkout;