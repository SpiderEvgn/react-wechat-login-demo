const express = require('express')
const app = express()
const axios = require('axios')
const cookieParser = require('cookie-parser')

const sleep = ms => (
  new Promise(res => setTimeout(res, ms))
)

app.use(cookieParser('secret-openid'))
app.get('/api/fetch-wechat-userinfo', async (req, res) => {
  var openid = ''
  await sleep(5000)

  const wechat_config ={
    appid: '[your-appid]',
    secret: '[your-secret]'
  }
  const wechat_openid_link = `https://api.weixin.qq.com/sns/oauth2/access_token?appid=${wechat_config.appid}&secret=${wechat_config.secret}&code=${req.query.code}&grant_type=authorization_code`

  await axios(wechat_openid_link)
    .then(async res => { 
      openid = res.data.openid
    })
    .catch(err => {
      openid = 'error'
    })

  if(openid !== 'error'){
    res.cookie('token', openid, {
      maxAge: 7 * 24 * 60 * 60 * 1000,
      signed: true
    })
    return res.json({
      status: 'ok',
      openid: openid
    })
  }else{
    return res.json({
      status: 'error'
    })
  }
})

app.listen(3005, () => {
  console.log('App is listening on port 3005...')
})