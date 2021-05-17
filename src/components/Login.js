import React from 'react';
import { login } from '../api';
import {NavLink} from 'react-router-dom';
import '../styles/Login.css';


class Login extends React.Component {
    state = {
        username: "",
        password: "",
    };

    handleChange = (event) => {
        const { name, value } = event.target;

        this.setState({
            [name]: value,
        })
    };

    handleFormSubmit = async (event) => {
        const { setCurrentUser, history } = this.props;

        event.preventDefault();

        const { username, password } = this.state;

        const response = await login( username, password);
        setCurrentUser(response.data);

        history.push("/");

    }

    render() {
        const { username, password } = this.state;
        return (
            <div style={{backgroundColor: 'limegreen', height: '100%' }} >
            <div class="container">
            <div class="d-flex justify-content-center h-100">
                <div class="card">
                    <div class="card-header">
                        <h3>Login</h3>
                    </div>
                    <div class="card-body">

                        <form onSubmit={this.handleFormSubmit}>
                            
                            <div class="input-group form-group">
                                <div class="input-group-prepend">
                                    <span class="input-group-text"><i class="fa fa-user"></i></span>
                                </div>
                                <input type="email" class="form-control" placeholder="email" name="username" value={username} onChange={this.handleChange} />
                                
                            </div>

                                <div class="input-group form-group">
                                    <div class="input-group-prepend">
                                        <span class="input-group-text"><i class="fas fa-key"></i></span>
                                    </div>
                                    <input type="password" class="form-control" placeholder="password" name="password" value={password} onChange={this.handleChange} />
                                </div>
                                
                                <div class="form-group">
                                    <input type="submit" value="Login" class="btn float-right login_btn" />
                                </div>
                            </form>
                        </div>

                        <div class="card-footer">
                            <div class="d-flex justify-content-center links">
                                Don't have an account?<NavLink to="/signup"> Sign Up</NavLink>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        )
    }
}

export default Login;

