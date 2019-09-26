import React, { Component } from 'react';
import { Grid } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faImage, faVideo } from '@fortawesome/free-solid-svg-icons';
import './NewsFeed.css';

export default class NewPostButtons extends Component {
  render() {
    return(
      <div>
        <Grid container spacing={3}>
          <Grid item xs={4}>
            <button className="new-content-media">
              <FontAwesomeIcon className="icon-color" size="x" icon={faImage} />
              <div>Add Image</div>
            </button>
          </Grid>
          <Grid item xs={4}>
            <FontAwesomeIcon className="new-content-media" size="x" icon={faVideo} />
          </Grid>
          <Grid item xs={4}>
            <button>Create</button>
          </Grid>
        </Grid>
      </div>
    );
  }
}
