import express from "express";
const router = express.Router();
import {
  getAllUsers,
  getUser,
  deleteUser,
  updateUser,
} from "../controllers/user.controller.js";

//get all users route
router.get("/", getAllUsers);

//delete user route
router.delete("/:id", deleteUser);

//update user route
router.put("/:id", updateUser);

//get one user route
router.get("/find/:userId", getUser);
export default router;
