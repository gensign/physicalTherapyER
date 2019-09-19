// setting inital state
const initialState = {
    username: '',
    password: '',
    loggedIn: false
};

// Action types
const SET_USER = 'SET_USER';
const LOGGEDIN = 'LOGGEDIN';

// Action Builders
export function setUser(user) {
    return {
        type: SET_USER,
        payload: user
    }
};

export function loggedIN(loggin) {
    return {
        type: LOGGEDIN,
        payload: loggin
    }
};

// Reducer function

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case SET_USER:
            const { username, password } = action.payload;
            return { ...state, username, password };
        default:
            return state
    };
};

