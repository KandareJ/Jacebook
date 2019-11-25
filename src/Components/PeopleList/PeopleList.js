import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import { Link } from 'react-router-dom';
import Person from '../Person/Person';
import { connect } from 'react-redux';
import './PeopleList.css';

class PeopleList extends Component {
  // constructor(props) {
  //   super(props);
  //   if(this.props.max && this.props.people) this.props.people = this.props.people.splice(0, this.props.max);
  // }

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
          <div className="people-list-header">{this.props.header + ' '}
            {this.props.max && <Link className="small-link" to={`/${this.props.header.toLowerCase()}/${this.props.alias}`}>View all</Link>}
          </div>
          <div className="people-list-spacing">
            {this.makeList()}
          </div>
        </Card>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
  };
}

export default connect(mapStateToProps)(PeopleList);
