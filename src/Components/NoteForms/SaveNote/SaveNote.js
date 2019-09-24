import React, { Component } from 'react'
import axios from 'axios';
import { connect } from 'react-redux';
import { resetAllAction } from '../../redux/reducer';
import './SaveNote.css';

class SaveNote extends Component {

    initialState = {
        choosenPt: '',
        subjective: {},
        objective: {},
        assessment: {},
        plan: {}
    };

    constructor() {
        super()
    };

    submit = () => {
        console.log('Submitting Note')
        const { choosenPt, subjective, objective, assessment, plan } = this.props
        axios.post(`/patient/${choosenPt}/note`, {subjective, objective, assessment, plan}).then(res => {
            console.log('response: ', res.data);
            this.props.history.push('/');
        }).catch(err => {
            console.log('Didnt work due to err: ', err);
        });
    };

    editSubjective = () => {
        this.props.history.push('/webnote/subjective');
    };

    editObjective = () => {
        this.props.history.push('/webnote/objective');
    };

    editAssessment = () => {
        this.props.history.push('/webnote/assessment');
    };

    editPlan = () => {
        this.props.history.push('/webnote/plan');
    };


    cancel = () => {
        this.props.resetAllAction();
        this.props.history.push('/');
    };

    render() {
        return (
            <div>
                <div>
                    Patient Id: {this.props.choosenPt}
                </div>
                <div className="soapWrapper">
                    <div className="subjectiveDisplay boxDisplay">
                        <h3>Subjective</h3>
                        <table>
                            <tbody>
                                <tr>
                                    <td>Pain: </td><td>{this.props.subjective.painInput}</td>
                                </tr>
                                <tr>
                                    <td>Mood: </td><td>{this.props.subjective.moodInput}</td>
                                </tr>
                                <tr>
                                    <td>Orientation: </td><td>{this.props.subjective.orientationInput}</td>
                                </tr>
                                <tr>
                                    <td>Additional Info: </td><td>{this.props.subjective.additionalInfoInput}</td>
                                </tr>
                            </tbody>
                        </table>
                        <button onClick={this.editSubjective}>Edit</button>
                    </div>
                    <div className="objectiveDisplay boxDisplay">
                        <button onClick={this.editObjective}>Edit</button>
                    </div>
                    <div className="assessmentDisplay boxDisplay">
                        <button onClick={this.editAssessment}>Edit</button>
                    </div>
                    <div className="planDisplay boxDisplay">
                        <button onClick={this.editPlan}>Edit</button>
                    </div>
                </div>
                <div className="actionButtons">
                    <button onClick={this.submit}>Submit</button>
                    <button onClick={this.cancel}>Cancel</button>
                </div>
            </div>
        )
    }
};

const mapStateToProps = (reduxState) => {
    const { choosenPt, subjective, objective, assessment, plan } = reduxState;
    return { choosenPt, subjective, objective, assessment, plan };
}

const mapDispatchToProps = {
    resetAllAction
}

export default connect(mapStateToProps, mapDispatchToProps)(SaveNote);