import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';

// action builder
import { setUser } from '../../redux/reducer';

class Login extends Component {
    state = {
        username: '',
        password: ''
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
        const { username, password } = this.state;
        console.log('username: ', username);
        axios.post('/auth/login', { username, password })
            .then(res => {
                this.props.setUser({ username, password });
                this.props.history.push('/');
            }).catch(err => {
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
            <div>
                <h1>Login</h1>
                <span>Username: </span>
                <input type='text' onChange={(e) => this.handleChange(e, 'username')} />
                <span>Password: </span>
                <input type='password' onChange={(e) => this.handleChange(e, 'password')} />
                <button onClick={this.login}>Login</button>
                <button>Cancel</button>
            </div>
        )
    };
}

export default connect(null, { setUser })(Login)