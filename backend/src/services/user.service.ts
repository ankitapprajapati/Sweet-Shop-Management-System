import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { UserCreate, UserLogin } from "../interfaces/user.interface";
import { UserModel } from "../models/user.model";

const JWT_SECRET = process.env.JWT_SECRET || "secret-key";

// Register user
export const userCreate = async (payload: UserCreate) => {
  const existing = await UserModel.findOne({ email: payload.email });
  if (existing) throw new Error("Email already registered");

  const hashedPassword = await bcrypt.hash(payload.password, 10);

  const user = await UserModel.create({
    ...payload,
    password: hashedPassword,
  });

  // do not return password
  const { password, ...userData } = user.toObject();

  return userData;
};

// Login user
export const userLogin = async (payload: UserLogin) => {
  const user = await UserModel.findOne({ email: payload.email });
  if (!user) throw new Error("Invalid credentials");

  const isMatch = await bcrypt.compare(payload.password, user.password);
  if (!isMatch) throw new Error("Invalid credentials");

  const token = jwt.sign(
    {
      id: user._id,
      email: user.email,
      role: user.role,
    },
    JWT_SECRET,
    { expiresIn: "7d" }
  );

  const { password, ...userData } = user.toObject();

  return { user: userData, token };
};
