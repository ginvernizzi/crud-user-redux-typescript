import { configureStore } from '@reduxjs/toolkit'

import { toast } from 'sonner'

const persistentLocalStorageMid = (store) => (next) => (action) => {
  // console.log("state", store.getState())
  // console.log("action", action)
  next(action)
  console.log("local.Save item")
  localStorage.setItem("users-redux", JSON.stringify(store.getState()))
}

const syncWithDataBase = (store) => (next) => (action) => {
  const previusState = store.getState()
  const userToDeleteId = action.payload

  next(action)

  if (action.type === "users/deleteUser") {
    const userToRemove = previusState.users.find(u => u.id === action.payload)

    fetch(`https://jsonplaceholder.typicode.com/users/${userToDeleteId}`, {
      method: 'delete'
    })
      .then(resp => {
        if (resp.ok) {
          toast.success("Se ha eliminado existosamente")
          return
        } else {
          throw new Error('Error al eliminar usaurio')
        }
      })
      .catch(error => {
        toast.error(`Ha ocurrido el siguiente error: ${error}`)
        store.dispatch(userRollback(userToRemove))
      })
  }
}

import userReducer, { userRollback } from './useReducer'

const store = configureStore({
  reducer: {
    users: userReducer
  },
  middleware: [persistentLocalStorageMid, syncWithDataBase]
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store