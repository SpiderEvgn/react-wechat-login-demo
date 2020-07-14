import React from 'react'

export const AppContext = React.createContext()

export const initState = {
  isLogin: false,
}

export const reducer = (state, action) => {
  switch(action.type) {
    case "LOGIN_SUCCESS":

      return {
        isLogin: true,
      }

    default:
      return state
  }
}