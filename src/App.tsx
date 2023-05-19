import { useContext, useEffect } from 'react'
import './App.css'
import UserForm from './components/UserForm'
import UsersList from './components/UsersList'
import ErrorContext from './context/ErrorContext'
import ErrorNotification from './components/ErrorNotification'
import {Toaster } from 'sonner'

function App() {
  const [error, setError] = useContext(ErrorContext)
  
  return (
    <div className='app'>
      <ErrorNotification error={error}/>
      <UsersList />
      <UserForm />
      <Toaster richColors />
    </div>
  )
}

export default App
