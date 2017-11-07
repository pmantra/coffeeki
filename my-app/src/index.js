import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LoginComponent from "./components/Login";
import Dashboard from "./components/Dashboard";

class Home extends Component {
    render() {
        return(<App/>);
    }
}

const Main = () => (
  <main>
      <Router>
          <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/login" component={LoginComponent} />
              <Route exact path="/dashboard" component={Dashboard} />
          </Switch>
      </Router>
  </main>
);

ReactDOM.render(<Main/>,
    document.getElementById('root'));
registerServiceWorker();

