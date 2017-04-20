import React, {Component} from 'react';
import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux';
import {CourseItem, CoursesNav, Header} from '../../components';
import * as actions from '../../actions'

const mapStateToProps = (state) => ({
    isAuthorized: state.login.isAuthorized,
    login: state.login.loginValue,
    courses: state.courses.courseList,
    searchQuery: state.courses.searchQuery,
    searchValue: state.courses.searchValue
});

class Courses extends Component {
    constructor(...args) {
        super(...args);

        this.onSearchInput = this.onSearchInput.bind(this);
        this.onSearch = this.onSearch.bind(this);
        this.onLogoff = this.onLogoff.bind(this);
    }

    componentDidMount() {
        this.props.fetchCourses();
    }

    onSearchInput(e) {
        this.props.searchInput(e.target.value);
    }

    onSearch() {
        let {searchValue, searchCourses} = this.props;

        searchCourses(searchValue);
    }

    onLogoff() {
        this.props.logOff();
    }

    render() {
        let {courses, isAuthorized, login, searchQuery, searchValue, deleteCourse} = this.props;

        return (
            <div>
                <Header
                    onLogoff={this.onLogoff}
                    isAuthorized={isAuthorized}
                    pageTitle="Courses"
                    login={login}/>
                <CoursesNav
                    searchValue={searchValue}
                    onSearchInput={this.onSearchInput}
                    onSearch={this.onSearch}/>
                {
                    courses
                        .filter(course =>
                            course.title.toLowerCase().includes(searchQuery.toLowerCase().trim()))
                        .map(course =>
                            <CourseItem
                                onDelete={() => deleteCourse(courses, course.id)}
                                key={course.id}
                                {...course}/>)
                }
            </div>
        );
    }
}

export default withRouter(connect(
    mapStateToProps,
    {
        fetchCourses: actions.fetchCourses,
        searchCourses: actions.searchCourses,
        searchInput: actions.searchInput,
        deleteCourse: actions.deleteCourse,
        logOff: actions.logOff
    }
)(Courses))