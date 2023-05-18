import React, {useContext, useState } from 'react'
import { Form, Button } from 'react-bootstrap'
import { createUser } from '../useReducer'
import ErrorContext from '../context/ErrorContext'
import { useAppDispatch } from '../hoooks/useStoreAction'

const UserForm = () => {
  const [inputFields, setInputFields] = useState({ name: "", email: "", github: "" })
  const dispatch = useAppDispatch()
  const [error, setError] = useContext(ErrorContext)

  const onHandleChange = (e: React.ChangeEvent<FormControlElement>) => {
    setInputFields({ ...inputFields, [e.target.name]: e.target.value })
  }

  const onCreateUser = (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const inputs = Object.values(inputFields).map(x => !x.trim() ? "v" : "o")

    if(inputs.includes("v")){
      setError("Hay campos vacios")
      setInterval(() => {
        setError(null)
      }, 4000)
      return
    }

    e.preventDefault()
    dispatch(createUser(inputFields))
    setInputFields({name: "", email: "", github: ""})
  }
  
  return (
    <div className='container'>
      <div className='form-container'>
        <h4 style={{ textAlign: 'left' }}>Formulario</h4>
        <Form onSubmit={(e) => onCreateUser(e)}>
          <Form.Group>
            <Form.Control name='name' placeholder='name' value={inputFields.name} onChange={(e) => onHandleChange(e)} />
          </Form.Group>
          <Form.Group>
            <Form.Control name='email' placeholder='email' value={inputFields.email} onChange={(e) => onHandleChange(e)} />
          </Form.Group>
          <Form.Group>
            <Form.Control name='github' placeholder='usaurio de github' value={inputFields.github} onChange={(e) => onHandleChange(e)} />
          </Form.Group>
          <Form.Group>
            <Button type='submit' className='form-button' >Crear usuario</Button>
          </Form.Group>
        </Form>
      </div>
    </div>
  )
}

export default UserForm