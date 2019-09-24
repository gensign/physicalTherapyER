import React, { Component } from 'react'
import { store } from '../../redux/store';
import { connect } from 'react-redux';
import { planUpdateAction } from '../../redux/reducer';

class Plan extends Component {

    initialState = {
        diagnosisInput: '',
        planOfCareInput: '',
        numberOfVisitsInput: 0
    };

    constructor() {
        super()
        this.state = this.initialState
    };

    componentDidMount() {
        this.setState(this.props.plan);
    };

    handleChange(e, key) {
        this.setState({
            [key]: e.target.value
        })
    };

    previous = () => {
        this.props.history.push('/webnote/assessment');
    };

    goToSaveNote = () => {
        console.log('Submitting Plan');
        this.props.planUpdateAction(this.state);
        this.props.history.push('/webnote/savenote');
    };

    render() {
        return (
            <div>
                <h1>Plan</h1>
                <span>Diagnosis</span>
                <input type='text'
                    value={this.state.diagnosisInput}
                    onChange={(e) => this.handleChange(e, 'diagnosisInput')} />
                <span>Number of Visits a Week</span>
                <input type='number'
                    value={this.state.planOfCareInput}
                    onChange={(e) => this.handleChange(e, 'planOfCareInput')} />
                <span>Plan of Care</span>
                <input type='text'
                    value={this.state.numberOfVisitsInput}
                    onChange={(e) => this.handleChange(e, 'numberOfVisitsInput')} />
                <button onClick={this.goToSaveNote}>View Note</button>
                <button onClick={this.previous}>Previous</button>
            </div>
        )
    }
}

const mapStateToProps = (reduxState) => {
    const { plan } = reduxState;
    return { plan };
}

const mapDispatchToProps = {
    planUpdateAction
}

export default connect(mapStateToProps, mapDispatchToProps)(Plan);