import React, { Component } from "react";
import { connect } from "react-redux";

import { fetchPost } from "../actions";

class PostList extends Component {
  componentDidMount() {
    this.props.fetchPost();
  }

  renderList() {
    return this.props.posts.map((post) => {
      return (
        <div class="item" key={post.id}>
          <i class="large middle aligned icon user" />
          <div class="content">
            <div class="description">
              <h2>{post.title}</h2>
              <p>{post.body}</p>
            </div>
          </div>
        </div>
      );
    });
  }

  render() {
    return <div class="ui relaxed divided list">{this.renderList()}</div>;
  }
}

const mapStateToProps = (state) => {
  return { posts: state.posts };
};

export default connect(
  mapStateToProps,
  { fetchPost }
)(PostList);
