import React, {Component} from 'react';
import {withRouter, Link} from 'react-router-dom'
import {connect} from 'react-redux';
import * as actions from '../../actions'
import {Header, FormGroup} from '../../components';

const mapStateToProps = (state) => ({
    isAuthorized: state.login.isAuthorized,
    login: state.login.loginValue,
    title: state.addCourse.title,
    description: state.addCourse.description,
    date: state.addCourse.date,
    duration: state.addCourse.duration
});

class AddCourse extends Component {
    constructor(...args) {
        super(...args);

        this.inputTitle = this.inputTitle.bind(this);
        this.inputDescription = this.inputDescription.bind(this);
        this.inputDate = this.inputDate.bind(this);
        this.inputDuration = this.inputDuration.bind(this);
    }

    inputTitle(e) {
        this.props.inputAddForm('title', e.target.value);
    }

    inputDescription(e) {
        this.props.inputAddForm('description', e.target.value);
    }

    inputDate(e) {
        this.props.inputAddForm('date', e.target.value);
    }

    inputDuration(e) {
        this.props.inputAddForm('duration', e.target.value);
    }

    render() {
        let {title, description, date, duration, isAuthorized, login} = this.props;

        return (
            <div>
                <Header
                    isAuthorized={isAuthorized}
                    login={login}
                    pageTitle={<Link to="/courses">Courses</Link>}
                />
                <form>
                    <FormGroup label="Title" value={title} onChange={this.inputTitle} type="text"/>
                    <div className="form-group">
                        <label>Description</label>
                        <textarea
                            value={description}
                            onChange={this.inputDescription}
                            rows="3"
                            className="form-control">
                        </textarea>
                    </div>
                    <FormGroup label="Date" value={date} onChange={this.inputDate} type="date"/>
                    <FormGroup label="Duration" value={duration} onChange={this.inputDuration} type="text"/>
                    <div className="raw">
                        <div className="col-xs-6">
                            <button className="btn btn-success btn-block" type="button">Save</button>
                        </div>
                        <div className="col-xs-6">
                            <button className="btn btn-danger btn-block" type="button">
                                <Link to="/courses">Cancel</Link>
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

export default withRouter(connect(mapStateToProps, {inputAddForm: actions.inputAddForm})(AddCourse));