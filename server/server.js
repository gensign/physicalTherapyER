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
const stripeCtrl = require('./Controllers/stripeController');
const nodeMailCtrl = require('./Controllers/nodemailer');

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

// Stribe Back end
app.post('/api/payment', stripeCtrl.pay)

// nodemailer Endpoints
app.post('/api/email', nodeMailCtrl.email)

// Authenication Endpoints
app.post('/auth/login', authCtrl.login);
app.post('/auth/register', authCtrl.register);
app.delete('/auth/logout', authCtrl.logout);

// auth guard for api routes
app.use((req, res, next)=> {
    const {user} = req.session;
    if (user) {
        next()
    } else {
        res.status(401).send('Unauthorized');
    }
});

app.put('/auth/update', authCtrl.updateUserName);

// patients Endpoints
app.get('/api/patients', patientCtrl.getUserspt);
// gets all patients requardless of owner
// app.get('/api/patients', patientCtrl.getAllpt);
app.get('/api/patients/:id', patientCtrl.getSinglept);
app.post('/api/patients', patientCtrl.addpt);
app.delete('/api/patients/:id', patientCtrl.deletept);

// billing endpoints
app.get('/cptcodes', billingCtrl.getCPTCodes);
app.get('/patient/:pid/billing/:id', billingCtrl.getBilling);
app.post('/patient/:pid/billing', billingCtrl.addBilling);

// note endpoints
app.get('/patient/:pid/notes', noteCtrl.getAllNotes);
app.get('/patient/:pid/note/:id', noteCtrl.getSingleNote);
app.post('/patient/:pid/note', noteCtrl.addNote);
app.put('/patient/:pid/note/:id', noteCtrl.updateNote);
app.delete('/patient/:pid/note/:id', noteCtrl.deleteNote);


// goal endpoints when able 


// listening for the port
app.listen(PORT, () => console.log(`PORT ${PORT} is listening`));