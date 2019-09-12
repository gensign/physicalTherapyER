import React, { Component } from 'react'

export default class Billing extends Component {
    state = {

    };
    
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
                    <select>
                        <option></option>
                        <option value='97110'>Therapeutic Exercise</option>
                        <option value='97140'>Manual Therapy</option>
                        <option value='97112'>Neuromuscular Re-Education</option>
                        <option value='97530'>Therapeutic Activities</option>
                        <option value='97010'>Hot/Cold Packs</option>
                        <option value='97014'>Electrical Stimulation (Unattended)</option>
                        <option value='G0283'>Electrical Stimulation, Medicare Non-Wound (Unattended)</option>
                        <option value='97035'>Ultrasound/Phonophoresis</option>
                        <option value='97161'>PT Evaluation: Low Complexity</option>
                        <option value='97116'>Gait Training</option>
                        <option value='97162'>PT Evaluation: Moderate Complexity</option>
                        <option value='97535'>Self Care/Home Management Training</option>
                        <option value='97016'>Vasopneumatic Device</option>
                        <option value='97032'>Electrical Stimulation (Manual)</option>
                        <option value='97012'>Mechanical Traction</option>
                        <option value='97164'>PT Re-Evaluation</option>
                        <option value='97113'>Aquatic Exercise</option>
                        <option value='97150'>Group Therapy</option>
                        <option value='97124'>Massage</option>
                        <option value='97018'>Paraffin Bath</option>
                        <option value='NC001'>No Charges This Visit</option>
                        <option value='97163'>PT Evaluation: High Complexity</option>
                        <option value='98941'>Spinal, Three or Four Regions</option>
                        <option value='97022'>Whirlpool</option>
                        <option value='97033'>Iontophoresis</option>
                        <option value='98940'>Chiropractic Manipulative Treatment (CMT); Spinal, One or Two Regions</option>
                        <option value='97039'>Laser/Other</option>
                        <option value='97026'>Infrared Light</option>
                        <option value='97750'>FCE/Performance Test</option>
                        <option value='98943'>CMT, Extraspinal, One or More Regions</option>
                    </select>
                    <span>Units: </span>
                    <select>
                        <option></option>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                        <option>6</option>
                    </select>
                    <button>Subjective</button>
                    <button>Cancel</button>
                </div>
            </div>
        )
    };
};
