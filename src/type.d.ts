export interface User {
  name: string,
  email: string,
  github: string,
}

export interface UserWithId extends User {
  id: string,
}

export interface StateEnableInput {
  enableInput:boolean, 
  userId:string
}

type UserId = string


