import React from 'react';
import { Switch, Route } from 'react-router-dom';

// import authenication components
import Login from './Components/Login/Login';
import Register from './Authenication/Register/Register';

// import HomePage
import HomePage from './Components/HomePage/HomePage'

// import contact and subscribe 
import Contact from './Components/Contact/Contact';
import Subscribe from './Components/Subscription/Subscription';

export default (
    < Switch >
        <Route exact path='/' component={HomePage} />
        <Route path='/auth/login' component={Login} />
        <Route path='/auth/register' component={Register} />
        <Route path='/contact' component={Contact} />
        <Route path='/subscribe' component={Subscribe} />
        {/* <Route path='' component={} />
                    <Route path='' component={} />
                    <Route path='' component={} />
                    <Route path='' component={} />
                    <Route path='' component={} />  */}
    </Switch >
)



