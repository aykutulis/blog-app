import database from '../firebase/firebaseConfig';

// Add Blog
const addBlog = (blog) => ({
  type: 'ADD_BLOG',
  blog,
});

export const addBlogToDatabase = (blogData = {}) => {
  return (dispatch) => {
    const { title = '', description = '', dateAdded = 0 } = blogData;
    const blog = { title, description, dateAdded };

    database
      .ref('blogs')
      .push(blog)
      .then((res) => {
        dispatch(
          addBlog({
            id: res.key,
            ...blog,
          })
        );
      });
  };
};

// Remove Blog
const removeBlog = (id) => ({
  type: 'REMOVE_BLOG',
  id,
});

export const removeBlogFromDatabase = (id) => {
  return (dispatch) => {
    return database
      .ref(`blogs/${id}`)
      .remove()
      .then(() => {
        dispatch(removeBlog(id));
      });
  };
};

// Edit Blog
const editBlog = (id, updates) => ({
  type: 'EDIT_BLOG',
  id,
  updates,
});

export const editBlogFromDatabase = (id, updates) => {
  return (dispatch) => {
    return database
      .ref(`blogs/${id}`)
      .update(updates)
      .then(() => {
        dispatch(editBlog(id, updates));
      });
  };
};

// Get Blogs
const getBlogs = (blogs) => ({
  type: 'GET_BLOGS',
  blogs,
});

export const getBlogsFromDatabase = () => {
  return (dispatch) => {
    return database
      .ref('blogs')
      .once('value')
      .then((snapshot) => {
        const blogs = [];

        snapshot.forEach((blog) => {
          blogs.push({
            id: blog.key,
            ...blog.val(),
          });
        });
        dispatch(getBlogs(blogs));
      });
  };
};
