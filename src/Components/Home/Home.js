import React, { Component } from 'react';
import Header from './Header';
import Newsfeed from '../Newsfeed/Newsfeed';
import Profile from '../Profile/Profile';
import UsersPage from '../UsersPage/UsersPage';
import PostView from '../PostView/PostView';
import Search from '../Search/Search';
import SinglePost from '../SinglePost/SinglePost';
import { Switch, Route, Redirect } from "react-router-dom";

export default class Home extends Component {
  render() {
    return(
      <div>
        <Header />
        <Switch>
          <Route path="/post/:id" component={SinglePost} />
          <Route path="/search/:search" component={Search} />
          <Route path="/hashtag/:hashtag" component={PostView} />
          <Route path="/followers/:alias" component={UsersPage} />
          <Route path="/following/:alias" component={UsersPage} />
          <Route path="/profile/:alias" component={Profile} />
          <Route path="/feed" component={Newsfeed} />
          <Route path="/">
            <Redirect to={{pathname: '/feed'}} />
          </Route>

        </Switch>
      </div>
    );
  }
}
