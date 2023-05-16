export interface User {
  id: string,
  name: string,
  email: string,
  github: string,
}

export interface StateEnableInput {
  enableInput:boolean, 
  userId:string
}

export type userDispatchTypes = {
  type: "init",
  payload: User
} | {
  type: "create",
  payload: User
} | {
  type: "update",
  payload: User
} | {
  type: "delete",
  payload: {
    id: string
  }
}

