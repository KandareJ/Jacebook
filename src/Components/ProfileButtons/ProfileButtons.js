import React, { Component } from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import { connect } from 'react-redux';
import { follow, unfollow, isFollowing } from '../../Actions/Follow';
import { getFollowers, getProfile, getStory } from '../../Actions/ProfileAction';
import { updatePic } from '../../Actions/ProfilePicAction';
import { getNewsFeedAction } from '../../Actions/FeedAction';
import './ProfileButton.css';

class ProfileButtons extends Component {
  constructor(props) {
    super(props);

    this.followUser = this.followUser.bind(this);
    this.followCallback = this.followCallback.bind(this);
    this.unfollowUser = this.unfollowUser.bind(this);
    this.unfollowCallback = this.followCallback.bind(this);
    this.onUpload = this.onUpload.bind(this);
    this.uploadCallback = this.uploadCallback.bind(this);
  }

  followUser() {
    if(this.props.token && this.props.profAlias) {
      follow(this.props.token, this.props.profAlias, this.followCallback);
    }
  }

  followCallback() {
    if(this.props.getFollowers && this.props.profAlias){
      this.props.getFollowers(this.props.profAlias);
      this.props.isFollowing(this.props.token, this.props.profAlias);
    }
  }

  unfollowUser() {
    if(this.props.alias && this.props.profAlias) {
      unfollow(this.props.token, this.props.profAlias, this.followCallback);
    }
  }

  unfollowCallback() {
    if(this.props.getFollowers && this.props.profAlias){
      this.props.getFollowers(this.props.profAlias);
      this.props.isFollowing(this.props.token, this.props.profAlias);
    }
  }

  onUpload(e) {
    var reader = new FileReader();
    reader.readAsDataURL(e.target.files[0]);
    reader.onload = () => {
      this.props.updatePic(this.props.token, reader.result, this.uploadCallback);
    };
  }

  uploadCallback() {
    this.props.getProfile(this.props.profAlias);
    this.props.getStory(this.props.profAlias);
    this.props.getNewsFeedAction(this.props.profAlias);
  }

  render() {
    if(this.props.token && this.props.profAlias)this.props.isFollowing(this.props.token, this.props.profAlias);
    return(
      <List className={this.props.className}>

          { !this.props.isMe && !this.props.isFollowingBool &&
            <ListItem button className="profile-button" onClick={this.followUser}>
              <div className="side-menu-text">Follow</div>
            </ListItem>
          }

          { !this.props.isMe && this.props.isFollowingBool &&
            <ListItem button className="profile-button" onClick={this.unfollowUser}>
              <div className="side-menu-text">Unfollow</div>
            </ListItem>
          }

          <input className="add-media-hidden" id="editImage" type="file" name="media" accept="image/*" onChange={this.onUpload} />

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

const mapStateToProps = (state, props) => {
  let isFollowingBool = (state.profile && state.isFollowing && state.isFollowing[props.profAlias]);
  return {
    alias: state.login.alias,
    token: state.login.authToken,
    isFollowingBool
  };
}

export default connect(mapStateToProps, { getFollowers, isFollowing, getProfile, getStory, getNewsFeedAction, updatePic })(ProfileButtons);
