import React, { Component } from 'react'
import axios from 'axios';
import {store} from '../../redux/store';

export default class Plan extends Component {
    constructor () {
        super()
        this.state = {

        };
        store.subscribe(() => this.setState({ pid: store.getState().choosenPt}));
    };

    componentDidMount() {
        this.setState({ pid: store.getState().choosenPt });
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
