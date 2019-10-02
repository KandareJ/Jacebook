import React, { Component } from 'react';
import Header from './Header';
import Body from './Body';
import Footer from './Footer';

export default class Login extends Component {
  render() {
    return (
      <div>
        <Header />
        <Body />
        <Footer />
      </div>
    );
  }
}