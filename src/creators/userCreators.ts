import { User, userDispatchTypes } from "../type"

export const createUserAction = (user:User):userDispatchTypes => {
  return {
    type: "create",
    payload: user
  }
}

export const updateUserAction = (user:User):userDispatchTypes => {
  return {
    type: "update",
    payload: user
  }
}

export const deleteUserAction = (id:string):userDispatchTypes => {
  return {
    type: "delete",
    payload: {
      id: id
    }
  }
}