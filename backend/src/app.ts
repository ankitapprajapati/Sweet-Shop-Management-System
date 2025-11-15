import express from "express";

const app = express();
app.use(express.json());

app.use("/api/v1",(req,res)=>{
    res.json({
        message : "ankit"
    })
});

app.get("/", (req, res) => {
  res.json({ message: "Server is running successfully!" });
});

export default app;

