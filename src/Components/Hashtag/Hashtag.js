import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Hashtag.css';

export default class Hashtag extends Component {
  render() {
    let tag = this.props.hashtag.substring(1);
    return(
        <Link className="link-style" to={`/hashtag/${tag}`}><div className="hashtag">{this.props.hashtag}</div></Link>
    );
  }
}
