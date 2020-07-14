import React, { useContext } from 'react'
import { Redirect, useLocation } from 'react-router-dom'
import { AppContext } from 'context-manager.js'

const LoginPage = () => {

  const { state, dispatch } = useContext(AppContext)
  const location = useLocation()
  const { from } = location.state || { from: { pathname: '/' }}

  const wechat_config = {
    appid: '[yours-appid]',
    domain: '192.168.0.100%3A3000',
    scope: 'snsapi_base',
    state: 'test'
  }
  const wechat_oauth2_link = `https://open.weixin.qq.com/connect/oauth2/authorize?appid=${wechat_config.appid}&redirect_uri=http%3A%2F%2F${wechat_config.domain}%2F&response_type=code&scope=${wechat_config.scope}&state=${wechat_config.state}&connect_redirect=1#wechat_redirect`

  if(state.isLogin) {
    return (
      <Redirect to={from.pathname} />    // 如果直接访问登录页，则跳转到 '/'
    )
  } else {
    return (
      <button className="button--wechat" onClick={() => window.location.href = wechat_oauth2_link}>
        微信一键登录
      </button>
    )
  }
}

export default LoginPage