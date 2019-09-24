import React, { Component } from 'react'
import axios from 'axios';
import store from '../../redux/store';

export default class Billing extends Component {
    constructor(props) {
        super(props)

        this.state = {
            cptCodes: [],
            toggle: false,
            choosenCPT: '',
            units: 0
        };
        store.subscribe(() => this.setState({ pid: store.getState().choosenPt}));
    };

    componentDidMount() {
        axios.get('/cptcodes').then(res => {
            this.setState({
                cptCodes: res.data
            })
        }).catch(err => alert('Not connected to DataBase'));
        this.setState({ pid: store.getState().choosenPt});
    };

    toggle = () => {
        this.setState({
            toggle: true
        });
    };

    handleChange = (e, key) => {
        this.setState({
            [key]: e.target.value
        });
    }

    subjective = () => {
        console.log('billing');
        console.log('');
        const { choosenCPT, units } = this.state;
        console.log('choosenCPT', choosenCPT);
        axios.post(`/patient/${this.state.pid}/billing`, { cpt_code: choosenCPT, units }).then(res => {
            console.log('pushing to database');
            this.props.history.push('/webnote/subjective');
        }).catch(err => alert('Unable to send data to DataBase'));
    };

    cancel = () => {
        this.setState({
            cptCodes: [],
            toggle: false,
            choosenCPT: '',
            units: 0
        });
        this.props.history.push('/webnote/choose');
    }
    render() {
        return (
            <div>
                <h1>Billing</h1>
                <div className='cptexamples'>
                    <li>1 Unit: 8-22 minutes</li>
                    <li>2 Units: 23-37 minutes</li>
                    <li>3 Units: 38-52 minutes</li>
                    <li>4 Units: 53-67</li>
                    <li>5 Units: 68-82</li>
                    <li>6 Units: 83+</li>
                </div>
                <div>
                    <span>CPT Code: </span>
                    <select onChange={(e) => this.handleChange(e, 'choosenCPT')}>
                        <option></option>
                        {this.state.cptCodes.map(el => {
                            return (
                                <option key={el.cpt_code} value={el.cpt_code}>
                                    {el.cpt_type}
                                </option>
                            )
                        })}
                    </select>
                    <span>Units: </span>
                    <select onChange={(e) => this.handleChange(e, 'units')}>
                        <option></option>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                        <option>6</option>
                    </select>
                    <button onClick={this.cancel}>Cancel</button>
                    <button onClick={this.subjective}>Subjective</button>
                </div>
            </div>
        )
    };
};
