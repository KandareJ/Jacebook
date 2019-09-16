import React, { Component } from 'react';
import { FormGroup, FormControl, InputLabel, Input, Button } from '@material-ui/core';
import Presenter from './Presenter';

export default class View extends Component {

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

  displayLogin() {
    return (
      <div>
        <FormGroup>
          <FormControl>
            <InputLabel htmlFor="email">Email address</InputLabel>
            <Input id="email" value={this.state.email} onChange={this.updateEmail.bind(this)} />
          </FormControl>
          <FormControl>
            <InputLabel htmlFor="password" value={this.state.password}>Password</InputLabel>
            <Input id="password" value={this.state.password} onChange={this.updatePassword.bind(this)} />
          </FormControl>
        </FormGroup>
        <Button onClick={this.loginRequest}>Login</Button>
      </div>
    );
  }

//The homepage just says they logged in
  displayHome() {
    return (
      <div>
        Congrats you successfully logged in!
      </div>
    );
  }

//The view simply displays a login page if the user is not logged in, or a home page if they are logged in
  render() {
    return (
      <div>
        {!this.state.loggedIn && this.displayLogin()}
        {this.state.loggedIn && this.displayHome()}
      </div>
    );
  }
}
