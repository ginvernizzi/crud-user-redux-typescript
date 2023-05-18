import { configureStore } from '@reduxjs/toolkit'



import userReducer from './useReducer'

const store = configureStore({
  reducer: {
    users: userReducer
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = ReturnType<typeof store.dispatch>

export default store