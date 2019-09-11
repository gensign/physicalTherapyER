// setting inital state
const initialState = {
    username: '',
    password: ''

};

// Action types
const SET_USER = 'SET_USER';

// Action Builders
export function setUser(user) {
    return {
        type: SET_USER,
        payload: user
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

