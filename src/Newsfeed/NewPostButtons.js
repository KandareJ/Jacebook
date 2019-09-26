import React, { Component } from 'react';
import { Grid } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhotoVideo, faUser, faHashtag } from '@fortawesome/free-solid-svg-icons';
import './NewsFeed.css';

export default class NewPostButtons extends Component {
  render() {
    return(
      <div className="button-inline">
        <div className="new-post-option">
          <input className="add-media-hidden" id="postImage" type="file" name="media" accept="image/*, video/*" />
          <label for="postImage" className="button-inline">
            <FontAwesomeIcon className="icon-color" size="x" icon={faPhotoVideo} /><div className="new-post-option-text">Add Image/Video</div>
          </label>
        </div>

        <div className="new-post-option button-inline">
            <FontAwesomeIcon className="icon-color" size="x" icon={faUser} /><div className="new-post-option-text">Tag a friend</div>
        </div>

        <div className="new-post-option button-inline">
            <FontAwesomeIcon className="icon-color" size="x" icon={faHashtag} /><div className="new-post-option-text">Hashtag</div>
        </div>

        <button className="post-button">Post</button>
      </div>
    );
  }
}
