import { create } from '@syncfusion/ej2-react-grids'
import React, { createContext, useContext, useState } from 'react'

const StateContext = createContext()

const initialState = {
  // deafult setting
  chat: false, 
  cart: false, 
  userProfile: false,
  notification: false,
}

export const ContextProvider = ({children }) => {
  const [activeMenu, setActiveMenu] = useState(true)

  return (
    <StateContext.Provider
      value={{ activeMenu, setActiveMenu }}
    >
      {children}
    </StateContext.Provider>
  )
}

export const useStateContext = () => useContext(StateContext)