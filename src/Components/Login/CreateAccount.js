import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createAccount } from '../../Actions';
import './Login.css'

class CreateAccount extends Component {
  constructor(props) {
    super(props);
    this.state = {
      alias: "",
      firstName: "",
      lastName: "",
      password: "",
      confirmPassword: "",
      image: "",
    }
    this.onUpload = this.onUpload.bind(this);
    this.submit = this.submit.bind(this);
  }

  onChange(key) {
    return (e) => {
      this.setState({[key]: e.target.value})
    }
  }

  onUpload(e) {
  //   const updateImage = (newImage) => {
  //     this.setState(newImage);
  //   }
  //   var reader = new FileReader();
  //   reader.onload = function() {
  //     var arrayBuffer = this.result,
  //       array = new Uint8Array(arrayBuffer),
  //       binaryString = String.fromCharCode.apply(null, array);
  //     updateImage({ image: btoa(binaryString) });
  // }
  // reader.readAsArrayBuffer(e.target.files[0]);
  console.log("image added");
  }

  submit(e) {
    e.preventDefault();
    this.props.createAccount(this.state.alias, this.state.firstName, this.state.lastName, this.state.password, this.state.confirmPassword);

  }

  render() {
    return(
      <div>
        <p className="create-account-title">Sign Up</p>
        <p className="create-account-subtitle">It's quick and easy.</p>
        <form>
          <div>
            <input className="create-account-input-names-left" type="text" placeholder="First name" value={this.state.firstName} onChange={this.onChange("firstName")} />
            <input className="create-account-input-names-right" type="text" placeholder="Last name" value={this.state.lastName} onChange={this.onChange("lastName")} />
          </div>
          <div>
            <input className="create-account-input" type="text" placeholder="Alias" value={this.state.alias} onChange={this.onChange("alias")} />
          </div>
          <div>
            <input className="create-account-input" type="password" placeholder="Password" value={this.state.password} onChange={this.onChange("password")} />
          </div>
          <div>
            <input className="create-account-input" type="password" placeholder="Confirm Password" value={this.state.confirmPassword} onChange={this.onChange("confirmPassword")} />
          </div>
          <div className="form-inline create-account-input-file-space">
            <p className="create-account-header">Upload an Image:</p>
            <input className="create-account-input-file" type="file" name="pic" accept="image/*" value={this.state.image} onChange={this.onUpload} />
          </div>
          <div>
            <p className="privacy-policy">By clicking sign up you agree to our data policy, which may or may not include selling your information to various companies and governments.</p>
            <button onClick={this.submit} className="sign-up">Sign Up</button>
              {this.props.message && <div className="error-message">{this.props.message}</div>}
          </div>
        </form>
        <hr align="left" className="horizontal-rule" />
        <p className="privacy-policy">BYU CS 340 assignment</p>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    authToken: state.login ? state.login.authToken : "",
    message: state.login ? state.login.message : ""
  };
}

export default connect(mapStateToProps, { createAccount })(CreateAccount);
