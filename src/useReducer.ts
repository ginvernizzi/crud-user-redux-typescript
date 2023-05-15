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

const userSlice = createSlice({
  name: 'users',
  initialState: users,
  reducers: {
    createUser(state: Array<User>, action) {
      return [...state, { ...action.payload, id: randomId() }]
    },

    updateUser(state: Array<User>, action) {
      return [...state, action.payload]
    },

    deleteUser(state: Array<User>, action) {
      return state.filter(user => user.id !== action.payload.id)
    }
  }
})

export const { createUser, updateUser, deleteUser } = userSlice.actions

export default userSlice.reducer