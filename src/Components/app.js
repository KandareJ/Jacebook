import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import Home from './Home/Home';
import Login from './Login/Login';
import { connect } from 'react-redux';

class App extends Component {
  render() {
    return(
      <Router>
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/">
            {this.props.authToken ? <Home /> : <Redirect to={{pathname: '/login'}} /> }
          </Route>
        </Switch>
      </Router>
    );
  }

}

const mapStateToProps = (state) => {
  return {
    authToken: state.login.authToken
  };
}

export default connect(mapStateToProps)(App);
