import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import Person from '../Person/Person';
import './PeopleList.css';

export default class PeopleList extends Component {
  makeList() {
    if(!this.props.people) {
      return(<div>Loading...</div>)
    }
    else if (this.props.people.length < 1) {
      return(<div>No users to show</div>)
    }
    else {
      return this.props.people.map((person) => {
        return (<Person className={this.props.className} key={person.alias} person={person}/>);
      });
    }
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
