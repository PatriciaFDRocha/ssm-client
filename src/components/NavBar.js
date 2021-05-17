import React from 'react';
import { NavLink } from 'react-router-dom';
import { Button, Navbar, Nav, Form, FormControl } from 'react-bootstrap';
import { logout } from '../api';
import  '../styles/navbar.css';

class NavBar extends React.Component {
    state = {
        keyword: ''
    }

    handleChange = (event) => {
        this.setState({
            keyword: event.target.value
        })
    }

    logoutUser = async () => {
        const { setCurrentUser } = this.props;

        await logout();
        setCurrentUser(null);
    }

    render() {
        const { loggedInUser } = this.props;

        return loggedInUser ? (
            <div>

            <Navbar bg="light" expand="lg">
                <Navbar.Brand href="/" className="logo" > SSM </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">

                    <NavLink exact to="/products"> View Products </NavLink>
                                    
                    <NavLink exact to="/products/add"> Add Products </NavLink>

                    <NavLink exact to="/about"> About </NavLink>

                </Nav>
                <Form inline className="search-bar">
                    <FormControl className="mr-sm-2" onChange={this.handleChange} value={this.state.keyword} type="search" placeholder="Search product" />
                    <Button className="search-button" onClick={() => this.props.handleSearch(this.state.keyword)}><img src="../images/search.png" alt="search" /></Button>
                </Form>
                <NavLink exact to="/"> <Button onClick={this.logoutUser} variant="warning" >Logout</Button> </NavLink>
                </Navbar.Collapse>
            </Navbar>

            <h3 className="welc" > Welcome {loggedInUser.name} </h3>
            
            </div>
        ) : (
            <Navbar bg="light" expand="lg">
                <Navbar.Brand href="/" className="logo" > SSM </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">

                    <NavLink exact to="/products"> View Products </NavLink>

                    <NavLink exact to="/about"> About </NavLink>

                    <NavLink exact to="/login"> Login </NavLink>

                    <NavLink exact to="/signup"> Sign up </NavLink>
                </Nav>
                    <Form inline className="search-bar">
                    <FormControl className="mr-sm-2" onChange={this.handleChange} value={this.state.keyword} type="search" placeholder="Search product" />
                    <Button className="search-button" onClick={() => this.props.handleSearch(this.state.keyword)}><img src="../images/search.png" alt="search" /></Button>
                </Form>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}

export default NavBar;