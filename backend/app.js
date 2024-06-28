import express from "express";
import cors from "cors"
import userRouter from "./routes/user.route.js";
export const app=express();
app.use(cors())
app.use(express.json())
app.use("/api",userRouter)

app.all("*", (req,res,next) => {
    const err = new Error(`Route ${req.originalUrl} not found`) ;
    err.statusCode = 404;
    next(err);
  });