import React from 'react';
import { Route, Router, Switch } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import LoginPage from '../components/LoginPage';
import BlogListPage from '../components/BlogListPage';
import BlogDetailsPage from '../components/BlogDetailsPage';
import NotFoundPage from '../components/NotFoundPage';
import AddBlogPage from '../components/AddBlogPage';
import EditBlogPage from '../components/EditBlogPage';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

export const history = createHistory();

function AppRouter() {
  return (
    <Router history={history}>
      <div>
        <Switch>
          <PublicRoute exact path='/' component={LoginPage} />
          <PrivateRoute exact path='/blogs' component={BlogListPage} />
          <PrivateRoute path='/create' component={AddBlogPage} />
          <PrivateRoute path='/edit/:id' component={EditBlogPage} />
          <PrivateRoute path='/blogs/:id' component={BlogDetailsPage} />
          <Route component={NotFoundPage} />
        </Switch>
      </div>
    </Router>
  );
}

export default AppRouter;
