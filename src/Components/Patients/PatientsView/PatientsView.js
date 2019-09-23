import React, { Component } from 'react'
import axios from 'axios';

export default class PatientsView extends Component {
    state = {
        patients: []
    };

    componentDidMount = () => {
        axios.get('/api/patients').then(res => {
            this.setState({
                patients: res.data
            });
        }).catch(err => alert('Could not connect to DB'));
    };

    addPt = () => {
        axios.post('/api/patients').then().catch();
    };

    render() {
        return (
            <div>
                Patients
                <button>Add Patient</button>
                <ul>
                    {this.state.patients.map(el => {
                        return (
                            <li key={el.pt_id}>
                            {el.pt_code}
                        </li>  
                        )
                    })}
                </ul>
                {/* {this.state.patients[0].pt_code} */}
            </div>
        )
    }
}
