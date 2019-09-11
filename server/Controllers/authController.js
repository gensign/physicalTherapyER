const bcrypt = require('bcryptjs');

// authenication const
const login = async(req, res) => {
    console.log('Logging In');
    console.log('');
    const db = req.app.get('db');
    const { username, password } = req.body;
    console.log('Username: ', username);
    console.log('');
    const user = await db.find_user([username, password]) ;
    console.log('user: ', user);
    console.log('');
    if(user.length > 0) {
        res.status(201).send({ loggedIn: true });
    } else {
        res.status(401).send({ loggedIn: false });
    };
};

const register = async(req, res) => {
    console.log('Registering User');
    console.log('');
};

const logout = (req, res) => {
    console.log('Logging Out');
    console.log('');
};

module.exports = {
    login,
    register,
    logout
};