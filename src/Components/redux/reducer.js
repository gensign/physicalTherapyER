// setting inital state
const initialState = {
    username: '',
    authenticated: false,
    choosenPt: 0
};

// Action types
const UPDATE_USER = 'UDPATE_USER';
const AUTHENTICATE = 'AUTHENTICATE';
const UPDATE_PATIENT = 'UPDATE_PATIENT';

// Action Builders
export function userUpdateAction(state) {
    return {
        type: UPDATE_USER,
        payload: state
    }
};

export function userAuthAction(state) {
    return {
        type: AUTHENTICATE,
        payload: state
    }
};

export function patientUpdateAction(state) {
    return {
        type: UPDATE_PATIENT,
        payload: state
    }
}

// Reducer function
export default function reducer(state = initialState, action) {
    switch (action.type) {
        case UPDATE_USER:
            const { username } = action.payload;
            return { ...state, username };
        case AUTHENTICATE:
            const { authenticated } = action.payload;
            return { ...state, authenticated };
        case UPDATE_PATIENT:
            const { choosenPt } = action.payload;
            return { ...state, choosenPt };
        default:
            return state
    };
};

