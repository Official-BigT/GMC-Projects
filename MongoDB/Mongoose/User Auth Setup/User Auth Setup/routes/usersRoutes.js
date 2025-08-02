import express from "express";
import { registerUserCtrl } from "../controllers/usersCtrl.js";

const router = express.Router();
userRoutes.post("/register", registerUserCtrl);



export default userRoutes;