import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import './Home.css';

export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: ""
    }

    this.onChange = this.onChange.bind(this);
    this.clear = this.clear.bind(this);
  }

  onChange(key) {
    return (e) => {
      this.setState({[key]: e.target.value})
    }
  }

  clear() {
    this.setState({search: ""})
  }

  render() {
    return(
      <div className="form-inline">
        <input className="search-bar" type="text" value={this.state.search} placeholder="Search" onChange={this.onChange("search")} />
        {/*<button onClick={this.clear} className="search-button"><Link className="link-style" to={`/search/${this.state.search}`}><FontAwesomeIcon className="summary-icon" size="xs" icon={faSearch} /></Link></button>*/}
        <button onClick={this.clear} className="search-button"><Link className="link-style" to={`/profile/${this.state.search}`}><FontAwesomeIcon className="summary-icon" size="xs" icon={faSearch} /></Link></button>
      </div>
    );
  }
}
