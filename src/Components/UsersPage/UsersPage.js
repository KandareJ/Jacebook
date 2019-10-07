import React, { Component } from 'react';
import { getProfile } from '../../Actions';
import { connect } from 'react-redux';
import { Grid } from '@material-ui/core';
import SideMenu from '../SideMenu/SideMenu';
import PeopleList from '../PeopleList/PeopleList';
import './UsersPage.css';

class UsersPage extends Component {
  componentDidMount() {
    if(this.props.match) {
      this.props.getProfile(this.props.match.params.alias);
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props.match.params.alias !== prevProps.match.params.alias) {
      this.props.getProfile(this.props.match.params.alias);
    }
  }

  render() {
    return(
      <div className="feed-body">
        <Grid container spacing={2}>
          <Grid item xs={2} />

          <Grid item xs={2} >
            <SideMenu />
          </Grid>

          <Grid item xs={5}>
            {this.props.match && this.props.match.path.substr(0,11) === "/following/" &&
              <PeopleList className="user-page" header={`${this.props.match.params.alias} is following:`} people={this.props.following}/>}
            {this.props.match && this.props.match.path.substr(0,11) === "/followers/" &&
              <PeopleList className="user-page" header={`${this.props.match.params.alias} is followed by:`} people={this.props.followers}/>}
          </Grid>

          <Grid item xs={3} />
        </Grid>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    following: state.profile ? state.profile.following : [],
    followers: state.profile ? state.profile.followers : []
  };
}

export default connect(mapStateToProps, { getProfile })(UsersPage);
