import React, { Component } from 'react';
import { Grid } from '@material-ui/core';
import PostList from '../PostList/PostList';
import NewPost from '../Newsfeed/NewPost';
import ProfileHead from './ProfileHead';
import PeopleList from '../PeopleList/PeopleList';
import { getProfile } from '../../Actions';
import { connect } from 'react-redux';
import './Profile.css';

class Profile extends Component {
  //this.props.match.params.alias
  componentDidMount() {
    this.props.getProfile(this.props.match.params.alias);
  }

  componentDidUpdate(prevProps) {
    if (this.props.match.params.alias !== prevProps.match.params.alias) {
      this.props.getProfile(this.props.match.params.alias);
    }
  }

  render() {
    return(
      <div className="feed-body">
        <ProfileHead alias={this.props.alias} name={this.props.name} photo={this.props.photo} />

        <Grid container spacing={2}>
          <Grid item xs={2} />

          <Grid item xs={3}>
            <PeopleList className="follows" header="Following" people={this.props.following}/>
            <br />
            <PeopleList className="follows" header="Followers" people={this.props.followers} />
          </Grid>

          <Grid item xs={5}>
            <div className="scrollable-content">
              <NewPost updateList={this.props.getProfile} />
              <PostList posts={this.props.posts} / >
            </div>
          </Grid>

          <Grid item xs={2} />
        </Grid>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    alias: state.profile ? state.profile.alias : "",
    name: state.profile ? state.profile.name : "",
    photo: state.profile ? state.profile.photo : "",
    posts: state.profile ? state.profile.posts : [],
    following: state.profile ? state.profile.following : null,
    followers: state.profile ? state.profile.followers : null
  };
}

export default connect(mapStateToProps, { getProfile })(Profile);
