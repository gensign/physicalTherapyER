import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import store from '../../redux/store';
import './UpdateUser.css';

class UpdateUser extends Component {
    constructor() {
        super()
        this.state = {
            username: '',
            email: ''
        };
        store.subscribe(() => this.setState(store.getState()))
    };

    cancel = () => {
        this.setState({
            username: '',
            email: ''
        });
        this.props.history.push('/');
    };

    submit = () => {
        console.log('Submitting Changes');
        console.log('');
        console.log('state: ', this.state);
        const { username, email } = this.state;
        axios.put(`/auth/update`, { username, email }).then(res => {
            console.log('res: ', res.data);
            this.props.history.push('/');
        }).catch(err => alert('Unable to connect to Database'));
    };

    handleChange = (e, key) => {
        this.setState({
            [key]: e.target.value
        });
    };

    render() {
        return (
            <div className='updateUserBody'>
                <div className='updateWrapper'>
                    <div className='updateLogo'>
                        <h1>Update User Information</h1>
                    </div>
                    <form className='updateInputs'>
                        <span>Username: </span>
                        <input type='text'
                            placeholder=''
                            name='username'
                            onChange={(e) => this.handleChange(e, 'username')} />
                        <span>Email: </span>
                        <input type='text'
                            placeholder=''
                            name='email'
                            onChange={(e) => this.handleChange(e, 'email')} />
                    </form>
                </div>
                <div className='updateButtons'>
                    <button onClick={this.cancel}>Cancel</button>
                    <button onClick={this.submit}>Submit</button>
                </div>
            </div>
        )
    }
}
export default connect(null)(UpdateUser)