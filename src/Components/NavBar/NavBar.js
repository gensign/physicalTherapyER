import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class NavBar extends Component {
    // need to toggle being logged in to change look of NavBar. 
    state = {
        loggedIn: false
    };

    toggle = () => {
        this.setState({
            loggedIn: true
        });
    };

    render() {
        return (
            <div>
                <nav>
                    <Link to='/'>
                        <li>Home</li>
                    </Link>
                    <Link to='/webnote/choose'>
                        <li>Web Note</li>
                    </Link>
                    {/* toggle Patients on when user is logged in */}
                    <Link to='/patients'>
                        <li>Patients</li>
                    </Link>
                    <Link to='/subscribe'>
                        <li>Subscribe</li>
                    </Link>
                    <Link to='/contact'>
                        <li>Contact</li>
                    </Link>
                    <div className='authenicationLinks'>
                        {/* need a trinary to toggle between Login/Register and logout */}
                        <Link to='/auth/login'>
                            <li>Login</li>
                        </Link>
                        <Link to='/auth/register'>
                            <li>Register</li>
                        </Link>
                        <Link to='/'>
                            <li>Logout</li>
                        </Link>
                    </div>
                </nav>
            </div>
        )
    }
}
