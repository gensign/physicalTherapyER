import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class NavBar extends Component {
    // need to toggle being logged in to change look of NavBar. 
    state = {
        loggedIn: false
    }

    toggle = () => {

    }

    render() {
        return (
            <div>
                <nav>
                    <Link to='/'>
                        <li>Home</li>
                    </Link>
                    <li>Web Note</li>
                    <li>Subscribe</li>
                    {/* toggle Patients on when user is logged in */}
                    <li>Patients</li>
                    <li>Contact</li>
                    <div className='authenicationLinks'>
                        {/* need a trinary to toggle between Login/Register and logout */}
                        <Link to='/auth/login'>
                            <li>Login</li>
                        </Link>
                        <Link to='/auth/register'>
                            <li>Register</li>
                        </Link>
                        <li>Logout</li>
                    </div>
                </nav>
            </div>
        )
    }
}
