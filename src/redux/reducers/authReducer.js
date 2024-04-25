import { SET_AUTH_TOKEN } from '../actionTypes';

const initialState = {
    token: null, // Initialize token state with null
};

export default function authReducer(state = initialState, action) {
    switch (action.type) {
        case SET_AUTH_TOKEN:
            return {
                ...state,
                token: action.payload, // Update token state with the action's payload (token)
            };
        default:
            return state;
    }
}
