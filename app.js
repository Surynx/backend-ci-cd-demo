import express from "express";
import dotenv from "dotenv";

const app = express();

dotenv.config();

app.get("/",(req,res)=>{
    res.json({ message: "CI/CD backend working 🚀..hai ayoob" });
});

app.listen(process.env.PORT,()=>console.log("Server running....⏳"));