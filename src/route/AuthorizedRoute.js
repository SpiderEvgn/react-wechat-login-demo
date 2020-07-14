import React, { useContext, useEffect } from 'react'
import { Route, Redirect, useLocation } from 'react-router-dom'
import { AppContext } from 'context-manager.js'      // 状态引用步骤 1
import axios from 'utils/Axios'

const AuthorizedRoute = ({ children, ...rest }) => {

  const { state, dispatch } = useContext(AppContext)     // 状态引用步骤 2
  const location = useLocation()

  var code = ''
  if(location.search.split('&')[0].substr(1, 4)==='code'){
    code = location.search.split('&')[0].substr(6)
  }

  useEffect(() => {
    // 判断请求 url 是否来自微信回调，即用户通过微信授权登录
    if(code){
      axios(`/api/fetch-wechat-userinfo?code=${code}`)
        .then(res => {
          if(res.data.status === 'ok'){
            dispatch({type: "LOGIN_SUCCESS"})
            console.log(res.data)
          }else{
            // 错误处理
          }
        })
        .catch(error => {
          // 错误处理
        })
    }
  }, [])

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