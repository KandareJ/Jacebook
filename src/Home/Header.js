import React, { Component } from 'react';
import { AppBar, Grid } from '@material-ui/core';
import SearchBar from './SearchBar';
import HomeButtons from './HomeButtons';
import './Home.css';

export default class Header extends Component {

  render() {
    return(
      <div>
        <AppBar className="menu-bar">
          <Grid container spacing={3}>
            <Grid item xs={3} />

            <Grid item xs={2}>
              <SearchBar />
            </Grid>

            <Grid item xs={4}>
              <HomeButtons />
            </Grid>

            <Grid item xs={3} />
          </Grid>
        </AppBar>
      </div>
    );
  }
}
