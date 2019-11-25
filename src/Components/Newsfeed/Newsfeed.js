import React, { Component } from 'react';
import { Grid } from '@material-ui/core';
import PostList from '../PostList/PostList';
import NewPost from './NewPost';
import SideMenu from '../SideMenu/SideMenu';
import { connect } from 'react-redux';
import { getNewsFeedAction, getMoreNewsFeedAction } from '../../Actions/FeedAction';
import './NewsFeed.css';

class Newsfeed extends Component {
  componentDidMount() {
    if(this.props.alias) this.props.getNewsFeedAction(this.props.alias);
  }

  loadMore() {
    return () => {
      this.props.getMoreNewsFeedAction(this.props.alias, this.props.feed[this.props.feed.length - 1].timestamp);
      //this.props.getMorePostsAction(this.props.alias, this.props.feed[this.props.feed.length - 1].id);
    }
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
              <PostList alias={this.props.alias} posts={this.props.feed} />
              <button onClick={this.loadMore()} className="form-button">View More</button>
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

export default connect(mapStateToProps, { getNewsFeedAction, getMoreNewsFeedAction })(Newsfeed);
