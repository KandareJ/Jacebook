import React, { Component } from 'react';
import { Grid } from '@material-ui/core';
import Post from '../Post/Post';
import NewPost from '../Newsfeed/NewPost';
import ProfileHead from './ProfileHead';
import PeopleList from '../PeopleList/PeopleList';
import { getProfile } from '../../Actions';
import { connect } from 'react-redux';
import './Profile.css';

class Profile extends Component {
  //this.props.match.params.alias
  componentDidMount() {
    this.props.getProfile(this.props.match.params.alias);
  }

  componentDidUpdate(prevProps) {
  if(this.props.match.params.alias !== prevProps.match.params.alias)
  {
    this.props.getProfile(this.props.match.params.alias);
  }
}

  render() {
    return(
      <div className="feed-body">
        <ProfileHead alias={this.props.alias} name={this.props.name} photo={this.props.photo} />

        <Grid container spacing={2}>
          <Grid item xs={2} />
          <Grid item xs={3}>

            <PeopleList className="follows" header="Following" people={this.props.following}/>
            <br />

            <PeopleList className="follows" header="Followers" people={this.props.followers} />

          </Grid>
          <Grid item xs={5}>
            <div className="scrollable-content">
              <NewPost photo={this.props.photo} />
              <br />
              <Post
                post={{
                  prof: "https://scontent-lax3-1.xx.fbcdn.net/v/t1.0-9/57284496_2617771131626642_8670758566476382208_n.jpg?_nc_cat=108&_nc_oc=AQm594LhMflga0VDCkYyK5B3SBbJPAV2eXIEV6y3NcDtTDtPieN5ZyUt-_CTtrEC37I&_nc_ht=scontent-lax3-1.xx&oh=b7c368b42054fa2123c094bcf8afec08&oe=5E386002",
                  alias: "BananaBoy",
                  name: "Norbert Martin",
                  media: "https://images.agoramedia.com/everydayhealth/gcms/All-About-Bananas-Nutrition-Facts-Health-Benefits-Recipes-and-More-RM-722x406.jpg",
                  content: "Love me them #Bananas lol where that #MichaelBlackSpecial at? @FratBoiBlack",
                  timestamp: "1:00 am",
                  mentions: ["FratBoiBlack"],
                  hashtags: ["Bananas", "MichaelBlackSpecial"]
                }}
                />
              </div>
          </Grid>
          <Grid item xs={2}>
          </Grid>
        </Grid>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    alias: state.profile ? state.profile.alias : "",
    name: state.profile ? state.profile.name : "",
    photo: state.profile ? state.profile.photo : "",
    posts: state.profile ? state.profile.posts : [],
    following: state.profile ? state.profile.following : null,
    followers: state.profile ? state.profile.followers : null
  };
}

export default connect(mapStateToProps, { getProfile })(Profile);
