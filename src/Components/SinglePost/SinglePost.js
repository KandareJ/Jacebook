import React, { Component } from 'react';
import { Grid } from '@material-ui/core';
import PostList from '../PostList/PostList';
import SideMenu from '../SideMenu/SideMenu';
import { connect } from 'react-redux';
import { singlePost } from '../../Actions/SinglePostAction';

class SinglePost extends Component {

  componentDidMount() {
    if(this.props.match) this.props.singlePost(this.props.match.params.id);
  }

  render() {
    let post = [];

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

const mapStateToProps = (state) => {
  return {
    displayPosts: (state.posts) ? state.posts : []
  };
}

export default connect(mapStateToProps, { singlePost })(SinglePost);
