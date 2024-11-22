import express from 'express';
import { loginUser,registerUser } from '../controllers/userController.js'; // takes data from controller to handle the request and send the response
const userRouter = express.Router();

userRouter.post("/register",registerUser);
userRouter.post("/login",loginUser);

export default userRouter;