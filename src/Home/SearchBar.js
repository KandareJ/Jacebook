import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import './Home.css';

export default class Header extends Component {
  render() {
    return(
      <div className="form-inline">
        <input className="search-bar" type="text" placeholder="Search" />
        <button className="search-button"><FontAwesomeIcon className="summary-icon" size="xs" icon={faSearch} /></button>
      </div>
    );
  }
}
