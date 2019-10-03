import React, { Component } from 'react';
import Header from './Header';
import Newsfeed from '../Newsfeed/Newsfeed';
import Profile from '../Profile/Profile';
import { Switch, Route, Redirect } from "react-router-dom";

export default class Home extends Component {
  render() {
    return(
      <div>
        <Header />
        <Switch>
          <Route path="/profile/:alias" component={Profile} />/
          <Route path="/feed">
            <Newsfeed />
          </Route>
          <Route path="/">
            <Redirect to={{pathname: '/feed'}} />
          </Route>

        </Switch>
      </div>
    );
  }
}
