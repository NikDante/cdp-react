import {combineReducers} from 'redux';
import addCourse from './add-course';
import courses from './courses';
import login from './login';

export default combineReducers({
    login,
    courses,
    addCourse
});