const express = require("express");
const router = express.Router();
const Movie=require("../model/movie");
const movieController= require("../controller/movie-controller")

router.get("/", movieController.getAllMovie);
router.post("/", movieController.addMovie);
router.get("/:id", movieController.getById);
router.put("/:id", movieController.updateMovie);
router.delete("/:id", movieController.deleteMovie);

module.exports= router;