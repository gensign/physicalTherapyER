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

    submit = () => {
        console.log('Submitting Note')
        const { choosenPt, subjective, objective, assessment, plan } = this.props
        axios.post(`/patient/${choosenPt}/note`, { subjective, objective, assessment, plan }).then(res => {
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
            <div className='saveNoteBody'>
                <div className='saveNoteWrapper'>
                    <div className='savenoteTitle'>
                        <h1>
                            Patient Id: {this.props.choosenPt}
                        </h1>
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
                            <table>
                                <tbody>
                                    <tr>
                                        <td>ROM: </td>
                                        <td>{this.props.objective.romLocation}</td>
                                        <td>{this.props.objective.romDegress}</td>
                                        <td>{this.props.objective.romDegress}</td>
                                    </tr>
                                    <tr>
                                        <td>Strength: </td>
                                        <td>{this.props.objective.strengthLocation}</td>
                                        <td>{this.props.objective.strengthLevel}</td>
                                        <td>{this.props.objective.strengthMovement}</td>
                                    </tr>
                                    <tr>
                                        <td>Coordination: </td>
                                        <td>{this.props.objective.coordinationLocation}</td>
                                        <td>{this.props.objective.coordinationSelect}</td>
                                    </tr>
                                    <tr>
                                        <td>Sensation: </td>
                                        <td>{this.props.objective.sensationLocation}</td>
                                        <td>{this.props.objective.sensationselect}</td>
                                    </tr>
                                    <tr>
                                        <td>Ther Ex: </td>
                                        <td>{this.props.objective.therExInput}</td>
                                    </tr>
                                    <tr>
                                        <td>Ther Act: </td>
                                        <td>{this.props.objective.therActInput}</td>
                                    </tr>
                                    <tr>
                                        <td>Neuro Re-Ed: </td>
                                        <td>{this.props.objective.neruoReEdInput}</td>
                                    </tr>
                                    <tr>
                                        <td>Gait: </td>
                                        <td>{this.props.objective.gaitInput}</td>
                                    </tr>
                                    <tr>
                                        <td>Stairs: </td><td>{this.props.objective.stairsInput}</td>
                                    </tr>
                                    <tr>
                                        <td>Transfers: </td>
                                        <td>{this.props.objective.transfersAssistLevel}</td>
                                        <td>{this.props.objective.transfersCues}</td>
                                        <td>{this.props.objective.transfersAssitDevice}</td>
                                        <td>{this.props.objective.transfersType}</td>
                                    </tr>
                                    <tr>
                                        <td>Additional Info: </td><td>{this.props.objective.additionalInfoInput}</td>
                                    </tr>
                                </tbody>
                            </table>

                            <button onClick={this.editObjective}>Edit</button>
                        </div>
                        <div className="assessmentDisplay boxDisplay">
                            <table>
                                <tbody>
                                    <tr>
                                        <td>Assessment: </td><td>{this.props.assessment.assessmentInput}</td>
                                    </tr>
                                </tbody>
                            </table>
                            <button onClick={this.editAssessment}>Edit</button>
                        </div>
                        <div className="planDisplay boxDisplay">
                            <table>
                                <tbody>
                                    <tr>
                                        <td>Diagonsis: </td><td>{this.props.plan.diagnosisInput}</td>
                                    </tr>
                                    <tr>
                                        <td>Plan Of Care: </td><td>{this.props.plan.planOfCareInput}</td>
                                    </tr>
                                    <tr>
                                        <td>Number Of Visit per Week: </td><td>{this.props.plan.numberOfVisitsInput}</td>
                                    </tr>
                                </tbody>
                            </table>
                            <button onClick={this.editPlan}>Edit</button>
                        </div>
                    </div>
                    <div className="actionButtons">
                        <button onClick={this.cancel}>Cancel</button>
                        <button onClick={this.submit}>Submit</button>
                    </div>
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