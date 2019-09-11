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
    const db = req.app.get('db');
    const { username, email, password } = req.body;
    console.log('username": ', username);
    console.log('');
    const user = await db.find_user([username, password]);
    console.log('user: ', user);
    console.log('');
    if (user.length > 0) {
        console.log('User Found with Username');
        console.log('');
        return res.status(400).send({Register: false});
    };
    console.log('Username Not Found. Proceed with Registering');
    console.log('');
    const salt = bcrypt.genSaltSync(15);
    const hash = bcrypt.hashSync(password, salt);
    const newUser = await db.create_user([username, email, password]);
    console.log('newUser: ', newUser);
    console.log('');
    db.insert_hash({ hash, user_id: newUser[0].user_id })
        .then(() =>{
            req.session.user = newUser[0];
            console.log('session: ', req.session.user);
            console.log('');
            res.status(200).send({
                message: 'Register Complete',
                user: req.session.user,
                loggedIn: true
            });
        }).catch(err => res.status(500).send({message: 'Failed to Register'}));
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