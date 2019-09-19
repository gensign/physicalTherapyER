import React, { Component } from 'react'
import axios from 'axios';

export default class PatientsView extends Component {
    state = {
        patients: []
    };

    componentDidMount = () => {
        axios.get('/api/patients').then(res => {
            this.setState({
                patients: res.data.patients
            });
        }).catch(err => alert('Could not connect to DB'));
    };

    addPt = () => {

    };

    render() {
        return (
            <div>
                Patients
                <button>Add Patient</button>
               {this.state.patients}
            </div>
        )
    }
}
