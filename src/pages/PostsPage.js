import React from 'react';
import { connect } from 'react-redux';

const PostsPage = () => {
  return (
    <section>
      <h1>Posts</h1>
    </section>
  );
};

// Map Redux state to React component props
const mapStateToProps = state => ({
  loading: state.posts.loading,
  posts: state.posts.posts,
  hasErrors: state.posts.hasErrors
});
// Connect Redux to React
export default connect(mapStateToProps)(PostsPage);
