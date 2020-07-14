import React from 'react';
import { Route, Switch } from 'react-router-dom'

import AuthorizedRoute from 'route/AuthorizedRoute'
import LoginPage from 'pages/Login'

const AppLayout = () => {

  return (
    <Switch>
      <Route path="/login">
        <LoginPage />
      </Route>
      
      <AuthorizedRoute path="/">
        <Route exact path="/">
          <h1>This is Home Page.</h1> 
        </Route>
        <Route path="/about">
          <h1>This is About Page.</h1> 
        </Route>
      </AuthorizedRoute>
    </Switch>
  )
}

export default AppLayout