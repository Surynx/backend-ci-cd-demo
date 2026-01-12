import express from "express";

const app = express();

app.get("/",(req,res)=>{
    res.json({ message: "CI/CD backend working 🚀" });
});

app.listen(3000,()=>console.log("Server running....⏳"));