import React, { Component } from 'react';
import { connect } from 'react-redux';
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
    return (this.props.posts).map((post) => {
      return(<Post post={post} key={post.timestamp} />);
    });
  }

  render() {
    return(
      <div>
        {this.props.posts && this.renderPosts()}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {};
}

export default connect(mapStateToProps, { })(PostList);
