import React, { Component } from 'react';
import './LoginPage.css'

export default class CreateAccount extends Component {
  render() {
    return(
      <div>
        <h1>Create an Account</h1>
        <p>It's quick and easy.</p>
        <form>
          <div>
            <input className="create-account-input-names-left" type="text" placeholder="First name"/>
            <input className="create-account-input-names-right" type="text" placeholder="Last name"/>
          </div>
          <div>
            <input className="create-account-input" type="text" placeholder="Alias"/>
          </div>
          <div>
            <input className="create-account-input" type="password" placeholder="Password"/>
          </div>
          <div>
            <input className="create-account-input" type="password" placeholder="Confirm Password"/>
          </div>
          <div>
            <p>Upload an image for a profile picture</p>
            <input type="file" name="pic" accept="image/*" />
          </div>
          <div>
            <button>Sign Up</button>
          </div>
        </form>
      </div>
    );
  }
}
