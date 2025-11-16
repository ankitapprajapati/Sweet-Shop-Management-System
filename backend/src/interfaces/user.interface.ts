export type userRole = "user" | "admin"

export interface User {
  _id?: string;
  name: string;
  email: string;
  password: string;
  role : userRole
  createdAt?: Date;
  updatedAt?: Date;
}

export interface UserCreate{
    name : string,
    email : string,
    password : string
}

export interface UserLogin{
    email : string,
    password : string
}