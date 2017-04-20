import * as constants from '../actions/constants'

const initialState = {
    isAuthorized: false,
    loginValue: '',
    passwordValue: '',
    isInvalid: false
};

const login = (state = initialState, action) => {
    let {type, payload} = action;

    switch (type) {
        case constants.LOGIN_FORM_VALUE_INPUT:
            return ({...state, [payload.field]: payload.value});
        case constants.SIGN_IN:
            let isAuthorized = payload.isAuthorized;

            return {
                ...state,
                isAuthorized,
                isInvalid: !isAuthorized,
                passwordValue: ''
            };
        case constants.LOG_OFF:
            return ({
                ...state,
                isAuthorized: false,
                isInvalid: false
            });
        default:
            return state;
    }
};

export default login;