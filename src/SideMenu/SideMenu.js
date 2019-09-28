import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faNewspaper, faUsers, faUserFriends } from '@fortawesome/free-solid-svg-icons';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import './SideMenu.css';

export default class SideMenu extends Component {
  render() {
    return(
      <List className={this.props.className}>
        <ListItem button>
          <FontAwesomeIcon className="side-menu-icon" size="1x" icon={faHome} />
          <div className="side-menu-text">My Profile</div>
        </ListItem>

        <ListItem button>
          <FontAwesomeIcon className="side-menu-icon" size="1x" icon={faNewspaper} />
          <div className="side-menu-text">News Feed</div>
        </ListItem>

        <ListItem button>
          <FontAwesomeIcon className="side-menu-icon" size="1x" icon={faUsers} />
          <div className="side-menu-text">My Followers</div>
        </ListItem>

        <ListItem button>
          <FontAwesomeIcon className="side-menu-icon" size="1x" icon={faUserFriends} />
          <div className="side-menu-text">I'm Following</div>
        </ListItem>
      </List>
    );
  }
}
