import { useContext, useEffect } from 'react'
import './App.css'
import UserForm from './components/UserForm'
import UsersList from './components/UsersList'
import { useSelector } from 'react-redux'
import ErrorContext from './context/ErrorContext'
import ErrorNotification from './components/ErrorNotification'

function App() {
  const [error, setError] = useContext(ErrorContext)
  const users = useSelector(state => state.users) 

    useEffect(() => {
    localStorage.setItem("users-redux", JSON.stringify(users))
    console.log("a volar");
  }, [users])

  return (
    <div className='app'>
      <ErrorNotification error={error}/>
      <UsersList users={users}/>
      <UserForm />
    </div>
  )
}

export default App
