import React, { Component } from 'react'
import axios from 'axios';
import './PatientsView.css'

export default class PatientsView extends Component {
    state = {
        patients: [],
        pt_code: 0
    };

    componentDidMount = () => {
        axios.get('/api/patients').then(res => {
            this.setState({
                patients: res.data
            });
        }).catch(err => {
            if (err.response.status === 401) {
                this.props.history.push('/auth/login')
            } else {
                alert('Something went wrong!\n ', err.response.data);
            }
        });
    };

    handleAddPt = (e, key) => {
        this.setState({
            [key]: e.target.value
        });
    };

    addPt = () => {
        const { pt_code } = this.state
        console.log('pt_code: ', pt_code);
        axios.post('/api/patients', { pt_code }).then(res => {
            console.log('response: ', res.data);
            this.props.history.push('/webnote/choose');
        }).catch(err => {
            console.log('Didnt work due to err: ', err);
        });
    };

    deletePt = (value) => {
        console.log('Deleting Pt');
        console.log('value: ', value);
        axios.delete(`/api/patients/${value}`).then(res => {
            console.log('res: ', res.data)
            this.setState({
                patients: res.data
            });
        }).catch(err => {
            console.log('Didnt work due to err: ', err);
        });
    };

    cancel = () => {
        this.setState({
            pt_code: 0
        });
        this.props.history.push('/');
    }

    render() {
        return (
            <div className='patientBody'>
                <div className='patientsWrapper'>
                    <div className='patientsTitle'>
                        <h1>List Of Your Patients</h1>
                    </div>
                    <ul className='patientList'>
                        {this.state.patients.map(el => {
                            return (
                                <div>
                                    <li key={el.pt_id}>
                                        {el.pt_code}
                                    </li>
                                    <button value={el.pt_id} onClick={() => this.deletePt(el.pt_id)}>Delete Patient</button>
                                </div>
                            )
                        })}
                    </ul>
                    <div className='patientInput'>
                        <input type='number' placeholder='Patient ID code'
                            onChange={(e) => this.handleAddPt(e, 'pt_code')} />
                        <button onClick={this.cancel}>Cancel</button>
                        <button onClick={this.addPt}>Add Patient</button>
                    </div>
                    {/* {this.state.patients[0].pt_code} */}
                </div>
            </div>
        )
    }
}
