import React, { Component } from 'react';
import { Grid } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import NewPostButtons from './NewPostButtons';
import './NewsFeed.css';

export default class NewPost extends Component {
  render() {
    return(
      <div>
        <Card>
          <div className="new-content-header">Create Post</div>
          <div className="card-padding">
            <Grid container spacing={3}>
              <Grid item xs={2} >
                <img className="thumbnail-image" alt="prof pic" src={this.props.photo} />
              </Grid>
              <Grid item xs={10}>
                <textarea className="new-post-content" placeholder="What's on your mind?"></textarea>
              </Grid>
            </Grid>
            <hr className="divider" />
            <NewPostButtons />
          </div>
        </Card>
      </div>
    );
  }
}
