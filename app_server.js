const express = require('express')
const app = express()

app.get('/api/fetch-wechat-userinfo', async (req, res) => {
  return res.json({
    status: 'ok',
  })
})

app.listen(3005, () => {
  console.log('App is listening on port 3005...')
})