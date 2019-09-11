require('dotenv').config();

const express = require('express');
const app = express();

const massive = require('massive');
const session = require('express-session');

// import controllers
const authCtrl = require('./Controllers/authController');

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
    app.listen(PORT, () => console.log(`PORT ${PORT} is listening`));
})


// Authenication Endpoints
app.post('/auth/login', authCtrl.login);

// patients Endpoints