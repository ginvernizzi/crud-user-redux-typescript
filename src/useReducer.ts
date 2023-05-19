import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { UserId, UserWithId } from "./type";
import { v4 as uuidv4 } from 'uuid';


const INITIAL_STATE = [
  {
    id: '70094c25-27fd-446e-80bf-7b791613ec3a',
    name: "ginvernizzi",
    email: "ginvernizzi@dasd.com",
    github: "ginvernizzi"
  },
  {
    id: '70094c25-27fd-446e-80bf-7b791613c889',
    name: "hbesserra",
    email: "hbesserra@dasd.com",
    github: "hbesserra"

  },
  {
    id: '70094c25-27fd-446e-80bf-7b7916139c87',
    name: "juan",
    email: "juan@dasd.com",
    github: "juan"
  },
  {

    id: '70094c25-27fd-446e-80bf-7b791613uc87',
    name: "carlos",
    email: "carlos@dasd.com",
    github: "vaca"
  }
]

const randomId = () => {
  // return Math.round(Math.random() * 1000).toString()
  return uuidv4()
}

const getUsersFromStorage = (): UserWithId[] => {
  const usersStorage = localStorage.getItem('users-redux')
  if (usersStorage !== null && JSON.parse(usersStorage).users.length > 0) {
    return JSON.parse(usersStorage).users
  } else {
    return INITIAL_STATE
  }
}

const userSlice = createSlice({
  name: 'users',
  initialState: getUsersFromStorage(),
  reducers: {
    createUser(state: Array<UserWithId>, action) {
      return [...state, { ...action.payload, id: randomId() }]
    },

    updateUser(state: Array<UserWithId>, action: PayloadAction<{ id: string, name: string, value: string }>) {
      const userEdit = state.map((user) => {
        return user.id === action.payload.id ? { ...user, [action.payload.name]: action.payload.value } : user
      })
      return userEdit
    },

    deleteUser(state: Array<UserWithId>, action: PayloadAction<UserId>) {
      return state.filter(user => user.id !== action.payload)
    },
    userRollback(state: Array<UserWithId>, action) {
      console.log('roll');
      if(!state.some(user => user.id === action.payload.id)){
        return [...state, { ...action.payload }]
      }
    },
  }
})

export const { createUser, updateUser, deleteUser, userRollback } = userSlice.actions

export default userSlice.reducer