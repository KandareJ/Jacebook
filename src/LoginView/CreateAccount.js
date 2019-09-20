import React, { Component } from 'react';
import './LoginView.css'

export default class CreateAccount extends Component {
  render() {
    return(
      <div>
        <p className="create-account-title">Sign Up</p>
        <p className="create-account-subtitle">It's quick and easy.</p>
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
          <div className="form-inline create-account-input-file-space">
            <p className="create-account-header">Upload an Image:</p>
            <input className="create-account-input-file" type="file" name="pic" accept="image/*" />
          </div>
          <div>
            <p className="privacy-policy">By clicking sign up you agree to our data policy, which may or may not include selling your information to various companies and governments.</p>
            <button className="sign-up">Sign Up</button>
          </div>
        </form>
        <hr align="left" className="horizontal-rule" />
        <p className="privacy-policy">BYU CS 340 assignment</p>
      </div>
    );
  }
}
