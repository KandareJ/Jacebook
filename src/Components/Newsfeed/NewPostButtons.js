import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faImage, faVideo, faUser, faHashtag } from '@fortawesome/free-solid-svg-icons';
import './NewsFeed.css';

export default class NewPostButtons extends Component {
  constructor(props) {
    super(props);
    this.addHashtag = this.addHashtag.bind(this);
    this.addMention = this.addMention.bind(this);
    this.onUploadImage = this.onUploadImage.bind(this);
    this.onUploadVideo = this.onUploadVideo.bind(this);
  }

  addHashtag() {
    this.props.appendText(" #");
  }

  addMention() {
    this.props.appendText(" @");
  }

  onUploadImage(e) {
    var reader = new FileReader();
    reader.readAsDataURL(e.target.files[0]);
    reader.onload = () => {
      this.props.attachImage(reader.result);
    };
  }

  onUploadVideo(e) {
    var reader = new FileReader();
    reader.readAsDataURL(e.target.files[0]);
    reader.onload = () => {
      this.props.attachVideo(reader.result);
    };
  }

  render() {
    return(
      <div className="button-inline">
        <div className="new-post-option">
          <input className="add-media-hidden" id="postImage" type="file" name="media" accept="image/*" onChange={this.onUploadImage}/>
          <label htmlFor="postImage" className="button-inline">
            <FontAwesomeIcon size="1x" icon={faImage} /><div className="new-post-option-text">Add Image</div>
          </label>
        </div>

        <div className="new-post-option">
          <input className="add-media-hidden" id="postVideo" type="file" name="media" accept="video/*" onChange={this.onUploadVideo}/>
          <label htmlFor="postVideo" className="button-inline">
            <FontAwesomeIcon size="1x" icon={faVideo} /><div className="new-post-option-text">Add Video</div>
          </label>
        </div>

        <div className="new-post-option button-inline" onClick={this.addMention}>
            <FontAwesomeIcon size="1x" icon={faUser} /><div className="new-post-option-text">Tag a friend</div>
        </div>

        <div className="new-post-option button-inline" onClick={this.addHashtag}>
            <FontAwesomeIcon size="1x" icon={faHashtag} /><div className="new-post-option-text">Hashtag</div>
        </div>

        <button onClick={this.props.submit} className="post-button">Post</button>
      </div>
    );
  }
}
