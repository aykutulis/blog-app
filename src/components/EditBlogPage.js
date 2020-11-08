import React from 'react';
import { connect } from 'react-redux';
import { editBlog, removeBlog } from '../actions/blogs';
import BlogForm from './BlogForm';

const EditBlogPage = (props) => {
  return (
    <div>
      <h1>Edit Blog</h1>
      <BlogForm
        blog={props.blog}
        onSubmit={(blog) => {
          props.dispatch(editBlog(props.blog.id, blog));
          props.history.push('/blogs');
        }}
      />
      <button
        onClick={() => {
          props.dispatch(removeBlog(props.blog.id));
          props.history.push('/blogs');
        }}
      >
        Delete
      </button>
    </div>
  );
};

const mapStateToProps = (state, props) => {
  return {
    blog: state.blogs.find((b) => {
      return b.id === props.match.params.id;
    }),
  };
};

export default connect(mapStateToProps)(EditBlogPage);
