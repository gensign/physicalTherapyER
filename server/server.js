require('dotenv').config();

const express = require('express');
const app = express();

const massive = require('massive');
const session = require('express-session');

// import controllers
const authCtrl = require('./Controllers/authController');
const patientCtrl = require('./Controllers/patientsController');
const noteCtrl = require('./Controllers/notesController');
const billingCtrl = require('./Controllers/billingController');

// import .env 
const { SERVER_PORT, CONNECTION_STRING, SESSION_SECRET } = process.env;
const PORT = SERVER_PORT || 1337;

// middleware
app.use(express.json());

// sessions
app.use(session({
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 5
    }
}));

// Massisve
massive(CONNECTION_STRING).then(db => {
    app.set('db', db);
    console.log('Connected to the Database');
}).catch(err => console.log('Unable to connect to Database'));


// Authenication Endpoints
app.post('/auth/login', authCtrl.login);
app.post('/auth/register', authCtrl.register);
app.delete('/auth/logout', authCtrl.logout);

// patients Endpoints
app.get('/api/patients', patientCtrl.getAllpt);
app.get('/api/patients/:id', patientCtrl.getSinglept);
// app.get('/api/patients/user/:id', patientCtrl.getUserspt);
app.post('/api/patients', patientCtrl.addpt);
app.delete('/api/patients/:id', patientCtrl.deletept);

// billing endpoints
app.get('/cptcodes', billingCtrl.getCPTCodes);

// note endpoints

// goal endpoints


// listening for the port
app.listen(PORT, () => console.log(`PORT ${PORT} is listening`));