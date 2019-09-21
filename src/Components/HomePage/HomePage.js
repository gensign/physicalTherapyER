import React, { Component } from 'react';
import './HomePage.css';

export default class HomePage extends Component {
    render() {
        return (
            <div className='homePage'>
                <div className='images'>
                    {/* Learn how to rotate through these pictures on a set timer */}
                    <img id='image2' src='https://www.masmedicalstaffing.com/wp-content/uploads/2017/12/physical-therapist-soap-notes-soap-stand-for.jpg' alt='Person hand with pen about to begin writting' />
                    <img id='image3' src='https://www.stlukesphysicaltherapy.com/getmedia/6e8fbd32-a370-4872-973e-731ee4f0f370/6456-Kutztown-PT-26-copy?width=800&height=533' alt='Woman completing External Rotation exercises on yoga ball' />
                </div>
                <div className='textBoxes'>
                    <h3>Learn How to Write SOAP notes and Billing Easly</h3>
                    <h4>For Your Success as a Physical Therapist!</h4>
                    <h4>Keep Track of patients and Write Your first Professional SOAP Note!</h4>
                    <h4>Impress Friends, Classmates, and Professors!</h4>
                    <h1>Subscription Coming Soon</h1>
                </div>
            </div>
        )
    }
}
