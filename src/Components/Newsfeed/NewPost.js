import React, { Component } from 'react';
import { Grid } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import NewPostButtons from './NewPostButtons';
import { makePost } from '../../Actions/NewPost';
import { connect } from 'react-redux';
import './NewsFeed.css';

class NewPost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      content: "",
      image: "null",
      video: "null"
    };

    this.submit = this.submit.bind(this);
    this.onChange = this.onChange.bind(this);
    this.post = this.post.bind(this);
    this.appendText = this.appendText.bind(this);
    this.attachImage = this.attachImage.bind(this);
    this.attachVideo = this.attachVideo.bind(this);
  }

  submit() {
    makePost(this.props.token, this.state.content, this.state.image, this.state.video, this.post);
  }

  appendText(toAppend) {
    this.setState({
      content: (this.state.content + toAppend)
    })
  }

  post() {
    this.props.updateList(this.props.alias);
      this.setState({
        content: "",
        image: "null",
        video: "null"
      })
  }

  onChange(e) {
    this.setState({content: e.target.value});
  }

  attachImage(image) {
    this.setState({
      image,
      video: "null"
    })
  }

  attachVideo(video) {
    this.setState({
      image: "null",
      video
    })
  }

  render() {
    return(
      <div>
        <Card>
          <div className="new-content-header">Create Post</div>
          <div className="card-padding">
            <Grid container spacing={3}>
              <Grid item xs={2} >
                <img className="thumbnail-image" alt="prof pic" src={this.props.photo} />
              </Grid>
              <Grid item xs={10}>
                <textarea className="new-post-content" placeholder="What's on your mind?" value={this.state.content} onChange={this.onChange} />
              </Grid>
            </Grid>
            {this.state.image !== "null" && <img src={this.state.image} alt="attachment" className="media" />}
            {this.state.video !== "null" && <video className="media" controls><source src={this.state.video}/></video>}
            <hr className="divider" />
            <NewPostButtons submit={this.submit} appendText={this.appendText} attachImage={this.attachImage} attachVideo={this.attachVideo} />
          </div>
        </Card>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    alias: state.login ? state.login.alias : "",
    photo: state.login ? state.login.photo : "",
    token: state.login ? state.login.authToken : ""
  };
}

export default connect(mapStateToProps)(NewPost);
