import {v4} from 'node-uuid';

const verifyUser = (login, password) => {
    return JSON.parse(localStorage.getItem('users'))
        .filter(user =>
            user.login == login && user.password == password
        ).length;

};

export const inputLoginForm = (field, value) => ({
    type: 'LOGIN_FORM_VALUE_INPUT',
    payload: {
        field,
        value
    }
});

export const signIn = (login, password) => {
    let isAuthorized = !!verifyUser(login, password);

    return {
        type: 'SIGN_IN',
        payload: {
            isAuthorized
        }
    };
};

export const fetchCourses = () => {
    let courses = JSON.parse(localStorage.getItem('courses'));

    return {
        type: 'FETCH_COURSES',
        payload: courses
    }
};

export const searchCourses = searchQuery => ({
    type: 'SEARCH',
    payload: searchQuery
});

export const searchInput = searchText => ({
    type: 'SEARCH_INPUT',
    payload: searchText
});

export const inputAddForm = (field, value) => ({
    type: 'ADD_FORM_INPUT',
    payload: {
        field,
        value
    }
});

export const deleteCourse = (courses, courseId) => {
    let payload = courses.filter(course => course.id !== courseId);

    localStorage.setItem('courses', JSON.stringify(payload));

    return fetchCourses();
};

export const addCourse = (id, title, description, createDate, duration, history) => {
    let courses = [...JSON.parse(localStorage.getItem('courses'))
        .filter(course => course.id !== id),
        {title, description, createDate, duration, id: v4()}];

    localStorage.setItem('courses', JSON.stringify(courses));

    history.push('/courses');

    return {
        type: 'ADD_COURSE',
        payload: courses
    };
};

export const logOff = () => ({
    type: 'LOG_OFF'
});

export const editCourse = (course) => ({
    type: 'EDIT_COURSE',
    payload: {...course}
});

export const onMoveToAddCourse = () => ({
    type: 'MOVE_TO_ADD'
});