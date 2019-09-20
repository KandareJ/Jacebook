import React, { Component } from 'react';
import { Grid } from '@material-ui/core';
import './LoginView.css'

export default class Footer extends Component {
  render() {
    return(
      <div>
        <Grid container spacing={3}>
          <Grid item xs={3} />
          <Grid item xs={9}>
            <p className="footer-text">Jacebook © 2019</p>
          </Grid>
        </Grid>
      </div>
    );
  }
}
