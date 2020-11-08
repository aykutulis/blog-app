import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import reportWebVitals from './reportWebVitals';
import AppRouter from './routers/AppRouter';
import './App.css';
import configureStore from './store/configureStore';
import { addBlog, removeBlog, editBlog } from './actions/blogs';

const store = configureStore();

store.subscribe(() => {
  console.log(store.getState());
});

const blog1 = store.dispatch(addBlog({ title: 'Blog title 1', description: 'Blog description 1', dateAdded: Date.now() }));
const blog2 = store.dispatch(addBlog({ title: 'Blog title 2', description: 'Blog description 2', dateAdded: 0 }));
store.dispatch(addBlog({ title: 'Blog title 3', description: 'Blog description 3', dateAdded: 0 }));

store.dispatch(removeBlog(blog1.blog.id));
store.dispatch(editBlog(blog2.blog.id, { title: 'Updated blog title', description: 'Updated blog description' }));

ReactDOM.render(
  <Provider store={store}>
    <AppRouter />
  </Provider>,
  document.getElementById('root')
);

reportWebVitals();
