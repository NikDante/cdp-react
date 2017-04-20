import * as constants from '../actions/constants'

const initialState = {
    title: '',
    description: '',
    date: '',
    duration: '',
    id: ''
};

const addCourse = (state = initialState, action) => {
    let {type, payload} = action;

    switch (type) {
        case constants.ADD_FORM_INPUT:
            return ({...state, [payload.field]: payload.value});
        case constants.EDIT_COURSE:
            return ({...payload});
        case constants.MOVE_TO_ADD:
            return initialState;
        default:
            return state;
    }
};

export default addCourse;