import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { createUser } from '../useReducer'

const UserForm = () => {
  const [inputFields, setInputFields] = useState({ name: "", email: "", git: "" })
  const dispatch = useDispatch()

  const onHandleChange = (e: React.ChangeEvent<FormControlElement>) => {
    setInputFields({ ...inputFields, [e.target.name]: e.target.value })
  }

  const onCreateUser = (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    dispatch(createUser(inputFields))
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
            <Form.Control name='git' placeholder='usaurio de github' value={inputFields.git} onChange={(e) => onHandleChange(e)} />
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