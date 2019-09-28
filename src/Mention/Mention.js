import React, { Component } from 'react';
import './Mention.css';

export default class Mention extends Component {
  render() {
    return(
        <div className="mention">{this.props.alias}</div>
    );
  }
}
