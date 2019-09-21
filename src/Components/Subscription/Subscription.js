import React, { Component } from 'react';

export default class Subscription extends Component {
    render() {
        return (
            <div>
                <h1>Subscribe</h1>
                <h2>Subscribe to Get Access to Your Student's notes and Give Advice</h2>
                <h4>Subscribers get access to new features first!</h4>
                <h4>1 Week Free Trial</h4>
                <select>
                    <option></option>
                    <option>1 month</option>
                    <option>6 months</option>
                    <option>1 year</option>
                </select>
                <button>Subscribe</button>
                {/* impliment stripe for payment options */}
            </div>
        )
    }
}
