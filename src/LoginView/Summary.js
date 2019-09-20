import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faNewspaper, faNetworkWired, faComments } from '@fortawesome/free-solid-svg-icons';
import './LoginView.css'

export default class Header extends Component {

  render() {
    return(
      <div>
        <p className="summary-title">Connect with friends and the world around you on Jacebook.</p>

        <div className="form-inline summary-item">
          <FontAwesomeIcon className="summary-icon" size="lg" icon={faNewspaper} />
          <p className="summary-text"><b>See photos and updates</b> from friends.</p>
        </div>

        <div className="form-inline summary-item">
          <FontAwesomeIcon className="summary-icon" size="lg" icon={faComments} />
          <p className="summary-text"><b>Share what's new</b> in your life.</p>
        </div>

        <div className="form-inline summary-item">
          <FontAwesomeIcon className="summary-icon" size="lg" icon={faNetworkWired} />
          <p className="summary-text"><b>Jacebook</b> has what you're lacking.</p>
        </div>

      </div>
    );
  }
}
