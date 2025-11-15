import app from '../app'
import { UserCreate, UserLogin } from '../interfaces/user.interface'
import { UserModel } from '../models/user.model'

// register new user
export const userCreate = async (Paylaod :UserCreate)=>{
    return await UserModel.create(Paylaod);
}

//login user
export const userLogin = async (Paylaod :UserLogin)=>{
    const user = await UserModel.findOne({email:Paylaod.email});
    if( !user ) return null;
    if( Paylaod.password !== user.password ) return null;
    return user;
}