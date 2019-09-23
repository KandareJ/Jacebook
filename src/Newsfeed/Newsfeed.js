import React, { Component } from 'react';
import { Grid } from '@material-ui/core';
import NewPost from './NewPost';
import './NewsFeed.css';

export default class Newsfeed extends Component {
  render() {
    return(
      <div className="feed-body">
        <Grid container spacing={3}>
          <Grid item xs={4} />
          <Grid item xs={4}>
            <NewPost />
          </Grid>
          <Grid item xs={4}>
          </Grid>
        </Grid>
      </div>
    );
  }
}
