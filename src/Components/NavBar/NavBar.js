import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './NavBar.css';

export default class NavBar extends Component {
    // need to toggle being logged in to change look of NavBar. 
    state = {
        loggedIn: false
    };


    logout = () => {
        axios.delete('/auth/logout').then({
            toggle: false
        });
    };

    render() {
        return (
            <div className='navBarBody'>
                <nav className='links'>
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
                        {this.state.toggle = false ?
                            <Link to='/'>
                                <li>Logout</li>
                            </Link> :
                            <div>
                                <Link to='/auth/login'>
                                    <li>Login</li>
                                </Link>
                                <Link to='/auth/register'>
                                    <li>Register</li>
                                </Link>
                            </div>

                        }
                    </div>
                </nav>
            </div>
        )
    }
}
