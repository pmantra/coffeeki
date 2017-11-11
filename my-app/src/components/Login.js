import React, { Component } from 'react';
import { login } from '../service/client';

class LoginComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            loginSuccess: false
        };
        this.handleUsernameChange = this.handleUsernameChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.callLoginService = this.callLoginService.bind(this);
    }

    handleUsernameChange(event) {
        this.setState({username: event.target.value});
    }

    handlePasswordChange(event) {
        this.setState({password: event.target.value});
    }

    async callLoginService() {
        let response = await login(this.state.username, this.state.password);
        if(response) {
            this.props.history.push('/dashboard');
        }
    }

    render() {
        return (
            <div className="wrapper">
                <form className="form-signin">
                    <h2 className="form-signin-heading">Please login</h2>
                    <input type="text" className="form-control" name="username" placeholder="username" value={this.state.username} onChange={this.handleUsernameChange}/>
                    <input type="password" className="form-control" name="password" placeholder="password" value={this.state.password} onChange={this.handlePasswordChange}/>
                    <button type="button" className="btn btn-lg btn-primary btn-block" onClick={this.callLoginService}>Login</button>
                </form>
            </div>
        );
    }
}

export default LoginComponent;