import Product from "../models/product.model.js";
import asyncHandler from "express-async-handler";
import Product from "./../models/product.model";

// CREATE PRODUCT

const createProduct = asyncHandler(async (req, res) => {
  const newProduct = await Product(req.body);
  const product = newProduct.save();

  if (product) {
    res.status(201).json(product);
  } else {
    res.status(400);
    throw new Error("Product was not created");
  }
});

// Update Product

const updateProduct = asyncHandler(async (req, res) => {
  const updateProduct = await Product.findByIdAndUpdate(
    req.params.id,
    {
      $set: req.body,
    },
    {
      new: true,
    },
  );

  if (!updateProduct) {
    res.status(400);
    throw new Error("Product has not been updated");
  } else {
    res.status(201).json(updatedProduct);
  }
});

// Delete Product
const deleteProduct = asyncHandler(async (req, res) => {
  const product = await Product.findByIdAndDelete(req.params.id);
  if (!product) {
    res.status(400);
    throw new Error("product was not deleted");
  } else {
    res.status(201).json("Product deleted successfully");
  }
});

// Get Product
const getProduct = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);

  if (!product) {
    res.status(400);
    throw new Error("Product not found");
  } else {
    res.status(200).json(product);
  }
});

// Get all products
const getAllproducts = asyncHandler(async (req, res) => {
  const qNew = req.query.new;
  const qCategory = req.query.category;
  const qsearch = req.query.search;
  let products;

  if (qNew) {
    products = await Product.find().sort({ createdAt: -1 });
  } else if (qCategory) {
    products = await Product.find({ categories: { $in: [qCategory] } });
  } else if (qsearch) {
    products = await Product.find({
      $text: {
        $search: qsearch,
        $caseSensitive: false,
        $dicriticSensitive: false,
      },
    });
  } else {
    products = await Product.find().sort({ createdAt: -1 });
  }
});

// Rating product

const ratingProduct = asyncHandler(async (req, res) => {
  const { star, name, comment, postedBy } = req.body;

  if (star && name && comment && postedBy) {
    const postedBy = await Product.findByIdAndUpdate(req.params.id, {
      new: true,
    });
    res.status(201).json("product was rated successfully");
  } else {
    res.status(400);
    throw new Error("product was not rated successfully");
  }
});

export {
  ratingProduct,
  getAllproducts,
  getProduct,
  createProduct,
  deleteProduct,
  updateProduct,
};
