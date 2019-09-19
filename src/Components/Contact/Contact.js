import React, { Component } from 'react'
import './Contact.css';

export default class Contact extends Component {
    state = {
        senderEmail: '',
        subject: '',
        content: ''
    };

    handleChange = (e, key) => {
        this.setState({
            [key]: e
        });
    };

    cancel = () => {
        this.setState({
            senderEmail: '',
            subject: '',
            content: ''
        });
    };

    render() {
        return (
            <div className='contactBody'>
                <div className='contactInput'>
                    <span>Sender's Email: <input type='text' onChange={(e) => { this.handleChange(e, 'senderEmail') }} /></span>
                    <span>Sender's Email: <input type='text' onChange={(e) => { this.handleChange(e, 'subject') }} /></span>
                    <span>Sender's Email: <input type='text' onChange={(e) => { this.handleChange(e, 'content') }} /></span>
                </div>
                <div className='contactButtons'>
                    <button>Send Email</button>
                    <button onClick={this.cancel}>Cancel</button>
                </div>
            </div>
        )
    }
}
