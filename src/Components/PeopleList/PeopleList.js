import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import Person from '../Person/Person';
import './PeopleList.css';

export default class PeopleList extends Component {
  makeList() {
    return this.props.people.map((person) => {
      return (<Person className={this.props.className} person={person}/>);
    })
  }

  render() {
    return(
      <div>
        <Card>
          <div className="people-list-header">{this.props.header}</div>
          <div className="people-list-spacing">
            {this.makeList()}
          </div>
        </Card>
      </div>
    );
  }
}
