import './App.css'
import UserForm from './components/UserForm'
import UsersList from './components/UsersList'
import { useSelector, useDispatch } from 'react-redux'

function App() {

  const users = useSelector(state => state.users) 

  return (
    <div className='app'>
      <UsersList users={users}/>
      <UserForm />
    </div>
  )
}

export default App
