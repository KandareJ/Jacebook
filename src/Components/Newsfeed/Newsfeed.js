import React, { Component } from 'react';
import { Grid } from '@material-ui/core';
import PostList from '../PostList/PostList';
import NewPost from './NewPost';
import SideMenu from '../SideMenu/SideMenu';
import { connect } from 'react-redux';
import {getPostListAction, getMorePostsAction } from '../../Actions/FeedAction';
import './NewsFeed.css';

class Newsfeed extends Component {
  componentDidMount() {
    if(this.props.alias) this.props.getPostListAction(this.props.alias);
  }

  loadMore() {
    return () => {
      this.props.getMorePostsAction(this.props.alias, this.props.feed[this.props.feed.length - 1].id);
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
              <NewPost updateList={this.props.getPostListAction} />
              <PostList alias={this.props.alias} />
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
    feed: state.posts ? state.posts : [],
    alias: state.login.alias
  };
}

export default connect(mapStateToProps, { getPostListAction, getMorePostsAction })(Newsfeed);
