import { configureStore } from '@reduxjs/toolkit'

const persistentLocalStorageMid = (store) => (next) => (action) => {
  // console.log("state", store.getState())
  // console.log("action", action)
  next(action)
  // console.log("state", store.getState())


  localStorage.setItem("users-redux", JSON.stringify(store.getState()))
  console.log("a volar");
}

import userReducer from './useReducer'

const store = configureStore({
  reducer: {
    users: userReducer
  },
  middleware: [persistentLocalStorageMid]
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store