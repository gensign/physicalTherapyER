import React, { Component } from 'react';
import { connect } from 'react-redux';
import { subjectiveUpdateAction } from '../../redux/reducer';
import './Subjective.css';

class Subjective extends Component {

    initialState = {
        painInput: 0,
        moodInput: '',
        orientationInput: '',
        additionalInfoInput: ''
    }

    constructor() {
        super()

        this.state = this.initialState;
    };

    componentDidMount() {
        this.setState(this.props.subjective);
    }

    handleChange = (e, key) => {
        this.setState({
            [key]: e.target.value
        });
    };

    goToObjective = () => {
        console.log('submitting Subjective\n');
        console.log('subjective: ', this.state);

        this.props.subjectiveUpdateAction(this.state);
        this.props.history.push('/webnote/objective');
    };

    previous = () => {
        this.props.history.push('/webnote/billing');
    };

    render() {
        return (
            <div className='subjectiveBody'>
                <div className='subjectiveWrapper'>
                    <div className='subjectiveTitle'>
                        <h1>Subjective</h1>
                    </div>
                    <div className='subjectiveInput'>
                        <table className="subjectiveTable">
                            <tr>
                                <td><span>Pain: </span></td>
                                <td>
                                    <select onChange={(e) => this.handleChange(e, 'painInput')}>
                                        <option selected={this.state.painInput === 0}>0</option>
                                        <option selected={this.state.painInput === 1}>1</option>
                                        <option selected={this.state.painInput === 2}>2</option>
                                        <option selected={this.state.painInput === 3}>3</option>
                                        <option selected={this.state.painInput === 4}>4</option>
                                        <option selected={this.state.painInput === 5}>5</option>
                                        <option selected={this.state.painInput === 6}>6</option>
                                        <option selected={this.state.painInput === 7}>7</option>
                                        <option selected={this.state.painInput === 8}>8</option>
                                        <option selected={this.state.painInput === 9}>9</option>
                                        <option selected={this.state.painInput === 10}>10</option>
                                    </select>
                                </td>
                            </tr>
                            <tr>
                                <td><span>Mood: </span></td>
                                <td>
                                    <input type='text' value={this.state.moodInput} onChange={(e) => this.handleChange(e, 'moodInput')} />
                                </td>
                            </tr>
                            <tr>
                                <td><span>Orientation: </span></td>
                                <td>
                                    <select onChange={(e) => this.handleChange(e, 'orientationInput')}>
                                        <option></option>
                                        <option selected={this.state.orientationInput === 'Time'}>Time</option>
                                        <option selected={this.state.orientationInput === 'Place'}>Place</option>
                                        <option selected={this.state.orientationInput === 'Person'}>Person</option>
                                        <option selected={this.state.orientationInput === 'All'}>All</option>
                                        <option selected={this.state.orientationInput === 'None'}>None</option>
                                    </select>
                                </td>
                            </tr>
                            <tr>
                                <td><span>Additional information: </span></td>
                                <td>
                                    <input type='text' value={this.state.additionalInfoInput} onChange={(e) => this.handleChange(e, 'additionalInfoInput')} />
                                </td>
                            </tr>
                        </table>
                    </div>
                    <div className='subjectiveButtons'>
                        <button onClick={this.previous}>Previous</button>
                        <button onClick={this.goToObjective}>Objective</button>
                    </div>
                </div>
            </div>
        )
    };
};

const mapStateToProps = (reduxState) => {
    const { subjective } = reduxState;
    return { subjective };
}

const mapDispatchToProps = {
    subjectiveUpdateAction
}

export default connect(mapStateToProps, mapDispatchToProps)(Subjective);
