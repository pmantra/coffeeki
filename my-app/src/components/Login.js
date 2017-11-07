import React, { Component } from 'react';
import { Redirect, Route } from 'react-router-dom';

class LoginComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loginSuccess: false
        }
    }

    render() {
        return (
            <div className="wrapper">
                <form className="form-signin">
                    <h2 className="form-signin-heading">Please login</h2>
                    <input type="text" className="form-control" name="username" placeholder="Email Address" />
                    <input type="password" className="form-control" name="password" placeholder="Password"/>
                    <LoginButton/>
                </form>
            </div>
        );
    }
}

const Authenticate = ({ title, history }) => (
    <button
        className="btn btn-lg btn-primary btn-block"
        onClick={() => history.push('/dashboard')}
    >{title}
    </button>
);

const LoginButton = () => (
    <Route path="/" render={(props) => <Authenticate {...props} title="Login" />} />
);

export default LoginComponent;