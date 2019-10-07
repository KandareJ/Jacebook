import React, { Component } from 'react';
import { Grid } from '@material-ui/core';
import PostList from '../PostList/PostList';
import SideMenu from '../SideMenu/SideMenu';

export default class Profile extends Component {

  render() {
    let post = [];
    if(this.props.match) post.push(this.props.match.params.id)
    return(
      <div className="feed-body">
        <Grid container spacing={2}>
          <Grid item xs={2} />

          <Grid item xs={2}>
            <SideMenu />
          </Grid>

          <Grid item xs={5}>
            <PostList posts={post} alias={this.props.alias} / >
          </Grid>

          <Grid item xs={3} />
        </Grid>
      </div>
    );
  }
}
