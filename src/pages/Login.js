import React, { useContext } from 'react'
import { Redirect, useLocation } from 'react-router-dom'
import { AppContext } from 'context-manager.js'

const LoginPage = () => {

  const { state, dispatch } = useContext(AppContext)
  const location = useLocation()
  const { from } = location.state || { from: { pathname: '/' }}

  if(state.isLogin) {
    return (
      <Redirect to={from.pathname} />    // 如果直接访问登录页，则跳转到 '/'
    )
  } else {
    return (
      <button className="button--wechat" onClick={() => dispatch({type: "LOGIN_SUCCESS"})}>
        微信一键登录
      </button>
    )
  }
}

export default LoginPage