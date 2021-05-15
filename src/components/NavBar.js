import React from 'react';
import { NavLink } from 'react-router-dom';
import  '../styles/navbar.css';
import { Button, Navbar, Nav, Form, FormControl } from 'react-bootstrap';

class NavBar extends React.Component {
    state = {
        keyword: ''
    }

    handleChange = (event) => {
        this.setState({
            keyword: event.target.value
        })
    }
    render() {
        return(
            <>
            <Navbar bg="light" variant="light" >
    
                <Navbar.Brand to="/" className="logo"> SSM </Navbar.Brand>
    
                <Nav className="mr-auto">    
                    <NavLink exact to="/products"> View Products </NavLink>
                    
                    <NavLink exact to="/products/add"> Add Products </NavLink>
    
                    <NavLink exact to="/about"> About </NavLink>
    
                    <NavLink exact to="/login"> Login </NavLink>
    
                <NavLink exact to="/signup"> Sign up </NavLink>        
                
                </Nav>
    
                <Form inline className="search-bar">
                    <FormControl onChange={this.handleChange} value={this.state.keyword} type="search" placeholder="Search product" />
                    <Button className="search-button" onClick={() => this.props.handleSearch(this.state.keyword)}><img src="../images/search.png" alt="search" /></Button>
                </Form>
            </Navbar>
            </>
        )
    }
 
}

export default NavBar;