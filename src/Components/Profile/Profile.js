import React, { Component } from 'react';
import { Grid } from '@material-ui/core';
import PostList from '../PostList/PostList';
import NewPost from '../Newsfeed/NewPost';
import ProfileHead from './ProfileHead';
import PeopleList from '../PeopleList/PeopleList';
import { getFollowers, getFollowing, getProfile } from '../../Actions/ProfileAction';
import { getPostListAction } from '../../Actions/FeedAction';
import { connect } from 'react-redux';
import './Profile.css';

class Profile extends Component {
  //this.props.match.params.alias
  componentDidMount() {
    this.props.getFollowers(this.props.match.params.alias);
    this.props.getFollowing(this.props.match.params.alias);
    this.props.getPostListAction(this.props.match.params.alias);
    this.props.getProfile(this.props.match.params.alias);
  }

  componentDidUpdate(prevProps) {
    if (this.props.match.params.alias !== prevProps.match.params.alias) {
      this.props.getFollowers(this.props.match.params.alias);
      this.props.getFollowing(this.props.match.params.alias);
      this.props.getProfile(this.props.match.params.alias);
    }
  }

  render() {
    return(
      <div className="feed-body">
        <ProfileHead alias={this.props.alias} name={this.props.name} photo={this.props.photo} isMe={this.props.isMe} />

        <Grid container spacing={2}>
          <Grid item xs={2} />

          <Grid item xs={3}>
            <PeopleList className="follows" header="Following" people={this.props.following} alias={this.props.match.params.alias} max={6}/>
            <br />
            <PeopleList className="follows" header="Followers" people={this.props.followers} max={6} />
          </Grid>

          <Grid item xs={5}>
            <div className="scrollable-content">
              {this.props.isMe && <NewPost updateList={this.props.getProfile} />}
              <PostList posts={this.props.posts} alias={this.props.alias} / >
              <button className="form-button">View More</button>
            </div>
          </Grid>

          <Grid item xs={2} />
        </Grid>
      </div>
    );
  }
}

const mapStateToProps = (state, props) => {
  let profAlias = props.match.params.alias;
  let isMe = (state.login && state.login.alias === profAlias);
  return {
    alias: state.profile ? (state.profile[profAlias] ? state.profile[profAlias].alias : "") : "",
    name: state.profile ? (state.profile[profAlias] ? state.profile[profAlias].name : "") : "",
    photo: state.profile ? (state.profile[profAlias] ? state.profile[profAlias].photo : "") : "",
    posts: state.profile ? (state.profile[profAlias] ? state.profile[profAlias].story : []) : [],
    following: state.following ? state.following[profAlias] : null,
    followers: state.followers ? state.followers[profAlias] : null,
    isMe
  };
}

export default connect(mapStateToProps, { getFollowers, getFollowing, getPostListAction, getProfile })(Profile);
