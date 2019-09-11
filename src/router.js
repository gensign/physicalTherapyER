import React from 'react';
import { Switch, Route } from 'react-router-dom';

// import authenication components
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';

// import HomePage
import HomePage from './Components/HomePage/HomePage'

export default (
    < Switch >
        <Route exact path='/' component={HomePage} />
        <Route path='/auth/login' component={Login} />
        <Route path='/auth/register' component={Register} />
        {/* <Route path='' component={} />
                    <Route path='' component={} />
                    <Route path='' component={} />
                    <Route path='' component={} />
                    <Route path='' component={} />
                    <Route path='' component={} />
                    <Route path='' component={} /> */}
    </Switch >
)



