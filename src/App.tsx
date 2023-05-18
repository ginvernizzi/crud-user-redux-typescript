import { useContext, useEffect } from 'react'
import './App.css'
import UserForm from './components/UserForm'
import UsersList from './components/UsersList'
import ErrorContext from './context/ErrorContext'
import ErrorNotification from './components/ErrorNotification'

function App() {
  const [error, setError] = useContext(ErrorContext)
  
  return (
    <div className='app'>
      <ErrorNotification error={error}/>
      <UsersList />
      <UserForm />
    </div>
  )
}

export default App
