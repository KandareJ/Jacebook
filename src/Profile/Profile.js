import React, { Component } from 'react';
import { Grid } from '@material-ui/core';
import Post from '../Post/Post';
import NewPost from '../Newsfeed/NewPost';
import ProfileHead from './ProfileHead';
import PeopleList from '../PeopleList/PeopleList';
import './Profile.css';

export default class Newsfeed extends Component {
  render() {
    return(
      <div className="feed-body">
        <ProfileHead />

        <Grid container spacing={2}>
          <Grid item xs={2} />
          <Grid item xs={3}>

            <PeopleList className="follows" header="I'm following" people={[
              {
                name: "Cassie O'Keeffe",
                alias: "Casshole",
                photo: "https://scontent-lax3-1.xx.fbcdn.net/v/t1.0-9/57155037_100264351180970_1432501369947815936_n.jpg?_nc_cat=103&_nc_oc=AQnfDYARPsez5H0f4c4HJijK7XuvlTpKItfaSda28HYtFlsHQAduNJijZs27yLjUD0M&_nc_ht=scontent-lax3-1.xx&oh=e0ef84c1608f8546367184983f8305f9&oe=5E2C44C3"
              },
              {
                name: "Michael Black",
                alias: "FratBoiBlack",
                photo: "https://scontent-lax3-1.xx.fbcdn.net/v/t1.0-9/38448873_1953444824714622_5916553050671022080_n.jpg?_nc_cat=105&_nc_oc=AQnGKZM_kFTgBLOt0Sxptj3Uj9zT-LsT32HDcs8UvHpT1ITObLbC_zmGWSiS7BPAK4A&_nc_ht=scontent-lax3-1.xx&oh=b1c92a25462f97e3a354cef3012da4d9&oe=5DFA6F2F"
              },
              {
                name: "Cassie O'Keeffe",
                alias: "Casshole",
                photo: "https://scontent-lax3-1.xx.fbcdn.net/v/t1.0-9/57155037_100264351180970_1432501369947815936_n.jpg?_nc_cat=103&_nc_oc=AQnfDYARPsez5H0f4c4HJijK7XuvlTpKItfaSda28HYtFlsHQAduNJijZs27yLjUD0M&_nc_ht=scontent-lax3-1.xx&oh=e0ef84c1608f8546367184983f8305f9&oe=5E2C44C3"
              },
              {
                name: "Michael Black",
                alias: "FratBoiBlack",
                photo: "https://scontent-lax3-1.xx.fbcdn.net/v/t1.0-9/38448873_1953444824714622_5916553050671022080_n.jpg?_nc_cat=105&_nc_oc=AQnGKZM_kFTgBLOt0Sxptj3Uj9zT-LsT32HDcs8UvHpT1ITObLbC_zmGWSiS7BPAK4A&_nc_ht=scontent-lax3-1.xx&oh=b1c92a25462f97e3a354cef3012da4d9&oe=5DFA6F2F"
              },
              {
                name: "Cassie O'Keeffe",
                alias: "Casshole",
                photo: "https://scontent-lax3-1.xx.fbcdn.net/v/t1.0-9/57155037_100264351180970_1432501369947815936_n.jpg?_nc_cat=103&_nc_oc=AQnfDYARPsez5H0f4c4HJijK7XuvlTpKItfaSda28HYtFlsHQAduNJijZs27yLjUD0M&_nc_ht=scontent-lax3-1.xx&oh=e0ef84c1608f8546367184983f8305f9&oe=5E2C44C3"
              },
              {
                name: "Michael Black",
                alias: "FratBoiBlack",
                photo: "https://scontent-lax3-1.xx.fbcdn.net/v/t1.0-9/38448873_1953444824714622_5916553050671022080_n.jpg?_nc_cat=105&_nc_oc=AQnGKZM_kFTgBLOt0Sxptj3Uj9zT-LsT32HDcs8UvHpT1ITObLbC_zmGWSiS7BPAK4A&_nc_ht=scontent-lax3-1.xx&oh=b1c92a25462f97e3a354cef3012da4d9&oe=5DFA6F2F"
              },
            ]} />
            <br />

            <PeopleList className="follows" header="Following Me" people={[
              {
                name: "Cassie O'Keeffe",
                alias: "Casshole",
                photo: "https://scontent-lax3-1.xx.fbcdn.net/v/t1.0-9/57155037_100264351180970_1432501369947815936_n.jpg?_nc_cat=103&_nc_oc=AQnfDYARPsez5H0f4c4HJijK7XuvlTpKItfaSda28HYtFlsHQAduNJijZs27yLjUD0M&_nc_ht=scontent-lax3-1.xx&oh=e0ef84c1608f8546367184983f8305f9&oe=5E2C44C3"
              },
              {
                name: "Michael Black",
                alias: "FratBoiBlack",
                photo: "https://scontent-lax3-1.xx.fbcdn.net/v/t1.0-9/38448873_1953444824714622_5916553050671022080_n.jpg?_nc_cat=105&_nc_oc=AQnGKZM_kFTgBLOt0Sxptj3Uj9zT-LsT32HDcs8UvHpT1ITObLbC_zmGWSiS7BPAK4A&_nc_ht=scontent-lax3-1.xx&oh=b1c92a25462f97e3a354cef3012da4d9&oe=5DFA6F2F"
              }
            ]} />

          </Grid>
          <Grid item xs={5}>
            <div className="scrollable-content">
              <NewPost />
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
