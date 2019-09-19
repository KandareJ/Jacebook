import React, { Component } from 'react';
import Presenter from '../Presenter';
import './LoginPage.css';

export default class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      loggedIn: false
    }
    this.presenter = new Presenter(); //The view class has a presenter to get the data from the model
    this.loginRequest = this.loginRequest.bind(this)
    this.login = this.login.bind(this)
  }

  updateEmail(e) {
    var val = e.target.value;
    this.setState({email: val})
  }

  updatePassword(e) {
    var val = e.target.value;
    this.setState({password: val})
  }

  //The login function sends the username and password to the presenter. The
  //presenter gets the data from the model and checks to see if the username and password are correct
  //if they are correct, the presenter calls login in the view and logs the user in
  loginRequest() {
    this.presenter.login(this.state.email, this.state.password, this.login);
  }

  login() {
    this.setState({loggedIn: true});
  }

  render() {
    return(
      <form className="form-inline login-form">
        <div className="form-group">
          <p className="form-text">Email:</p>
          <input className="form-input" type="text" value={this.state.email} onChange={this.updateEmail.bind(this)} />
        </div>
        <div className="form-group">
          <p className="form-text">Password:</p>
          <input className="form-input" type="password" value={this.state.password} onChange={this.updatePassword.bind(this)} />
        </div>
        <button onClick={this.loginRequest} className="form-button">Log In</button>
      </form>
    );
  }
}

/*

*/
