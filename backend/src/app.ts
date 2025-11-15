import express from "express";
import userRouter from "./routers/userRoute";

const app = express();
app.use(express.json());

app.use("/api/users",userRouter);

app.get("/", (req, res) => {
  res.json({ message: "Server is running successfully!" });
});

export default app;