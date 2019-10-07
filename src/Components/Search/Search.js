import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faHashtag } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { getSearch } from '../../Actions';
import { connect } from 'react-redux';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import { Grid } from '@material-ui/core';

class Search extends Component {
  constructor(props) {
    super(props);
    this.filterSearch = this.filterSearch.bind(this);
  }

  componentDidMount() {
    this.props.getSearch();
  }

  filterSearch() {
    let aliases = [];
    let hashtags = [];

    if(this.props.search && this.props.match) {
      this.props.search.aliases.map((x) => {
        if(x.toLowerCase().includes(this.props.match.params.search.toLowerCase())) aliases.push(x);
        return "";
      });
      this.props.search.hashtags.map((x) => {
        if(x.toLowerCase().includes(this.props.match.params.search.toLowerCase())) hashtags.push(x);
        return "";
      });
    }
    return { aliases, hashtags};
  }

  renderPeople(array) {
    return array.map((x, i)=>{
      return(
        <Link key={x + i} className="link-style" to={`/profile/${x}`}>
          <ListItem button>
            <FontAwesomeIcon className="side-menu-icon" size="1x" icon={faUser} />
            <div className="side-menu-text">{x}</div>
          </ListItem>
        </Link>
      );
    })
  }

  renderTags(array) {
    return array.map((x, i)=>{
      return(
        <Link key={x + i} className="link-style" to={`/hashtag/${x}`}>
          <ListItem button>
            <FontAwesomeIcon className="side-menu-icon" size="1x" icon={faHashtag} />
            <div className="side-menu-text">{x}</div>
          </ListItem>
        </Link>
      );
    })
  }

  render() {
    let results = this.filterSearch();
    return(
      <div className="feed-body">
        <Grid container spacing={2}>
          <Grid item xs={3} />
          <Grid item xs={6}>
            <List>
              {this.renderPeople(results.aliases)}
              {this.renderTags(results.hashtags)}
            </List>
          </Grid>
          <Grid item xs={3} />
        </Grid>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    search: state.search
  };
}

export default connect(mapStateToProps, { getSearch })(Search);
