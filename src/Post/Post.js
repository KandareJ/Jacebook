import React, { Component } from 'react';
import { Grid } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Mention from '../Mention/Mention';
import Hashtag from '../Hashtag/Hashtag';
import './Post.css';

export default class Post extends Component {
  convertContent(content) {
    let toRet = [""];
    var j = 0;

    for (var i = 0; i < content.length; i++){
      if(content[i] === '#') {
        let temp = "";
        while(i < content.length && content[i] !== ' ') {
          temp += content[i];
          i++;
        }
        toRet.push(temp);
        toRet.push("");
        j+=2;
      }

      else if(content[i] === '@') {
        let temp = "";
        while(i < content.length && content[i] !== ' ') {
          temp += content[i];
          i++;
        }
        toRet.push(temp);
        if(i < content.length && content[i] !== '@' && content[i] !== '#')toRet.push("");
        j+=2;
      }

      else toRet[j] += content[i];
    }

    return (
      toRet.map((val) => {
        if(val.length > 0 && val[0] === '#') return (<Hashtag key={val} hashtag={val} />);
        else if (val.length > 0 && val[0] === '@') return (<Mention key={val} alias={val} />);
        else return val;
      })
    );
  }

  showMentions() {
    return this.props.post.mentions.map((mention) => {
        return (<Mention key={mention+"bottom"} alias={"@" + mention} />);
    });
  }

  showHashtags() {
    return this.props.post.hashtags.map((hashtag) => {
        return (<Hashtag key={hashtag+"bottom"} hashtag={"#" + hashtag} />);
    });
  }

  render() {
    return(
        <Card>
          <div className="post-header">
            <Grid container spacing={1}>
              <Grid item xs={2} >
                <img className="post-thumbnail-image" alt="prof pic" src={this.props.post.prof} />
                </Grid>
              <Grid item xs={10}>
                <div className="post-title">
                  <div className="name-alias-inline"><div className="post-name">{this.props.post.name}</div><div className="post-alias">@{this.props.post.alias}</div></div>
                  <div className="post-time">{this.props.post.timestamp}</div>
                </div>
              </Grid>
            </Grid>
          </div>

          <CardContent>
            {this.convertContent(this.props.post.content)}
          </CardContent>
          <img
            src={this.props.post.media}
            alt="Paella dish"
            className="media"
          />
          <div className="mentions-hashtags-margins">
            {this.props.post.hashtags && this.showHashtags()}
            {this.props.post.mentions && this.showMentions()}
          </div>
        </Card>
    );
  }
}
