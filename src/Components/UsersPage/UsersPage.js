import React, { Component } from 'react';
import { getFollowers, getFollowing, getMoreFollowing, getMoreFollowers } from '../../Actions/ProfileAction';
import { connect } from 'react-redux';
import { Grid } from '@material-ui/core';
import SideMenu from '../SideMenu/SideMenu';
import PeopleList from '../PeopleList/PeopleList';
import './UsersPage.css';

class UsersPage extends Component {
  componentDidMount() {
    if(this.props.match) {
      this.props.getFollowers(this.props.match.params.alias);
      this.props.getFollowing(this.props.match.params.alias);
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props.match.params.alias !== prevProps.match.params.alias) {
      this.props.getFollowers(this.props.match.params.alias);
      this.props.getFollowing(this.props.match.params.alias);
    }
  }

  loadMore() {
    return () => {
      if(this.props.match.path.substr(7,3) === "ing")this.props.getMoreFollowing(this.props.match.params.alias, this.props.following[this.props.following.length - 1].alias);
      else this.props.getMoreFollowers(this.props.match.params.alias, this.props.followers[this.props.followers.length - 1].alias);
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
              <button onClick={this.loadMore()} className="form-button">View More</button>
          </Grid>

          <Grid item xs={3} />
        </Grid>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    following: state.following ? state.following : null,
    followers: state.followers ? state.followers : null,
  };
}

export default connect(mapStateToProps, { getFollowers, getFollowing, getMoreFollowing, getMoreFollowers })(UsersPage);
