const model = require("../model/mongoose");

const getAllReviews = async (req, res) => {
  // #swagger.tags=["Reviews"]
  model.reviewModel
    .find({})
    .then(function (reviews) {
      res.setHeader("Content-Type", "application/json");
      res.status(200).json(reviews);
    })
    .catch(function (err) {
      console.log(err);
      res
        .status(500)
        .send(
          "There was an error trying to retrieve the reviews. Please try again."
        );
    });
};

const getReviewById = async (req, res) => {
  // #swagger.tags=["Reviews"]
  const reviewId = req.params.id;
  try {
    const review = await model.reviewModel.find({ _id: reviewId });

    if (!review[0]) {
      return res.status(404).send("Review does not exist.");
    }
    res.setHeader("Content-Type", "application/json");
    res.status(200).json(review[0]);
  } catch (error) {
    console.log("Error while trying to fetch review", error);
    res.status(500).send("Server Error");
  }
};

const createReview = async (req, res) => {
  // #swagger.tags=["Reviews"]
  const reviewToAdd = {
    UserId: req.body.UserId,
    Title: req.body.Title,
    Content: req.body.Content,
    Rating: req.body.Rating,
    Date: req.body.Date,
    Verified: req.body.Verified,
  };

  model.reviewModel
    .create(reviewToAdd)
    .then((result) => {
      res.status(204).send(result);
    })
    .catch(function (error) {
      console.log("Error adding review:", error);
      res.status(500).send("Server Error");
    });
};

const updateReview = async (req, res) => {
  // #swagger.tags=["Reviews"]
  const reviewId = req.params.id;

  const reviewToUpdate = {
    UserId: req.body.UserId,
    Title: req.body.Title,
    Content: req.body.Content,
    Rating: req.body.Rating,
    Date: req.body.Date,
    Verified: req.body.Verified,
  };

  model.reviewModel
    .updateOne({ _id: reviewId }, reviewToUpdate)
    .then((result) => {
      res.status(204).send(result);
    })
    .catch(function (error) {
      console.log(error);
      res
        .status(500)
        .send(
          "An error occurred while trying to update the review, please try again."
        );
    });
};

const deleteReview = async (req, res) => {
  // #swagger.tags=["Reviews"]
  const reviewId = req.params.id;

  model.reviewModel
    .deleteOne({ _id: reviewId })
    .then(() => {
      res.status(204).send("Review Sucessfully deleted!");
    })
    .catch(function (error) {
      console.log(error);
      res
        .status(500)
        .send("Server Error while trying to delete. Please try again.");
    });
};

/* const reviewSchema = new mongoose.Schema({
  UserId: String,
  Title: String,
  Content: String,
  Rating: Number,
  Date: Date,
  Verified: Boolean,
});

const reviewModel = mongoose.model("reviews", reviewSchema, "reviews"); */

module.exports = {
  getAllReviews,
  getReviewById,
  createReview,
  deleteReview,
  updateReview,
};
