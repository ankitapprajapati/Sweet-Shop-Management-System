import { Request, Response } from "express";
import { userCreate, userLogin } from "../services/user.service";
import { User } from "../interfaces/user.interface";

export const userCreateController = async (req: Request, res: Response) => {
  try {
    const user = await userCreate(req.body);

    return res.status(201).json({
      success: true,
      message: "User registered successfully",
      user,
    });
  } catch (error: any) {
    return res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

export const userLoginController = async (req: Request, res: Response) => {
  try {
    const data = await userLogin(req.body);

    return res.status(200).json({
      success: true,
      message: "Login successful",
      user: data.user,
      token: data.token,
    });
  } catch (error: any) {
    return res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};
