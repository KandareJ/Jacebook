import React, { Component } from 'react';
import './Hashtag.css';

export default class Hashtag extends Component {
  render() {
    return(
        <div className="hashtag">{this.props.hashtag}</div>
    );
  }
}
