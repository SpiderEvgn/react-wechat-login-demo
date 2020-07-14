import React from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios'

const Axios = axios.create({
  timeout: 10000
})

const showLoading = () => {
  var dom = document.createElement('div')
  dom.setAttribute('id', 'loading')
  document.body.appendChild(dom)
  ReactDOM.render(<p>正在登录。。。</p>, dom)
}

const hideLoading = () => {
  document.body.removeChild(document.querySelector('#loading'))
}

Axios.interceptors.request.use(config => {
  showLoading()
  return config
})

Axios.interceptors.response.use(res => {
  hideLoading()
  return res
}, err => {
  hideLoading()
  return Promise.reject(err)
})

export default Axios