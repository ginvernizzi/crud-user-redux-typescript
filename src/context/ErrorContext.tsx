import { createContext, useState } from 'react'

const ErrorContext = createContext({})

interface Prop {
  children: any
}

export const ErrorProvider = ({children}:Prop) => {
  const [error, setError] = useState(null)

  return (
    <ErrorContext.Provider value={[error, setError]}>
      {children}
    </ErrorContext.Provider>
  )
}

export default ErrorContext


