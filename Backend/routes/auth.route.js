import express from "express";
import {
  loginUser,
  logOut,
  registerUser,
} from "../controller/auth.controller.js";
const router = express.Router();

// Register User route
router.post("/register", registerUser);
// Login User Router
router.post("/login", loginUser);
// Logout User
router.get("/logout", logOut);

export default router;
