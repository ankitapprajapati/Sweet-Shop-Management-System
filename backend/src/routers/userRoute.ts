import app from '../app'
import { Router } from 'express'
import { userCreateController, userLoginController } from '../controllers/user.controller';

const userRouter = Router();

userRouter.post("/register",userCreateController);
userRouter.post("/login",userLoginController)

export default userRouter