import React, { Component } from 'react';
import axios from 'axios';
import {store} from '../../redux/store';

export default class Assessment extends Component {
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
                <h1>Assessment</h1>
                <span>Assessment: </span>
                <input type='type' />
            </div>
        )
    }
}
