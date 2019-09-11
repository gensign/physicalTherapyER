import React, { Component } from 'react'
import axios from 'axios';
import { connect } from 'react-redux';

// Import action builders
import { setUser } from '../redux/reducer';


class Register extends Component {
    state = {
        username: '',
        email: '',
        password: ''
    };

    handleChange = (e, key) => {
        this.setState({
            [key]: e.target.value
        });
    };

    register = () => {

    };

    cancel = () => {
        
    }

    render() {
        return (
            <div>
                <h1>Register</h1>
                <span>Username: <input type='text' /></span>
                <span>Email: <input type='text' /></span>
                <span>Password: <input type='password' /></span>
                <button>Register</button>
                <button>Cancel</button>
            </div>
        )
    };
};

export default connect(null, { setUser })(Register);