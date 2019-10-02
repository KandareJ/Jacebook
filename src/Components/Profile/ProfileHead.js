import React, { Component } from 'react';
import { Grid } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import SideMenu from '../SideMenu/SideMenu';
import './Profile.css';

export default class ProfileHead extends Component {
  render() {
    return(
      <div>
        <Grid container spacing={3}>
          <Grid item xs={2} />
          <Grid item xs={8}>

            <Card className="profile-head-card">
            <Grid container spacing={1}>
              <Grid item xs={3} >
                <img className="profile-image" alt="prof pic" src="https://scontent-lax3-1.xx.fbcdn.net/v/t31.0-8/20229865_10213586156551604_8464216565975150589_o.jpg?_nc_cat=102&_nc_oc=AQlgXNJsxk9SXLcFjwKqPmypq4PgPZiIqxoBGbmVtUHkcdb6vX2K31OSds80oKlGSXg&_nc_ht=scontent-lax3-1.xx&oh=d13cce585230496816450947a5a7dc92&oe=5DF932A0" />
                </Grid>
              <Grid item xs={9}>
                <div className="profile-name-alias">
                  <div className="profile-name">
                    Jace Kandare
                  </div>
                  <div className="profile-alias">
                    @JKandy
                  </div>
                </div>
                <div className="float-bottom">
                  <SideMenu className="list-horizontal-display" />
                </div>
              </Grid>
            </Grid>
            </Card>

          </Grid>
          <Grid item xs={2} />
        </Grid>
      </div>
    );
  }
}
