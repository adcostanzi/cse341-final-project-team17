const router = require("express").Router();
const reviewController = require("../controllers/reviewController");

router.get("/", reviewController.getAllReviews);

router.get("/:id", reviewController.getReviewById);

router.post("/new-review", reviewController.createReview);

router.put("/:id", reviewController.updateReview);

router.delete("/:id", reviewController.deleteReview);

module.exports = router;
