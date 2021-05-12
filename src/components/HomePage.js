import React from 'react';
import { NavLink } from 'react-router-dom';
import  '../styles/homepage.css';


function HomePage() {
    return(
        <>
        <nav className="navbar" >
            <ul>
                <li> <NavLink exact to="/"> SSM </NavLink> </li>
                
                <li> <NavLink exact to="/products"> View Products </NavLink> </li>
                
                <li> <NavLink exact to="/products/add"> Add Products </NavLink> </li>

                <li> <NavLink exact to="/about"> About </NavLink> </li>

                <li> <NavLink exact to="/login"> Login </NavLink> </li>

                <li> <NavLink exact to="/signup"> Sign up </NavLink> </li>

            </ul>
        </nav>

        <p>Welcome User</p>

        <div className="search-bar">
            <input type="search" placeholder="Search product" />
            <button type="submit" className="search-button"> <img src="../images/search.png" /> </button>
        </div>

        </>
    )
}

export default HomePage;