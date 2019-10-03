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
                <img className="profile-image" alt="prof pic" src={this.props.photo} />
                </Grid>
              <Grid item xs={9}>
                <div className="profile-name-alias">
                  <div className="profile-name">
                    {this.props.name}
                  </div>
                  <div className="profile-alias">
                    @{this.props.alias}
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
