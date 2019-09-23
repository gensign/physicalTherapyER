import React, { Component } from 'react'
import axios from 'axios';
import {store} from '../../redux/store';

export default class SaveNote extends Component {
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
                <span>Billing: </span>
                <span>Subjective: </span>
                <span>Objective: </span>
                <span>Assessment: </span>
                <span>Plan: </span>
            </div>
        )
    }
}
