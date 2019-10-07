import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getPostListAction } from '../../Actions/FeedAction';
import Post from '../Post/Post';

class PostList extends Component {
  constructor(props) {
    super(props);

    this.renderPosts = this.renderPosts.bind(this);
  }

  componentDidMount() {
    /*if (this.props.posts.length > 0)*/ this.props.getPostListAction(this.props.posts);
  }

  componentDidUpdate(prevProps) {
    if (this.props.posts.length !== prevProps.posts.length || this.props.alias !== prevProps.alias) {
      /*if (this.props.posts.length > 0)*/ this.props.getPostListAction(this.props.posts);
    }
    else if (this.props.difCheck && !this.compareArrays(this.props.posts, prevProps.posts)) {
      this.props.getPostListAction(this.props.posts);
    }

  }

  compareArrays(arr1, arr2) {
    if (arr1.length !== arr2.length) return false;

    for(var i = 0; i < arr1.length; i++) {
      if(arr1[i] !== arr2[i]) return false;
    }

    return true;
  }

  renderPosts() {
    let reversed = this.props.displayPosts.slice().reverse();
    return (reversed).map((post) => {
      return(<Post post={post} key={post.timestamp} />);
    });
  }

  render() {
    return(
      <div>
        {this.props.displayPosts && this.renderPosts()}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    displayPosts: state.posts
  };
}

export default connect(mapStateToProps, { getPostListAction })(PostList);
