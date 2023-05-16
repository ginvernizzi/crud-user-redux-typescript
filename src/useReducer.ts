import { createSlice } from "@reduxjs/toolkit";
import { User } from "./type";


const randomId = () => {
  return Math.round(Math.random() * 1000).toString()
}

const users = [
  {
    id: "1",
    name: "Yazman Rodriguez",
    email: "yazmanito@gmail.com",
    github: "yazmanito",
  },
  {
    id: "2",
    name: "John Doe",
    email: "leo@gmail.com",
    github: "leo",
  },
  {
    id: "3",
    name: "Haakon Dahlberg",
    email: "haakon@gmail.com",
    github: "midudev",
  }
];

const getUsersFromStorage = (): User[] => {
  const usersStorage = localStorage.getItem('users-redux')
  if(usersStorage){
    return JSON.parse(usersStorage)
  } else {
    return []
  }
}

const userSlice = createSlice({
  name: 'users',
  initialState: getUsersFromStorage(),
  reducers: {
    createUser(state: Array<User>, action) {
      return [...state, { ...action.payload, id: randomId() }]
    },

    updateUser(state: Array<User>, action) {
      console.log("action", action);
      const userEdit = state.map((user) => {
        return user.id === action.payload.id ? {...user, [action.payload.name]: action.payload.value  } : user
      })
      return userEdit
    },

    deleteUser(state: Array<User>, action) {
      return state.filter(user => user.id !== action.payload.id)
    }
  }
})

export const { createUser, updateUser, deleteUser } = userSlice.actions

export default userSlice.reducer