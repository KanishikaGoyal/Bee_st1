const express = require("express");
const router = express.Router();
const Movie=require("../model/review");
const reviewController= require("../controller/review-controller")

router.get("/", reviewController.getAllReview);
router.post("/", reviewController.addReview);
router.get("/:id", reviewController.getById);
router.put("/:id", reviewController.updateReview);
router.delete("/:id", reviewController.deleteReview);

module.exports= router;