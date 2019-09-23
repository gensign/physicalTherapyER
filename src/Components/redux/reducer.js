// setting inital state
const initialState = {
    username: '',
    authenticated: false,
    choosenPt: 0,
    subjective: '',
    objective: '',
    assessement: '',
    plan: ''
};

// Action types
const UPDATE_USER = 'UDPATE_USER';
const AUTHENTICATE = 'AUTHENTICATE';
const UPDATE_PATIENT = 'UPDATE_PATIENT';
const UPDATE_SUBJECTIVE = 'UPDATE_SUBJECTIVE';
const UPDATE_OBJECTIVE = 'UPDATE_OBJECTIVE';
const UPDATE_ASSESSMENT = 'UPDATE_ASSESSMENT';
const UPDATE_PLAN = 'UPDATE_PLAN';

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
};

export function subjectiveUpdateAction(subjective) {
    return {
        type: UPDATE_SUBJECTIVE,
        payload: subjective
    };
};

export function objectiveUpdateAction(objective) {
    return {
        type: UPDATE_OBJECTIVE,
        payload: objective
    };
};

export function assessmentUpdateAction(assessement) {
    return {
        type: UPDATE_ASSESSMENT,
        payload: assessement
    };
};

export function planUpdateAction(plan) {
    return {
        type: UPDATE_PLAN,
        payload: plan
    };
};
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
        case UPDATE_SUBJECTIVE:
            const { subjective } = action.payload;
            return { ...state, subjective };
        case UPDATE_OBJECTIVE:
            const { objective } = action.payload;
            return { ...state, objective };
        case UPDATE_ASSESSMENT:
            const { assessement } = action.payload;
            return { ...state, assessement };
        case UPDATE_PLAN:
            const { plan } = action.payload;
            return { ...state, plan };
        default:
            return state
    };
};

