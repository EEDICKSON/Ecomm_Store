import express from "express";
const router = express.Router();
import {
  createBanner,
  getAllBanners,
  getRandomBanner,
  deleteBanner,
} from "../controllers/banner.controller.js";

// create banner route
router.post("/", createBanner);

//get all banners
router.get("/", getAllBanners);

// delete banner route
router.delete("/:id", deleteBanner);

// get ran
router.get("/random", getRandomBanner);

export default router;
