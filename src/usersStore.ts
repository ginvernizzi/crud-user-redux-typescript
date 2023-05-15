
import { configureStore } from '@reduxjs/toolkit'

import userReducer from './useReducer'

const store = configureStore({
  reducer: {
    users: userReducer
  }
})

export default store