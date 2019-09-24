import React, { Component } from 'react';
import { connect } from 'react-redux';
import { assessmentUpdateAction } from '../../redux/reducer';

class Assessment extends Component {

    initialState = {
        assessmentInput: ''
    }

    constructor() {
        super()
        this.state = this.initialState;
    };

    componentDidMount() {
        this.setState(this.props.assessment);
    };

    handleChange = (e, key) => {
        this.setState({
            [key]: e.target.value
        });
    };

    goToPlan = () => {
        console.log('Submitting Assessment');
        this.props.assessmentUpdateAction(this.state);
        this.props.history.push('/webnote/plan');
    };

    previous = () => {
        this.props.history.push('/webnote/objective');
    }

    render() {
        return (
            <div>
                <h1>Assessment</h1>
                <div className='Assesment'>
                    <span>Assessment: </span>
                    <input type='text'
                        value={this.state.assessmentInput}
                        onChange={(e) => this.handleChange(e, 'assessmentInput')} />
                </div>
                <button onClick={this.goToPlan}>Plan</button>
                <button onClick={this.previous}>Previous</button>
            </div>
        )
    }
}

const mapStateToProps = (reduxState) => {
    const { assessment } = reduxState;
    return { assessment };
}

const mapDispatchToProps = {
    assessmentUpdateAction
}

export default connect(mapStateToProps, mapDispatchToProps)(Assessment);