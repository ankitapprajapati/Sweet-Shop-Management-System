import { Request, Response } from "express";
import { userCreate, userLogin } from "../services/user.service";

// new user registration
export const userCreateController = async (req:Request,res:Response)=>{
    try{
        const user = await userCreate(req.body);
        return res.status(201).json({success:true, user})
    }
    catch(e){
        res.status(400).json({ success:false,error:e});
    }
}

// user login
export const userLoginController = async( req:Request,res:Response)=>{
    try{
        const user = await userLogin(req.body);
        if( !user ){
            return res.status(400).json({ success:false, message:"Invalid Credentials"})
        }
        return res.json({ success: true, id:user._id, email:user.email });
    }
    catch(e){
        res.status(400).json({ success:false,error:e});
    } 
}