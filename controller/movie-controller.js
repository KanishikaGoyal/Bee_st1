const Movie = require("../model/movie");

const getAllMovie = async (req, res, next) => {
  let Movie;
  try {
    movie = await Movie.find();
  } catch (err) {
    console.log(err);
  }

  if (!movie) {
    return res.status(404).json({ message: "No products found" });
  }
  return res.status(200).json({ movie });
};

const getById = async (req, res, next) => {
  const id = req.params.id;
  let movie;
  try {
    movie = await Movie.findById(id);
  } catch (err) {
    console.log(err);
  }
  if (!movie) {
    return res.status(404).json({ message: "No Movie found" });
  }
  return res.status(200).json({ movie });
};

const addMovie = async (req, res, next) => {
  const {  title,
    description,
    genre,
    release_year,
    reviews, } = req.body;
  let movie;
  try {
    movie = new Movie({
      title,
      description,
      genre,
      release_year,
      reviews,
    });
    await movie.save();
  } catch (err) {
    console.log(err);
  }

  if (!movie) {
    return res.status(500).json({ message: "Unable To Add" });
  }
  return res.status(201).json({ movie });
};

const updateMovie = async (req, res, next) => {
  const id = req.params.id;
  const { title ,  description, genre , release_year, reviews } = req.body;
  let movie;
  try {
    movie = await Movie.findByIdAndUpdate(id, {
        title,
        description,
        genre,
        release_year,
        reviews,  
    });
    movie = await movie.save();
  } catch (err) {
    console.log(err);
  }
  if (!movie) {
    return res.status(404).json({ message: "Unable To Update By this ID" });
  }
  return res.status(200).json({ movie });
};

const deleteMovie = async (req, res, next) => {
  const id = req.params.id;
  let movie;
  try {
    movie = await Movie.findByIdAndDelete(id);
  } catch (err) {
    console.log(err);
  }
  if (!movie) {
    return res.status(404).json({ message: "Unable To Delete By this ID" });
  }
  return res.status(200).json({ message: "Product Successfully Deleted" });
};

exports.getAllMovie = getAllMovie;
exports.addMovie = addMovie;
exports.getById = getById;
exports.updateMovie = updateMovie;
exports.deleteMovie = deleteMovie;