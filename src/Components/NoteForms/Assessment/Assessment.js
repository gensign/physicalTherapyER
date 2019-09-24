import React, { Component } from 'react';
import { connect } from 'react-redux';
import { assessmentUpdateAction } from '../../redux/reducer';
import './Assessment.css';

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
            <div className='assessmentBody'>
                <div className='assessmentWrapper'>
                    <div className='assessmentTitle'>
                        <h1>Assessment</h1>
                    </div>
                    <div className='assessmentInput'>
                        <span>Assessment: </span>
                        <input type='text'
                            value={this.state.assessmentInput}
                            onChange={(e) => this.handleChange(e, 'assessmentInput')} />
                    </div>
                    <div className='assessmentButtons'>
                        <button onClick={this.previous}>Previous</button>
                        <button onClick={this.goToPlan}>Plan</button>
                    </div>
                </div>
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