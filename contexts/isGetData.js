import { createContext, useState } from 'react'

export const IsChangeDataContext = createContext()

export const IsChangeDataProvider = ({ children }) => {
  const [isChange, setIsChange] = useState(false)

  const data = { isChange, setIsChange }
  return (
    <IsChangeDataContext.Provider value={data}>
      {children}
    </IsChangeDataContext.Provider>
  )
}
