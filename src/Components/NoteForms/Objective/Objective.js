import React, { Component } from 'react'

export default class Objective extends Component {
    state = {

    };

    handleChange = () => {

    };

    cancel = () => {

    };

    next = () => {

    };

    render() {
        return (
            <div>
                <h1>Objective</h1>
                <span>ROM: </span>
                <input type='text' placeholder='location' />
                <input type='number' placeholder='degrees' />
                <input type='text' placeholder='movement' />
                <span>Strength: </span>
                <input type='text' placeholder='location' />
                <input type='text' placeholder='level' />
                <input type='text' placeholder='location' />
                <span>Coordination: </span>
                <input type='text' placeholder='Location' />
                <select>
                    <option></option>
                    <option>Not Impaired</option>
                    <option>Mild</option>
                    <option>Moderate</option>
                    <option>Severe</option>
                </select>
                <span>Sensation: </span>
                <select>
                    <option></option>
                    <option>Mild</option>
                    <option>Moderate</option>
                    <option>Severe</option>
                </select>
                <input type='text' placeholder='location' />
                <span>Ther Ex: </span>
                <input type='text' />
                <span>Ther Act: </span>
                <input type='text' />
                <span>Neuro Re-Ed: </span>
                <input type='text' />
                <span>Gait: </span>
                <input type='text' />
                <span>Stars: </span>
                <input type='text' />
                <span>Transfers: </span>
                <select name="Assist Level" >
                    <option></option>
                    <option>I</option>
                    <option>MI</option>
                    <option>Min A</option>
                    <option>Mod A</option>
                    <option>Max A</option>
                    <option>Dependent</option>
                </select>
                <select name='Cues'>
                    <option></option>
                    <option>Verbal</option>
                    <option>Tactile</option>
                    <option>Both</option>
                    <option>None</option>
                </select>
                <input type='text' placeholder='Assistive Device' />
                <input type='text' placeholder='Transfer Type' />
                <span>Additional Information</span>
                <input type='text' />
                <button>Assessment</button>
                <button>Previous</button>
            </div>
        )
    }
}
