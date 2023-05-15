import { Table } from 'react-bootstrap';
import { Badge } from 'react-bootstrap';
import { User } from '../type';

const URL_GIT = 'https://unavatar.io/github/'

interface Props {
  users: User[]
}

const UsersList = ({users: users}) => {
  return (
    <div className='container'>
      <div className="list-container">
        <h4 style={{ textAlign: 'left' }} >Usuarios  <Badge bg="primary">{users.length}</Badge> </h4>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>id</th>
              <th> name</th>
              <th>email</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {
              users.map(user => {
                return <tr key={user.id}>
                  <td>{user.id}</td>
                  <td><img className='img_github' src={`${URL_GIT}${user.git}`} alt="" />{user.name}</td>
                  <td>{user.email}</td>
                  <td>Editar-Eliminar</td>
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