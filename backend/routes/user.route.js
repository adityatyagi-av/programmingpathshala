import { Router } from "express";
import { registrationUser } from "../controllers/user.controller.js";

const userRouter =Router();
userRouter.post("/register-user",registrationUser);

export default userRouter;