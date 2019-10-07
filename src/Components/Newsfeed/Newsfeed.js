import React, { Component } from 'react';
import { Grid } from '@material-ui/core';
import PostList from '../PostList/PostList';
import NewPost from './NewPost';
import SideMenu from '../SideMenu/SideMenu';
import { connect } from 'react-redux';
import { getNewsFeedAction } from '../../Actions/FeedAction';
import './NewsFeed.css';

class Newsfeed extends Component {
  componentDidMount() {
    if(this.props.alias) this.props.getNewsFeedAction(this.props.alias);
  }
  render() {
    return(
      <div className="feed-body">
        <Grid container spacing={3}>
          <Grid item xs={2} />
          <Grid item xs={2}>
            <SideMenu />
          </Grid>
          <Grid item xs={5}>
            <div className="scrollable-content">
              <NewPost updateList={this.props.getNewsFeedAction} />
              <PostList posts={this.props.feed} alias={this.props.alias} />
            </div>
          </Grid>
          <Grid item xs={3}>
          </Grid>
        </Grid>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    feed: state.feed ? state.feed : [],
    alias: state.login.alias
  };
}

export default connect(mapStateToProps, { getNewsFeedAction })(Newsfeed);
