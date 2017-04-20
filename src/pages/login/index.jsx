import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import * as actions from '../../actions'
import {FormGroup, Header} from '../../components';

const mapStateToProps = (state) => ({
    isAuthorized: state.login.isAuthorized,
    login: state.login.loginValue,
    password: state.login.passwordValue,
    isInvalid: state.login.isInvalid
});

class Login extends Component {
    constructor(...args) {
        super(...args);

        this.setLoginValue = this.setLoginValue.bind(this);
        this.setPasswordValue = this.setPasswordValue.bind(this);
        this.signIn = this.signIn.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        let {isAuthorized, history} = nextProps;

        isAuthorized ? history.push('/courses') : null;
    }

    showInvalidNotification() {
        return (
            <div className="alert alert-warning text-center">
                Incorrect Login or Password
            </div>
        );
    }

    setLoginValue(e) {
        this.props.onInput('loginValue', e.target.value);
    }

    setPasswordValue(e) {
        this.props.onInput('passwordValue', e.target.value);
    }

    signIn() {
        let {login, password, signIn} = this.props;

        signIn(login, password);
    }

    render() {
        let {login, password, isInvalid} = this.props;

        return (
            <div>
                <Header pageTitle="Login"/>
                {isInvalid ? this.showInvalidNotification() : null}
                <form>
                    <FormGroup label="Login" value={login} onChange={this.setLoginValue} type="text"/>
                    <FormGroup label="Password" value={password} onChange={this.setPasswordValue} type="password"/>
                    <button
                        onClick={this.signIn}
                        className="btn btn-success btn-block"
                        type="button"
                        disabled={!(login && password)}>
                        Enter
                    </button>
                </form>
            </div>
        );
    }
}

export default withRouter(connect(
    mapStateToProps,
    {
        onInput: actions.inputLoginForm,
        signIn: actions.signIn
    }
)(Login));