import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getPostListAction } from '../../Actions';
import Post from '../Post/Post';

class PostList extends Component {
  constructor(props) {
    super(props);

    this.renderPosts = this.renderPosts.bind(this);
  }

  componentDidMount() {
    if (this.props.posts.length > 0) this.props.getPostListAction(this.props.posts);
  }

  componentDidUpdate(prevProps) {
    if (this.props.posts.length !== prevProps.posts.length) {
      if (this.props.posts.length > 0) this.props.getPostListAction(this.props.posts);
    }
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
