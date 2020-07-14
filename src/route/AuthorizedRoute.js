import React, { useContext } from 'react';
import { Route, Redirect, useLocation } from 'react-router-dom'
import { AppContext } from 'context-manager.js'      // 状态引用步骤 1

const AuthorizedRoute = ({ children, ...rest }) => {

  const { state } = useContext(AppContext)     // 状态引用步骤 2
  const location = useLocation()

  return (
    <Route
      {...rest}
      render={({ location }) =>
        state.isLogin ? (              // 通过 isLogin 状态判断，显示访问页面 or 显示登录页面
          children
        ) : (
          <Redirect
            to={
              {
                pathname: '/login',
                state: { from: location }  // 将访问页面 location 传给 login，这样登录后就能跳转
              }
            }
          />
        )
      }
    />
  )
}

export default AuthorizedRoute