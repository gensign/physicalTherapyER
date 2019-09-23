import React, { Component } from 'react';
import axios from 'axios';
import store from '../../redux/store';
import { subjectiveUpdateAction } from '../../redux/reducer';

export default class Subjective extends Component {
    constructor() {
        super()

        this.state = {
            painInput: 0,
            moodInput: '',
            orientationInput: '',
            additionalInfoInput: ''
        };
        store.subscribe(() => this.setState({ pid: store.getState().choosenPt}));
    };

    componentDidMount() {
        this.setState({ pid: store.getState().choosenPt });
    };

    handleChange = (e, key) => {
        this.setState({
            [key]: e.target.value
        });
    };

    submit = () => {
        console.log('submitting Subjective');
        console.log('');
        const subjective = this.state
        console.log('subjective: ', subjective);
        console.log('');
        store.dispatch(subjectiveUpdateAction(subjective));
        this.props.history.push('/webnote/objective');
    };

    render() {
        return (
            <div>
                <h1>Subjective</h1>
                <span>Pain: </span>
                <select onChange={(e) => this.handleChange(e, 'painInput')}>
                    <option></option>
                    <option>0</option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                    <option>6</option>
                    <option>7</option>
                    <option>8</option>
                    <option>9</option>
                    <option>10</option>
                </select>
                <span>Mood: </span>
                <input type='text'
                    onChange={(e) => this.handleChange(e, 'moodInput')}
                />
                <span>Orientation: </span>
                <select onChange={(e) => this.handleChange(e, 'orientationInput')}>
                    <option></option>
                    <option>Time</option>
                    <option>Place</option>
                    <option>Person</option>
                    <option>All</option>
                    <option>None</option>
                </select>
                <span>Additional information: </span>
                <input type='text'
                    onChange={(e) => this.handleChange(e, 'additionalInfoInput')}
                />
                <button onClick={this.submit}>Objective</button>
                <button>Cancel</button>
            </div>
        )
    };
};
