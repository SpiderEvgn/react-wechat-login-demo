import React, { useContext, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom'

import AuthorizedRoute from 'route/AuthorizedRoute'
import LoginPage from 'pages/Login'

import { getCookie } from 'utils/utils'
import { AppContext } from 'context-manager.js'

const AppLayout = () => {

  const { dispatch } = useContext(AppContext)

  useEffect(() => {
    var x_openid = getCookie('token')
    // 判断请求 cookie 是否包含用户 openid 信息，则直接登录
    if(x_openid){
      dispatch({type: "LOGIN_SUCCESS"})
    }
  }, [])

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