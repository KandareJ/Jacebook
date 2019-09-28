import React, { Component } from 'react';
import Header from './Header';
import Newsfeed from '../Newsfeed/Newsfeed';
import Profile from '../Profile/Profile';

export default class Home extends Component {
  render() {
    return(
      <div>
        <Header />
        <Profile />
      </div>
    );
  }
}
