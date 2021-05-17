import React from 'react';
import { NavLink } from 'react-router-dom';
import { signup } from '../api';

class Signup extends React.Component {
    state = {
        name: "",
        username: "",
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

        const { name, username, password } = this.state;

        await signup(name, username, password);

        this.props.history.push('/login');
    }


    render() {
        const { name, username, password } = this.state;

        return(
            <>
            <div class="container" style={{ height: '100%' }}>
                    <div class="d-flex justify-content-center h-100">
                        <div class="card">
                            <div class="card-header">
                                <h3>Sign Up</h3>
                            </div>
                            <div class="card-body">
                                <form onSubmit={this.handleFormSubmit}>
                                    <div class="input-group form-group">
                                        <div class="input-group-prepend">
                                            <span class="input-group-text"><i class="fas fa-user"></i></span>
                                        </div>
                                        <input type="text" class="form-control" name="name" value={name} onChange={this.handleChange}  placeholder="username"/>
                                    </div>

                                    <div class="input-group form-group">
                                        <div class="input-group-prepend">
                                            <span class="input-group-text"><i class="fas fa-user"></i></span>
                                        </div>
                                        <input type="email" class="form-control" name="username" placeholder="email" value={username} onChange={this.handleChange}/>   
                                    </div>

                                    <div class="input-group form-group">
                                        <div class="input-group-prepend">
                                            <span class="input-group-text"><i class="fas fa-key"></i></span>
                                        </div>
                                        <input type="password"  placeholder="password" name="password" value={password} onChange={this.handleChange} class="form-control"/>
                                    </div>
                                    
                                    <div class="form-group">
                                        <input type="submit" value="Sign Up" class="btn float-right login_btn" />
                                    </div>
                                </form>
                            </div>

                            <div class="card-footer">
                                <div class="d-flex justify-content-center links">
                                Already have an account? <NavLink to="/login" > Login</NavLink>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default Signup;
