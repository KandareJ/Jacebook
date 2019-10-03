import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faNewspaper, faUsers } from '@fortawesome/free-solid-svg-icons';
import { connect } from 'react-redux';
import { logoutAction } from '../../Actions';
import './Home.css';

class HomeButtons extends Component {

  render() {
    return(
      <div>
        <button onClick={this.props.logoutAction} className="logout-button menu-button">Logout</button>
        <Link className="link-style" to={`/users`}>
          <FontAwesomeIcon className="menu-icon menu-button" size="1x" icon={faUsers} />
        </Link>
        <Link className="link-style" to={`/feed`}>
          <FontAwesomeIcon className="menu-icon menu-button" size="1x" icon={faNewspaper} />
        </Link>
        <Link className="link-style" to={`/profile/${this.props.alias}`}>
          <FontAwesomeIcon className="menu-icon menu-button" size="1x" icon={faHome} />
        </Link>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    alias: state.login.alias
  };
}

export default connect(mapStateToProps, { logoutAction })(HomeButtons);
