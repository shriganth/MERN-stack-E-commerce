import express from "express";
import { createUser } from "../controller/user.controller.js";


const userRoute = express.Router();

userRoute.post("/", createUser);

export default userRoute;