import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhotoVideo, faUser, faHashtag } from '@fortawesome/free-solid-svg-icons';
import './NewsFeed.css';

export default class NewPostButtons extends Component {
  constructor(props) {
    super(props);
    this.addHashtag = this.addHashtag.bind(this);
    this.addMention = this.addMention.bind(this);
  }

  addHashtag() {
    this.props.appendText(" #");
  }

  addMention() {
    this.props.appendText(" @");
  }

  render() {
    return(
      <div className="button-inline">
        <div className="new-post-option">
          <input className="add-media-hidden" id="postImage" type="file" name="media" accept="image/*, video/*" />
          <label htmlFor="postImage" className="button-inline">
            <FontAwesomeIcon size="1x" icon={faPhotoVideo} /><div className="new-post-option-text">Add Image/Video</div>
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
