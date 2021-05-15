import React from 'react';
import { NavLink } from 'react-router-dom';
import { signup } from '../api';

class Signup extends React.Component {
    state = {
        username: "",
        email: "",
        password: "",
    };

    handleChange = (event)  => {
        const {name, value} = event.target;
        
        this.setState({
            [name]: value
        })
    };

    handleFormSubmit = async (event) => {
        event.preventDefault();

        const { username, email, password } = this.state;

        await signup(username, email, password);

        this.props.history.push('/login');
    }


    render() {
        const { username, email, password } = this.state;

        return(
            <>
            <form onSubmit={this.handleFormSubmit}>
                <label>Username</label>
                <input type="text" name="username" value={username} onChange={this.handleChange} />

                <label>Email</label>
                <input type="email" name="email" value={email} onChange={this.handleChange} />

                <label>Password</label>
                <input type="password" name="password" value={password} onChange={this.handleChange} />

                <button>Create Account</button>
            </form>
            <p>
                Already have an account?
                <NavLink to="/login" >Login</NavLink>
            </p>
            </>
        )
    }
}

export default Signup;
