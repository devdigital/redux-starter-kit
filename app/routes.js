import React from 'react';
import { Route, Redirect, IndexRoute } from 'react-router';
import { UserAuthWrapper } from 'redux-auth-wrapper';

// Route components
import App from './containers/App.jsx';
import SignIn from './containers/SignIn.jsx';
import Dashboard from './containers/Dashboard.jsx';
import Home from './containers/Home.jsx';
import PageTwo from './containers/PageTwo.jsx';

const userIsAuthenticated = UserAuthWrapper({
    authSelector: state => state.user.user,
    wrapperDisplayName: 'UserIsAuthenticated',
    allowRedirectBack: false,
    failureRedirectPath: '/sign-in',
});

const appRoutes = (
  <Route component={App}>
      <Route path="/sign-in" component={SignIn} />
      <Route path="/" component={userIsAuthenticated(Dashboard)}>
         <IndexRoute component={Home} />
         <Route path="page-two" component={PageTwo} />
      </Route>
      <Redirect from="*" to="/" />
  </Route>
);

export default appRoutes;
