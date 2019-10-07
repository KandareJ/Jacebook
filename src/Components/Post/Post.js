import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import { Grid } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Mention from '../Mention/Mention';
import Hashtag from '../Hashtag/Hashtag';
import { Link } from 'react-router-dom';

import './Post.css';

export default class Post extends Component {
  convertContent(content) {
    let toRet = [""];
    var j = 0;

    if(!content || content.length < 1) return "";

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
      <div className="post">
        <Card>
          <div className="post-header">
            <Grid container spacing={1}>
              <Grid item xs={2} >
                {this.props.post.photo && <img className="post-thumbnail-image" alt="prof pic" src={this.props.post.photo} />}
              </Grid>
              <Grid item xs={10}>
                <Link className="link-style" to={`/profile/${this.props.post.alias}`} >
                <div className="post-title">
                  <div className="name-alias-inline"><div className="post-name">{this.props.post.name}</div><div className="post-alias">@{this.props.post.alias}</div></div>
                  <div className="post-time">{this.props.post.timestamp}</div>
                </div>
                </Link>
              </Grid>
            </Grid>
          </div>

          <CardContent>
            {this.convertContent(this.props.post.content)}
          </CardContent>
          {this.props.post.image && <img src={this.props.post.image} alt="Accompanying media" className="media"/>}
          {this.props.post.video && <div>video</div>}
          <div className="mentions-hashtags-margins">
            {this.props.post.hashtags && this.showHashtags()}
            {this.props.post.mentions && this.showMentions()}
            <Link className="link-style" style={{float:"right"}} to={`/post/${this.props.post.id}`}><FontAwesomeIcon className="side-menu-icon" size="1x" icon={faEye} /></Link>
          </div>
        </Card>
        </div>
    );
  }
}
