import React, { Component } from 'react';
import { Grid } from '@material-ui/core';
import Post from '../Post/Post';
import NewPost from './NewPost';
import SideMenu from '../SideMenu/SideMenu';
import './NewsFeed.css';

export default class Newsfeed extends Component {
  render() {
    return(
      <div className="feed-body">
        <Grid container spacing={3}>
          <Grid item xs={2} />
          <Grid item xs={2}>
            <SideMenu />
          </Grid>
          <Grid item xs={5}>
            <div className="scrollable-content">
              <NewPost photo="https://scontent-lax3-1.xx.fbcdn.net/v/t31.0-8/20229865_10213586156551604_8464216565975150589_o.jpg?_nc_cat=102&_nc_oc=AQlgXNJsxk9SXLcFjwKqPmypq4PgPZiIqxoBGbmVtUHkcdb6vX2K31OSds80oKlGSXg&_nc_ht=scontent-lax3-1.xx&oh=d13cce585230496816450947a5a7dc92&oe=5DF932A0" />
              <br />
              <Post
                post={{
                  prof: "https://scontent-lax3-1.xx.fbcdn.net/v/t1.0-9/57284496_2617771131626642_8670758566476382208_n.jpg?_nc_cat=108&_nc_oc=AQm594LhMflga0VDCkYyK5B3SBbJPAV2eXIEV6y3NcDtTDtPieN5ZyUt-_CTtrEC37I&_nc_ht=scontent-lax3-1.xx&oh=b7c368b42054fa2123c094bcf8afec08&oe=5E386002",
                  alias: "BananaBoy",
                  name: "Norbert Martin",
                  media: "https://images.agoramedia.com/everydayhealth/gcms/All-About-Bananas-Nutrition-Facts-Health-Benefits-Recipes-and-More-RM-722x406.jpg",
                  content: "Love me them #Bananas lol where that #MichaelBlackSpecial at? @j",
                  timestamp: "1:00 am",
                  mentions: ["j"],
                  hashtags: ["Bananas", "MichaelBlackSpecial"]
                }}
                />
              </div>
          </Grid>
          <Grid item xs={3}>
          </Grid>
        </Grid>
      </div>
    );
  }
}
