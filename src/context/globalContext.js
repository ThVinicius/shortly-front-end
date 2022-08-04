import { useState, useContext, createContext } from 'react'

const GlobalContext = createContext()

export function GlobalProvider({ children }) {
  const [global, setGlobal] = useState({ token: null })

  return (
    <GlobalContext.Provider value={{ global, setGlobal }}>
      {children}
    </GlobalContext.Provider>
  )
}

export const useGlobal = () => useContext(GlobalContext)
