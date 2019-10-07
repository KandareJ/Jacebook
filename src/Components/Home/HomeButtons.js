import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faNewspaper, faUsers, faUserFriends } from '@fortawesome/free-solid-svg-icons';
import { connect } from 'react-redux';
import { logoutAction } from '../../Actions/LoginAction';
import './Home.css';

class HomeButtons extends Component {

  render() {
    return(
      <div>
        <button onClick={this.props.logoutAction} className="logout-button menu-button">Logout</button>
        <Link className="link-style" to={`/following/${this.props.alias}`}>
          <FontAwesomeIcon className="menu-icon menu-button" size="1x" icon={faUserFriends} />
        </Link>
        <Link className="link-style" to={`/followers/${this.props.alias}`}>
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
