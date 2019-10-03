import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Mention.css';

export default class Mention extends Component {
  render() {
    let alias = this.props.alias.substring(1);
    return(
        <Link className="link-style" to={`/profile/${alias}`}><div className="mention">{this.props.alias}</div></Link>
    );
  }
}
