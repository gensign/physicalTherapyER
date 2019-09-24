import React, { Component } from 'react'
import axios from 'axios';

import { connect } from 'react-redux';
import { store } from '../../redux/store';
import { patientUpdateAction } from '../../redux/reducer';

import './ChoosePatient.css';

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
        }).catch(err =>
            {
                console.log('Not connected to DB', err);
                if(err.response.status === 401) {
                    this.props.history.push('/auth/login')
                } else {
                    alert('Something went wrong!\n ', err.response.data);
                }
            });
    };

    cancel = () => {
        this.setState({
            patients: []
        });
    };

    handleChange(e, key) {
        this.setState({
            [key]: e.target.value
        })
    }

    billing = () => {
        store.dispatch(patientUpdateAction(this.state));
        this.props.history.push('/webnote/billing');
    }

    // addPatient = () => {
    //     const { choosenPt } = this.state;
    //     axios.post('/api/patients', { choosenPt }).then(res => {
    //     }).catch(err => alert('Unable to Connect to DataBase'));
    //     store.dispatch(patientUpdateAction(this.state));
    //     this.props.history.push('/webnote/billing');

    // }

    render() {
        return (
            <div className='choosePatientBody'>
                <h1>Choose Patient ID</h1>
                <div className='choosePatientSelect'>
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
                </div>
                {/* <span>Add Patient</span>
                <input type='text' onChange={(e) => this.handleChange(e, 'choosenPt')} />
                <button onClick={this.addPatient}>Add Patient</button> */}
                <div className='choosePatientButtons'>
                    <button onClick={this.billing}>Billing</button>
                    <button onClick={this.cancel}>Cancel</button>
                </div>
            </div>
        )
    }
}

export default connect(null)(ChoosePatient);