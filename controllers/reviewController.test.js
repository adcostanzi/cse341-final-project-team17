const mockingoose = require("mockingoose");
const { reviewModel } = require("../model/mongoose");
const reviewController = require("./reviewController");
const TestResponse = require("../utilities/testResponse");
const {
  Types: { ObjectId },
} = require("mongoose");

describe("Testing mongoose game controller function that returns all games", () => {
  test("Should return all reviews in collection", async () => {
    const _reviews = [
      {
        _id: "66495cc29f675f2a866658eb",
        UserId: 1919191919191,
        Title: "A great game by Nintendo",
        Content: "This is a great review",
        Rating: 5,
        Date: "5/19/2024",
        Verified: "True",
        GameId: "664958029f675f2a865b4f1a",
      },
      {
        _id: "66502b08caf3cd8753cefcbd",
        UserId: 1919191919171,
        Title: "A LOTR Game",
        Content: "I have never seen a game so good and accurate",
        Rating: 5,
        Date: "5/24/2024",
        Verified: "True",
      },
    ];

    mockingoose(reviewModel).toReturn(_reviews, "find");

    const req = {};
    const res = new TestResponse();

    await reviewController.getAllReviews(req, res);
    expect(res.statusCode).toBe(200);
    expect(JSON.parse(JSON.stringify(res.data))).toMatchObject(_reviews);
  });
});
