import React, { Component } from 'react';
import axios from 'axios';
import { userAuthAction } from '../../redux/reducer';
import {connect} from 'react-redux';
import store from '../../redux/store';

class UpdateUser extends Component {
    constructor() {
        super()
        this.state = {
            username: '',
            email: ''
        };
        store.subscribe(() => this.setState(store.getState()))
    };

    // componentDidMount() {
    //     axios.get('/auth/')
    // }
    // handleChange = (e) => {
    //     this.setState({
    //         [e.target.name]: e.value
    //     });
    // };

    // cancel = () => {
    //     this.setState({
    //         username: '',
    //         email: ''
    //     });
    //     this.props.history.push('/');
    // };

    // submit = () => {
    //     console.log('Submitting Changes');
    //     console.log('');
    //     if (!userAuthAction)
    //     axios.put(`/auth/update/${id}`).then(res => {
            
    //     }).catch(err => alert('Unable to connect to Database'));
    // };

    render() {
        return (
            <div>
                Update User Information
                <form>
                    <span>Username: </span>
                    <input type='text'
                        placeholder=''
                        name='username'
                        onChange={this.handleChange} />
                    <span>Email: </span>
                    <input type='text'
                        placeholder=''
                        name='email'
                        onChange={this.handleChange} />
                </form>
                <button onClick={this.submit}>Submit</button>
                <button onClick={this.cancel}>Cancel</button>
            </div>
        )
    }
}
export default connect(null)(UpdateUser)