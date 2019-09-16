import React, { Component } from 'react'

export default class Plan extends Component {
    state = {

    };
    
    render() {
        return (
            <div>
                <h1>Plan</h1>
                <span>Diagnosis</span>
                <input type='text' />
                <span>Number of Visits a Week</span>
                <input type='number' />
                <span>Plan of Care</span>
                <input type='text' />
                <button>View Note</button>
                <button>Cancel</button>
            </div>
        )
    }
}
