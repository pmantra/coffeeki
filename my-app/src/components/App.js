import React, { Component } from 'react';
import '../css/App.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'jquery/src/jquery';
import 'bootstrap/dist/js/bootstrap';
import 'font-awesome/css/font-awesome.min.css';
import '../css/login.css';
import '../css/dashboard.css';
import { Redirect } from 'react-router-dom';


class App extends Component {
    constructor(props) {
        super(props);
        this.goToLogin = this.goToLogin.bind(this);
        this.state = {
            showLogin : false,
        };
    }
    goToLogin() {
        this.setState({showLogin : true});
    }
    render() {
        if(this.state.showLogin) {
           return  <Redirect to="/login"/>;
        }
        return (
            <div className="App">
                <header className="App-header" >
                    <button className="btn btn-primary" onClick={this.goToLogin}>Login</button>
                </header>
                {/*<div>
                <div className={this.state.showLogin ? "noshow": "show"}>
                  <LoginComponent/>
                </div>
              </div>*/}
            </div>
        );
    }
}

export default App;
