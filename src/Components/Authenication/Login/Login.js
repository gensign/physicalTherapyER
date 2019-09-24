import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import './Login.css';

// action builder
import { userUpdateAction, userAuthAction } from '../../redux/reducer';

import { store } from '../../redux/store';

class Login extends Component {
    constructor() {
        super()
        this.state = {
            username: '',
            password: '',
            authenticated: false
        };
    };


    handleChange = (e, key) => {
        this.setState({
            [key]: e.target.value
        });
    };

    login = () => {
        console.log('Logged In');
        console.log('');
        console.log('state: ', this.state);
        console.log('');
        const { username, password, authenticated } = this.state;
        console.log('username: ', username);
        axios.post('/auth/login', { username, password, authenticated })
            .then(res => {
                store.dispatch(userUpdateAction(this.state))
                this.setState({
                    authenticated: true
                });
                console.log('Logged In: ', this.state.authenticated);
                store.dispatch(userAuthAction(this.state));
                this.props.history.push('/');
            }).catch(err => {
                console.log("caught error: ", err);
                alert('Incorrect Username or Password');
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
            <div className='loginBody'>
                <div className='loginWrapper'>
                    <div className='loginLogo'>
                        <h1>Login</h1>
                    </div>
                    <div className='loginInputs'>
                        <span>Username: </span>
                        <input type='text' onChange={(e) => this.handleChange(e, 'username')} />
                        <span>Password: </span>
                        <input type='password' onChange={(e) => this.handleChange(e, 'password')} />
                    </div>
                </div>
                <div className='loginButtons'>
                    <button onClick={this.login}>Login</button>
                    <button>Cancel</button>
                </div>
            </div>
        )
    };
}

export default connect(null)(Login)