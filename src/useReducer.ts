import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { User, UserId, UserWithId } from "./type";


const randomId = () => {
  // return Math.round(Math.random() * 1000).toString()
  return randomUUID()
}

const getUsersFromStorage = (): UserWithId[] => {
  const usersStorage = localStorage.getItem('users-redux')
  if(usersStorage){
    return JSON.parse(usersStorage).users
  } else {
    return []
  }
}

const userSlice = createSlice({
  name: 'users',
  initialState: getUsersFromStorage(),
  reducers: {
    createUser(state: Array<UserWithId>, action) {
      return [...state, { ...action.payload, id: randomId() }]
    },

    updateUser(state: Array<UserWithId>, action:PayloadAction<{id: string, name: string, value:string}>) {
      const userEdit = state.map((user) => {
        return user.id === action.payload.id ? {...user, [action.payload.name]: action.payload.value  } : user
      })
      return userEdit
    },

    deleteUser(state: Array<UserWithId>, action: PayloadAction<UserId>) {
      return state.filter(user => user.id !== action.payload)
    }
  }
})

export const { createUser, updateUser, deleteUser } = userSlice.actions

export default userSlice.reducer