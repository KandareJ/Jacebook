import React, { Component } from 'react';
import { Grid } from '@material-ui/core';
import NewPostButtons from './NewPostButtons';
import Card from '@material-ui/core/Card';
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
                <img className="thumbnail-image" src="https://scontent-lax3-1.xx.fbcdn.net/v/t31.0-8/20229865_10213586156551604_8464216565975150589_o.jpg?_nc_cat=102&_nc_oc=AQlgXNJsxk9SXLcFjwKqPmypq4PgPZiIqxoBGbmVtUHkcdb6vX2K31OSds80oKlGSXg&_nc_ht=scontent-lax3-1.xx&oh=d13cce585230496816450947a5a7dc92&oe=5DF932A0" />
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
