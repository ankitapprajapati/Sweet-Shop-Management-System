import express from "express";
import userRouter from "./routers/user.route";
import sweetRouter from "./routers/sweet.route";
import cors from 'cors'

const app = express();
app.use(express.json());
app.use(cors()) 

app.use("/api/users",userRouter);
app.use("/api/sweets",sweetRouter);

app.get("/", (req, res) => {
  res.json({ message: "Server is running successfully!" });
});

export default app;