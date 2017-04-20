import {BrowserRouter as Router, Route} from 'react-router-dom';
import {Provider} from 'react-redux';
import React from 'react';
import Courses from 'pages/courses'
import AddCourse from 'pages/add-course'
import Login from 'pages/login';

const Root = ({store}) => (
    <Provider store={store}>
        <Router>
            <div>
                <Route exact path="/" component={Login}/>
                <Route path="/courses" component={Courses}/>
                <Route path="/new" component={AddCourse}/>
            </div>
        </Router>
    </Provider>
);

export default Root;
