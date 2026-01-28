import {
  ratingProduct,
  getAllproducts,
  getProduct,
  createProduct,
  deleteProduct,
  updateProduct,
} from "../controller/product.controller.js";

import express from "express";
const router = express.Router();

// Rating Product route
router.put("/rating/:productId", ratingProduct);
// get all products
router.get("/", getAllproducts);
// get one product
router.get("/find/:id", getProduct);

// create product
router.post("/", createProduct);

//update product
router.put("/:id", updateProduct);

// delete product
router.delete("/:id", deleteProduct);

export default router;
