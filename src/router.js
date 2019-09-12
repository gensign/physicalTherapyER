import React from 'react';
import { Switch, Route } from 'react-router-dom';

// import authenication components
import Login from './Components/Authenication/Login/Login';
import Register from './Components/Authenication/Register/Register';

// import HomePage
import HomePage from './Components/HomePage/HomePage'

// import contact and subscribe 
import Contact from './Components/Contact/Contact';
import Subscribe from './Components/Subscription/Subscription';

// import webnote components
import Billing from './Components/NoteForms/Billing/Billing';
import Subjective from './Components/NoteForms/Subjective/Subjective';
import Objective from './Components/NoteForms/Objective/Objective';
import Assessment from './Components/NoteForms/Assessment/Assessment';
import Plan from './Components/NoteForms/Plan/Plan';
import SaveNote from './Components/NoteForms/SaveNote/SaveNote';

export default (
    < Switch >
        <Route exact path='/' component={HomePage} />
        <Route path='/auth/login' component={Login} />
        <Route path='/auth/register' component={Register} />
        <Route path='/contact' component={Contact} />
        <Route path='/subscribe' component={Subscribe} />
        <Route path='/webnote/billing' component={Billing} />
        <Route path='/webnote/subjective' component={Subjective} />
        <Route path='/webnote/objective' component={Objective} />
        <Route path='/webnote/assessment' component={Assessment} />
        <Route path='/webnote/plan' component={Plan} />
        <Route path='webnote/savenote' component={SaveNote} />
    </Switch >
)



