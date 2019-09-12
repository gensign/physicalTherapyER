import React, { Component } from 'react'

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
        this.props.history.push('/')
    };

    render() {
        return (
            <div>
                <span>Sender's Email: <input type='text' onChange={(e)=> {this.handleChange(e, 'senderEmail')}}/></span>
                <span>Sender's Email: <input type='text' onChange={(e)=> {this.handleChange(e, 'subject')}}/></span>
                <span>Sender's Email: <input type='text' onChange={(e)=> {this.handleChange(e, 'content')}}/></span>
                <button>Send Email</button>
                <button onClick={this.cancel}>Cancel</button>
            </div>
        )
    }
}
