// setting inital state
const initialState = {
    username: '',
    authenticated: false,
    choosenPt: 0,
    subjective: {},
    objective: {},
    assessment: {},
    plan: {}
};

// Action types
const UPDATE_USER = 'UDPATE_USER';
const AUTHENTICATE = 'AUTHENTICATE';
const UPDATE_PATIENT = 'UPDATE_PATIENT';
const UPDATE_SUBJECTIVE = 'UPDATE_SUBJECTIVE';
const UPDATE_OBJECTIVE = 'UPDATE_OBJECTIVE';
const UPDATE_ASSESSMENT = 'UPDATE_ASSESSMENT';
const UPDATE_PLAN = 'UPDATE_PLAN';
const RESET_ALL = 'RESET_ALL';

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

export function assessmentUpdateAction(assessment) {
    return {
        type: UPDATE_ASSESSMENT,
        payload: assessment
    };
};

export function planUpdateAction(plan) {
    return {
        type: UPDATE_PLAN,
        payload: plan
    };
};

export function resetAllAction() {
    return {
        type: RESET_ALL
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
            const subjective = action.payload;
            return { ...state, subjective };
        case UPDATE_OBJECTIVE:
            const objective = action.payload;
            return { ...state, objective };
        case UPDATE_ASSESSMENT:
            const assessment = action.payload;
            return { ...state, assessment };
        case UPDATE_PLAN:
            const plan = action.payload;
            return { ...state, plan };
        case RESET_ALL:
            return initialState;
        default:
            return state
    };
};

