import React, { Component } from 'react'
import axios from 'axios';

export default class ChoosePatient extends Component {
    state = {
        patients: [],
        patientIndex: 0
    };

    componentDidMount() {
        axios.get('/api/patients').then(res => {
            console.log('res: ', res);
            this.setState({
                patients: res.data
            });
        }).catch(err => console.log('Not connecting', err));
    };

    cancel = () => {
        this.setState({
            patients: []
        });
    };
    
    render() {
        return (
            <div>
                <h1>Choose Patient ID</h1>
                {this.state.patients[this.state.patientIndex]}
                <select>
                    {/* is not saving the array */}
                    <option></option>
                </select>
                <button>Billing</button>
                <button onClick={this.cancel}>Cancel</button>
            </div>
        )
    }
}
