import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './NavBar.css';
import { connect } from 'react-redux';

import { loggedIN } from '../redux/reducer';


class NavBar extends Component {
    // need to toggle being logged in to change look of NavBar. 
    constructor () {
        super();

        this.state = {
            loggedin: false
        };
    };


    logout = () => {
        axios.delete('/auth/logout').then({
            loggedin: false
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
                        {!this.state.loggedin ?
                            (<div>
                                <Link to='/auth/login'>
                                    <li>Login</li>
                                </Link>
                                <Link to='/auth/register'>
                                    <li>Register</li>
                                </Link>
                            </div>) :
                            (<div>
                                <Link to='/'>
                                    <li>Logout</li>
                                </Link>
                            </div>)

                        }
                    </div>
                </nav>
            </div>
        )
    }
}
export default connect(null, { loggedIN })(NavBar)