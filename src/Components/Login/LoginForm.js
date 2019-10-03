import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loginAction } from '../../Actions';
import { Redirect } from 'react-router-dom';
import './Login.css';

class LoginForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      alias: "",
      password: ""
    }

    this.login = this.login.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  onChange(key) {
    return (e) => {
      this.setState({[key]: e.target.value})
    }
  }

  login(e) {
    e.preventDefault();
    this.props.loginAction(this.state.alias, this.state.password);
  }

  render() {
    return(
      <form className="form-inline login-form">
        {this.props.authToken && <Redirect  to={{pathname: '/'}} /> }
        <div className="form-group">
          <p className="form-text">Alias:</p>
          <input className="form-input" type="text" value={this.state.alias} onChange={this.onChange("alias")} />
        </div>
        <div className="form-group">
          <p className="form-text">Password:</p>
          <input className="form-input" type="password" value={this.state.password} onChange={this.onChange("password")} />
        </div>
        <button onClick={this.login} className="form-button">Log In</button>
      </form>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    authToken: state.login ? state.login.authToken : "",
    message: state.login ? state.login.message : ""
  };
}

export default connect(mapStateToProps, { loginAction })(LoginForm);
