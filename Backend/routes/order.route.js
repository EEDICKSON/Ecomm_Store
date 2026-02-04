import express from "express";
const route = express.Router();
import {
  getAllOrders,
  getUserOrder,
  deleteOrder,
  createOrder,
  updateOrder,
} from "../controllers/order.controller.js";
import router from "./user.route.js";
import protect from "../Middleware/auth.middleware.js";

// create order route
router.post("/", createOrder);

// update order route
router.put("/:id", updateOrder);

// get all orders route
router.get("/", protect, getAllOrders);

// Delete order route
router.delete("/:id", deleteOrder);

// get user's order route
router.get("/find/:userId", getUserOrder);

export default router;
