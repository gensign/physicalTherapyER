import React, { Component } from 'react'
import axios from 'axios';

export default class ChoosePatient extends Component {
    state = {
        patients: []
    };

    componentDidMount() {
        axios.get('/api/patients').then(res => {
            this.setState({
                patients: res.data
            });
        });
    };

    render() {
        return (
            <div>
                <h1>Choose Patient ID</h1>
                <select>
                    {/* is not saving the array */}
                    <option></option>
                </select>
            </div>
        )
    }
}
