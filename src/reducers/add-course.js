import * as constants from '../actions/constants'

const initialState = {
    title: '',
    description: '',
    date: '',
    duration: ''
};

const addCourse = (state = initialState, action) => {
    let {type, payload} = action;

    switch (type) {
        case constants.ADD_FORM_INPUT:
            return ({...state, [payload.field]: payload.value});
        default:
            return state;
    }
};

export default addCourse;