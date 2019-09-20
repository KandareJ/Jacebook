import React, { Component } from 'react';
import { Grid } from '@material-ui/core';

export default class Newsfeed extends Component {
  render() {
    return(
      <div className="login-body">
        <Grid container spacing={3}>
          <Grid item xs={3} />
          <Grid item xs={3}>
          </Grid>
          <Grid item xs={6}>
          </Grid>
        </Grid>
      </div>
    );
  }
}
