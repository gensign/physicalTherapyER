import React, { Component } from 'react';
import { connect } from 'react-redux';
import { objectiveUpdateAction } from '../../redux/reducer';


class Objective extends Component {

    initialState = {
        romLocation: '',
        romDegress: '',
        romMovement: '',
        strengthLocation: '',
        strengthLevel: '',
        strengthMovement: '',
        coordinationLocation: '',
        coordinationSelect: '',
        sensationLocation: '',
        sensationselect: '',
        therExInput: '',
        therActInput: '',
        neruoReEdInput: '',
        gaitInput: '',
        stairsInput: '',
        transfersAssistLevel: '',
        transfersCues: '',
        transfersAssitDevice: '',
        transfersType: '',
        additionalInfoInput: ''
    };

    constructor() {
        super()
        this.state = this.initialState;
    };

    componentDidMount() {
        this.setState(this.props.objective);
    };

    handleChange = (e, key) => {
        this.setState({
            [key]: e.target.value
        });
    };

    goToAssessment = () => {
        console.log('submitting objective');
        console.log('');
        this.props.objectiveUpdateAction(this.state);
        this.props.history.push('/webnote/assessment');
    };

    previous = () => {
        this.props.history.push('/webnote/subjective');
    };

    render() {
        return (
            <div>
                <h1>Objective</h1>
                <div className='ROM'>
                    <span>ROM: </span>
                    <input type='text'
                        placeholder='location'
                        value={this.state.romLocation}
                        onChange={(e) => this.handleChange(e, 'romLocation')} />
                    <input type='number'
                        placeholder='degrees'
                        value={this.state.romDegress}
                        onChange={(e) => this.handleChange(e, 'romDegress')} />
                    <input type='text'
                        placeholder='movement'
                        value={this.state.romMovement}
                        onChange={(e) => this.handleChange(e, 'romMovement')} />
                </div>
                <div className='Strength'>
                    <span>Strength: </span>
                    <input type='text'
                        placeholder='location'
                        value={this.state.strengthLocation}
                        onChange={(e) => this.handleChange(e, 'strengthLocation')} />
                    <input type='text'
                        placeholder='level'
                        value={this.state.strengthLevel}
                        onChange={(e) => this.handleChange(e, 'strengthLevel')} />
                    <input type='text'
                        placeholder='movement'
                        value={this.state.strengthMovement}
                        onChange={(e) => this.handleChange(e, 'strengthMovement')} />
                </div>
                <div className='Coordination'>
                    <span>Coordination: </span>
                    <input type='text'
                        placeholder='Location'
                        value={this.state.coordinationLocation}
                        onChange={(e) => this.handleChange(e, 'coordinationLocation')} />
                    <select onChange={(e) => this.handleChange(e, 'coordinationSelect')}>
                        <option></option>
                        <option selected={this.state.coordinationSelect === 'Not Impaired'}>Not Impaired</option>
                        <option selected={this.state.coordinationSelect === 'Mild'}>Mild</option>
                        <option selected={this.state.coordinationSelect === 'Moderate'}>Moderate</option>
                        <option selected={this.state.coordinationSelect === 'Severe'}>Severe</option>
                    </select>
                </div>
                <div className='Sensation'>
                    <span>Sensation: </span>
                    <select onChange={(e) => this.handleChange(e, 'sensationselect')}>
                        <option></option>
                        <option selected={this.state.sensationselect === 'Mild'}>Mild</option>
                        <option selected={this.state.sensationselect === 'Moderate'}>Moderate</option>
                        <option selected={this.state.sensationselect === 'Severe'}>Severe</option>
                    </select>
                    <input type='text'
                        placeholder='location'
                        value={this.state.sensationLocation}
                        onChange={(e) => this.handleChange(e, 'sensationLocation')} />
                </div>
                <div className="TherEx">
                    <span>Ther Ex: </span>
                    <input type='text'
                        value={this.state.therExInput}
                        onChange={(e) => this.handleChange(e, 'therExInput')} />
                </div>
                <div className='TherAct'>
                    <span>Ther Act: </span>
                    <input type='text'
                        value={this.state.therActInput}
                        onChange={(e) => this.handleChange(e, 'therActInput')} />
                </div>
                <div className='Neruo'>
                    <span>Neuro Re-Ed: </span>
                    <input type='text'
                        value={this.state.neruoReEdInput}
                        onChange={(e) => this.handleChange(e, 'neruoReEdInput')} />
                </div>
                <div className='Gait'>
                    <span>Gait: </span>
                    <input type='text'
                        value={this.state.gaitInput}
                        onChange={(e) => this.handleChange(e, 'gaitInput')} />
                </div>
                <div className='Stairs'>
                    <span>Stars: </span>
                    <input type='text'
                        value={this.state.stairsInput}
                        onChange={(e) => this.handleChange(e, 'stairsInput')} />
                </div>
                <div className='Transfers'>
                    <span>Transfers: </span>
                    <select name="Assist Level" onChange={(e) => this.handleChange(e, 'transfersAssistLevel')}>
                        <option></option>
                        <option selected={this.state.transfersAssistLevel === 'I'}>I</option>
                        <option selected={this.state.transfersAssistLevel === 'MI'}>MI</option>
                        <option selected={this.state.transfersAssistLevel === 'Min A'}>Min A</option>
                        <option selected={this.state.transfersAssistLevel === 'Mod A'}>Mod A</option>
                        <option selected={this.state.transfersAssistLevel === 'Max A'}>Max A</option>
                        <option selected={this.state.transfersAssistLevel === 'Dependent'}>Dependent</option>
                    </select>
                    <select name='Cues' onChange={(e) => this.handleChange(e, 'transfersCues')}>
                        <option></option>
                        <option selected={this.state.transfersCues === 'Verbal'}>Verbal</option>
                        <option selected={this.state.transfersCues === 'Tactile'}>Tactile</option>
                        <option selected={this.state.transfersCues === 'Both'}>Both</option>
                        <option selected={this.state.transfersCues === 'None'}>None</option>
                    </select>
                    <input type='text'
                        placeholder='Assistive Device'
                        value={this.state.transfersAssitDevice}
                        onChange={(e) => this.handleChange(e, 'transfersAssitDevice')} />
                    <input type='text'
                        placeholder='Transfer Type'
                        value={this.state.transfersType}
                        onChange={(e) => this.handleChange(e, 'transfersType')} />
                </div>
                <div className='AdditionalInfo'>
                    <span>Additional Information</span>
                    <input type='text'
                        value={this.state.additionalInfoInput}
                        onChange={(e) => this.handleChange(e, 'additionalInfoInput')} />
                </div>
                <button onClick={this.goToAssessment}>Assessment</button>
                <button onClick={this.previous}>Previous</button>
            </div>
        )
    }
}

const mapStateToProps = (reduxState) => {
    const { objective } = reduxState;
    return { objective };
}

const mapDispatchToProps = {
    objectiveUpdateAction
}

export default connect(mapStateToProps, mapDispatchToProps)(Objective);
