import React, { Component } from 'react';
import './LoginView.css';

export default class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      alias: "",
      password: "",
      loggedIn: false
    }
    this.loginRequest = this.loginRequest.bind(this)
    this.login = this.login.bind(this)
  }

  updatealias(e) {
    var val = e.target.value;
    this.setState({alias: val})
  }

  updatePassword(e) {
    var val = e.target.value;
    this.setState({password: val})
  }

  //The login function sends the username and password to the presenter. The
  //presenter gets the data from the model and checks to see if the username and password are correct
  //if they are correct, the presenter calls login in the view and logs the user in
  loginRequest() {
  }

  login() {
    this.setState({loggedIn: true});
  }

  render() {
    return(
      <form className="form-inline login-form">
        <div className="form-group">
          <p className="form-text">Alias:</p>
          <input className="form-input" type="text" value={this.state.alias} onChange={this.updatealias.bind(this)} />
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
