import React from 'react';
import {login} from '../api';
import {NavLink} from 'react-router-dom';
import '../styles/Login.css';
import 'bootstrap/dist/css/bootstrap.min.css';


class Login extends React.Component {
    state = {
        email: "",
        password: "",
    };

    handleChange = (event) => {
        const { name, value } = event.target;

        this.setState({
            [name]: value,
        })
    };

    handleFormSubmit = async (event) => {
        event.preventDefault();
        const { email, password } = this.state;

        const response = await login( email, password);
        this.props.setCurrentUser(response.data);

        this.props.history.push("/");

    }

    render() {
        const { password, email } = this.state;
        return (
            <>
            <div class="container">
                    <div class="d-flex justify-content-center h-100">
                        <div class="card">
                            <div class="card-header">
                                <h3>Sign In</h3>
                                <div class="d-flex justify-content-end social_icon">
                                    <span><i class="fab fa-facebook-square"></i></span>
                                    <span><i class="fab fa-google-plus-square"></i></span>
                                </div>
                            </div>
                            <div class="card-body">
                                <form onSubmit={this.handleFormSubmit}>
                                    <div class="input-group form-group">
                                        <div class="input-group-prepend">
                                            <span class="input-group-text"><i class="fas fa-user"></i></span>
                                        </div>
                                        <input type="email" class="form-control" placeholder="email" name="email" value={email} onChange={this.handleChange} />
                                        
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
            </>
        )
    }
}

export default Login;

