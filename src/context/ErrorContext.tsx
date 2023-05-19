import React, { ReactNode, createContext, useState } from 'react'

const ErrorContext = createContext([])

interface Prop {
  children: any
}

interface StateError {
  message: "",
}

export const ErrorProvider = ({children}:Prop) => {
  const [error, setError] = useState<StateError | null>(null)

  return (
    <ErrorContext.Provider value={[error, setError]}>
      {children}
    </ErrorContext.Provider>
  )
}

export default ErrorContext


