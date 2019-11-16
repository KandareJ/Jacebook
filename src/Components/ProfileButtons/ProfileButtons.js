import React, { Component } from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import { connect } from 'react-redux';
import { follow, unfollow } from '../../Actions/Follow';
import { getProfile } from '../../Actions/ProfileAction';
import './ProfileButton.css';

class ProfileButtons extends Component {
  constructor(props) {
    super(props);

    this.followUser = this.followUser.bind(this);
    this.followCallback = this.followCallback.bind(this);
    this.unfollowUser = this.unfollowUser.bind(this);
    this.unfollowCallback = this.followCallback.bind(this);
  }

  followUser() {
    if(this.props.alias && this.props.profAlias) {
      follow(this.props.alias, this.props.profAlias, this.followCallback);
    }
  }

  followCallback() {
    if(this.props.getProfile && this.props.profAlias){
      this.props.getProfile(this.props.profAlias);
    }
  }

  unfollowUser() {
    if(this.props.alias && this.props.profAlias) {
      unfollow(this.props.alias, this.props.profAlias, this.followCallback);
    }
  }

  unfollowCallback() {
    if(this.props.getProfile && this.props.profAlias){
      this.props.getProfile(this.props.profAlias);
    }
  }

  render() {
    return(
      <List className={this.props.className}>

          { !this.props.isMe && /*!this.props.isFollowing*/false &&
            <ListItem button className="profile-button" onClick={this.followUser}>
              <div className="side-menu-text">Follow</div>
            </ListItem>
          }

          { !this.props.isMe && /*this.props.isFollowing*/true &&
            <ListItem button className="profile-button" onClick={this.unfollowUser}>
              <div className="side-menu-text">Unfollow</div>
            </ListItem>
          }

          <input className="add-media-hidden" id="editImage" type="file" name="media" accept="image/*" />

          { this.props.isMe &&
          <label htmlFor="editImage" className="button-inline">
            <ListItem className="profile-button" button>
              <div className="side-menu-text">Edit Profile pic</div>
            </ListItem>
          </label>
          }

      </List>
    );
  }
}

const myIncludes = (array, value) => {
  /*let reduced = array.map((x) => {
    return x.alias;
  });

  return reduced.includes(value);*/
}

const mapStateToProps = (state) => {
  let isMe = (state.login && state.profile && state.login.alias === state.profile.alias);
  let isFollowing = (state.login && state.profile && myIncludes(state.profile.followers, state.login.alias));
  return {
    alias: state.login.alias,
    isMe,
    isFollowing,
    profAlias: state.profile ? state.profile.alias : ""
  };
}

export default connect(mapStateToProps, { getProfile })(ProfileButtons);
