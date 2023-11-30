const Review = require("../model/review");

const getAllReview = async (req, res, next) => {
  let Review
  try {
    review = await Review.find();
  } catch (err) {
    console.log(err);
  }

  if (!review) {
    return res.status(404).json({ message: "No reviews found" });
  }
  return res.status(200).json({ review });
};

const getById = async (req, res, next) => {
  const id = req.params.id;
  let review;
  try {
    review = await Review.findById(id);
  } catch (err) {
    console.log(err);
  }
  if (!review) {
    return res.status(404).json({ message: "No Review found" });
  }
  return res.status(200).json({ review });
};

const addReview = async (req, res, next) => {
  const { content,
    rating,
    author,
    created_at, } = req.body;
  let review;
  try {
    review = new Review({
        content,
        rating,
        author,
        created_at,
    });
    await review.save();
  } catch (err) {
    console.log(err);
  }

  if (!review) {
    return res.status(500).json({ message: "Unable To Add" });
  }
  return res.status(201).json({ review });
};

const updateReview = async (req, res, next) => {
  const id = req.params.id;
  const { content,rating,author,created_at } = req.body;
  let review;
  try {
    review = await Review.findByIdAndUpdate(id, {
        content,
        rating,
        author,
        created_at,
    });
    review = await review.save();
  } catch (err) {
    console.log(err);
  }
  if (!review) {
    return res.status(404).json({ message: "Unable To Update By this ID" });
  }
  return res.status(200).json({ review });
};

const deleteReview = async (req, res, next) => {
  const id = req.params.id;
  let review;
  try {
    movie = await Review.findByIdAndDelete(id);
  } catch (err) {
    console.log(err);
  }
  if (!review) {
    return res.status(404).json({ message: "Unable To Delete By this ID" });
  }
  return res.status(200).json({ message: "Product Successfully Deleted" });
};

exports.getAllReview = getAllReview;
exports.addReview = addReview;
exports.getById = getById;
exports.updateReview = updateReview;
exports.deleteReview = deleteReview;