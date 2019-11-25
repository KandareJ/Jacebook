import React, { Component } from 'react';
import { getHashTagAction } from '../../Actions/HashtagAction';
import { connect } from 'react-redux';
import { Grid } from '@material-ui/core';
import SideMenu from '../SideMenu/SideMenu';
import PostList from '../PostList/PostList';

class UsersPage extends Component {
  componentDidMount() {
    if(this.props.match) {
      this.props.getHashTagAction(this.props.match.params.hashtag);
    }
  }

  componentDidUpdate(prevProps) {
    if ((this.props.match && !prevProps.match) || (this.props.match && this.props.match.params.hashtag !== prevProps.match.params.hashtag)) {
      this.props.getHashTagAction(this.props.match.params.hashtag);
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
            {this.props.tags && this.props.match &&
               <PostList className="user-page" posts={this.props.tags} difCheck={true} />}
          </Grid>

          <Grid item xs={3} />
        </Grid>
      </div>
    );
  }
}

const mapStateToProps = (state, props) => {
  let tag = props.match.params.hashtag;
  return {
    tags: state.tags ? (state.tags[tag] ? state.tags[tag] : []) : []
  };
}

export default connect(mapStateToProps, { getHashTagAction })(UsersPage);
