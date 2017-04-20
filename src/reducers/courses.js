import * as constants from '../actions/constants'

const initialState = {
    courseList: [],
    searchValue: '',
    searchQuery: ''
};

const courses = (state = initialState, action) => {
    let {type, payload} = action;

    switch (type) {
        case constants.FETCH_COURSES:
            return {...state, courseList: payload};
        case constants.SEARCH:
            return {...state, searchQuery: payload};
        case constants.SEARCH_INPUT:
            return {...state, searchValue: payload};
        case constants.ADD_COURSE:
            return {...state, courseList: payload};
        default:
            return state;
    }
};

export default courses;