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
      content: ""
    };

    this.submit = this.submit.bind(this);
    this.onChange = this.onChange.bind(this);
    this.post = this.post.bind(this);
    this.appendText = this.appendText.bind(this);
  }

  submit() {
    makePost(this.props.alias, this.state.content, this.post);
  }

  appendText(toAppend) {
    this.setState({
      content: (this.state.content + toAppend)
    })
  }

  post() {
    this.props.updateList(this.props.alias);
      this.setState({
        content: ""
      })
  }

  onChange(e) {
    this.setState({content: e.target.value});
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
            <hr className="divider" />
            <NewPostButtons submit={this.submit} appendText={this.appendText} />
          </div>
        </Card>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    alias: state.login ? state.login.alias : "",
    photo: state.login ? state.login.photo : ""
  };
}

export default connect(mapStateToProps)(NewPost);
