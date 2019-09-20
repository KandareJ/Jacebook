import React, { Component } from 'react';
import Header from './Header';
import Newsfeed from '../Newsfeed/Newsfeed';

export default class Home extends Component {
  render() {
    return(
      <div>
        <Header />
        <Newsfeed />
      </div>
    );
  }
}
