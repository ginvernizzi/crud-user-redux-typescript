import { Table } from 'react-bootstrap';
import { Badge } from 'react-bootstrap';
import { StateEnableInput, User } from '../type';
import { useDispatch } from 'react-redux'
import { deleteUser } from '../useReducer';
import Editable from './Editable';
import { useState } from 'react';

const URL_GIT = 'https://unavatar.io/github/'

interface Props {
  users: User[]
}

const UsersList = ({ users }: Props) => {
  const dispatch = useDispatch()
  const [enableEdit, setEnableEdit] = useState<StateEnableInput>({enableInput:false, userId:"9999999999"})


  const onHandleDelete = (id: string) => {
    // console.log(id);
    dispatch(deleteUser({ id: id }))
  }

  const onHandleSetEditableInput = (id: string) => {
    setEnableEdit((prevState) => {
        return {...prevState, 
          enableInput: !prevState.enableInput,
          userId: id
      }
    })
  }

  return (
    <div className='container'>
      <div className="list-container">
        <h4 style={{ textAlign: 'left' }} >Usuarios  <Badge bg="primary">{users.length}</Badge> </h4>
        <Table striped bordered>
          <thead>
            <tr>
              <th>id</th>
              <th>name</th>
              <th>email</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {
              users.map(user => {
                return <tr key={user.id}>
                  <td>{user.id}</td>
                  <td>
                    <div style={{ display: 'flex' }}>
                      <img className='img_github' src={`${URL_GIT}${user.github}`} alt="" /> 
                      <Editable userid={user.id} name="name" value={user.name} enableEdit={enableEdit} setEnableEdit={setEnableEdit}/>
                    </div>
                  </td>
                  <td><Editable userid={user.id} name='email' value={user.email} enableEdit={enableEdit}  setEnableEdit={setEnableEdit} /></td>
                  <td>
                    <div style={{ display: 'flex' }}>
                      <div>
                        <img role="button" onClick={() => onHandleSetEditableInput(user.id)} style={{ width: '40px' }} src="src/assets/editar.png" alt="icono de editar" />
                      </div>
                      <div>
                        <img role="button" onClick={() => onHandleDelete(user.id)} style={{ width: '40px' }} src="src/assets/eliminar.png" alt="icono de eliminar" />
                      </div>
                    </div>
                  </td>
                </tr>
              })
            }
          </tbody>
        </Table>
      </div>
    </div>
  )
}

export default UsersList