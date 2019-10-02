import React, { Component } from 'react';
import Header from './Header';
import Newsfeed from '../Newsfeed/Newsfeed';
import Profile from '../Profile/Profile';
import { Switch, Route } from "react-router-dom";

export default class Home extends Component {
  render() {
    return(
      <div>
        <Header />
        <Switch>
          <Route path="/profile">
            <Profile />
          </Route>
          <Route path="/">
            <Newsfeed />
          </Route>
        </Switch>
      </div>
    );
  }
}
