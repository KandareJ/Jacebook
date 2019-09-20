import React, { Component } from 'react';
import { AppBar, Grid } from '@material-ui/core';
import LoginForm from './LoginForm';
import './LoginView.css'

export default class Header extends Component {

  render() {
    return(
      <div>
        <AppBar className="app-bar" position="absolute">
        <Grid container spacing={3}>
          <Grid item xs={3} />

          <Grid item xs={3}>
            <h2 className="jacebook-title">Jacebook</h2>
          </Grid>

          <Grid item xs={6}>
            <LoginForm />
          </Grid>
        </Grid>
        </AppBar>
      </div>
    );
  }
}
