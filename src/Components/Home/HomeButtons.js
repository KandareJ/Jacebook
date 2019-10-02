import React, { Component } from 'react';
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
        <FontAwesomeIcon className="menu-icon menu-button" size="1x" icon={faUsers} />
        <FontAwesomeIcon className="menu-icon menu-button" size="1x" icon={faNewspaper} />
        <FontAwesomeIcon className="menu-icon menu-button" size="1x" icon={faHome} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
  };
}

export default connect(mapStateToProps, { logoutAction })(HomeButtons);
