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
    /*if (this.props.posts.length > 0)*/ //this.props.getPostListAction(this.props.alias);
  }

  componentDidUpdate(prevProps) {
    if (this.props.alias !== prevProps.alias) {
      /*if (this.props.posts.length > 0)*/ //this.props.getPostListAction(this.props.alias);
    }
  }

  renderPosts() {
    let reversed = this.props.displayPosts
    return (reversed).map((post) => {
      return(<Post post={post} key={post.timestamp} />);
    });
  }

  render() {
    console.log(this.props.displayPosts);
    return(
      <div>
        {this.props.displayPosts && this.renderPosts()}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    displayPosts: (state.posts) ? state.posts : []
  };
}

export default connect(mapStateToProps, { getPostListAction })(PostList);
