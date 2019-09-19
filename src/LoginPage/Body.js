import React, { Component } from 'react';
import { Grid } from '@material-ui/core';
import CreateAccount from './CreateAccount';
import './LoginPage.css'

export default class Body extends Component {
  render() {
    return(
      <div className="login-body">
        <Grid container spacing={3}>
          <Grid item xs={6} />
          <Grid item xs={6}>
            <CreateAccount />
          </Grid>
        </Grid>
      </div>
    );
  }
}
