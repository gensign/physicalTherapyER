import React, { Component } from 'react'
import axios from 'axios';
import './Register.css';
import { connect } from 'react-redux';

// Import action builders
import { userUpdateAction } from '../../redux/reducer';

import { store } from '../../redux/store';


class Register extends Component {
    state = {
        username: '',
        email: '',
        password: '',
        authenticated: false
    };

    handleChange = (e, key) => {
        this.setState({
            [key]: e.target.value
        });
    };

    register = () => {
        console.log('Registering');
        console.log('');
        console.log(this.state);
        const { username, email, password } = this.state;
        console.log('username: ', username);
        axios.post('/auth/register', { username, email, password })
            .then(res => {
                console.log('username: ', username);
                console.log('');
                store.dispatch(userUpdateAction({ username, loggedIn: false }));
                console.log('username: ', username);
                console.log('');
                this.props.history.push('/');
            }).catch(err => {
                alert('Username, Email, or Password in use');
            });
    };

    cancel = () => {
        this.setState({
            username: '',
            password: ''
        });
        this.props.history.push('/');
    };

    render() {
        return (
            <div className='registerBody'>
                <h1>Register</h1>
                <div className='registerInputs'>
                    <span>Username: <input type='text' onChange={(e) => { this.handleChange(e, 'username') }} /></span>
                    <span>Email: <input type='text' onChange={(e) => { this.handleChange(e, 'email') }} /></span>
                    <span>Password: <input type='password' onChange={(e) => { this.handleChange(e, 'password') }} /></span>
                </div>
                <div className='registerButtons'>
                    <button onClick={this.register}>Register</button>
                    <button onClick={this.cancel}>Cancel</button>
                </div>
            </div>
        )
    };
};

export default connect(null)(Register);