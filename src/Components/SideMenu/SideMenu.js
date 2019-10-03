import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faNewspaper, faUsers, faUserFriends } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import { connect } from 'react-redux';
import './SideMenu.css';

class SideMenu extends Component {
  render() {
    return(
      <List className={this.props.className}>
        <Link className="link-style" to={`/profile/${this.props.alias}`}>
          <ListItem button>
            <FontAwesomeIcon className="side-menu-icon" size="1x" icon={faHome} />
            <div className="side-menu-text">My Profile</div>
          </ListItem>
        </Link>

        <Link className="link-style" to="/feed">
          <ListItem button>
            <FontAwesomeIcon className="side-menu-icon" size="1x" icon={faNewspaper} />
            <div className="side-menu-text">News Feed</div>
          </ListItem>
        </Link>

        <Link className="link-style" to="/users">
          <ListItem button>
            <FontAwesomeIcon className="side-menu-icon" size="1x" icon={faUsers} />
            <div className="side-menu-text">My Followers</div>
          </ListItem>
        </Link>

        <Link className="link-style" to="/users">
          <ListItem button>
            <FontAwesomeIcon className="side-menu-icon" size="1x" icon={faUserFriends} />
            <div className="side-menu-text">I'm Following</div>
          </ListItem>
        </Link>
      </List>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    alias: state.login.alias
  };
}

export default connect(mapStateToProps)(SideMenu);
