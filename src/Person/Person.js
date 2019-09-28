import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import './Person.css';

export default class Person extends Component {


  render() {
    return(
      <div className={this.props.className}>
        <Card>
          <img className="person-image" src={this.props.person.photo} alt="prof pic" />
          <div className="person-name-alias-margin">
            <div className="person-name">{this.props.person.name}</div>
            <div className="person-alias">@{this.props.person.alias}</div>
          </div>
        </Card>
      </div>
    );
  }
}
