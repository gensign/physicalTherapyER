import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';

import { connect } from 'react-redux';
import { store } from '../../redux/store';
import { patientUpdateAction } from '../../redux/reducer';

class ChoosePatient extends Component {
    constructor() {
        super()
        
        this.state = {
            patients: [],
            choosenPt: ''
        };
        store.subscribe(() => this.setState(store.getState()));
    };

    componentDidMount() {
        axios.get('/api/patients').then(res => {
            console.log('res: ', res);
            this.setState({
                patients: res.data
            });
        }).catch(err => alert('Not connecting to DB', err));
    };

    cancel = () => {
        this.setState({
            patients: []
        });
    };

    handleChange (e, key) {
        this.setState({
            [key]: e.target.value
        })
    }

    billing = () => {
        // needs to change state to the selected patient option. 
      
        store.dispatch(patientUpdateAction(this.state));
        this.props.history.push('/webnote/billing');
    }

    render() {
        return (
            <div>
                <h1>Choose Patient ID</h1>
                <select onChange={(e) => this.handleChange(e, 'choosenPt')}>
                    <option></option>
                    {this.state.patients.map(el => {
                        return (
                            <option key={el.pt_id} value={el.pt_id}>
                                {el.pt_code}
                            </option>
                        )
                    })}
                </select>
                <button onClick={this.billing}>Billing</button>
                <button onClick={this.cancel}>Cancel</button>
            </div>
        )
    }
}

export default connect(null)(ChoosePatient);