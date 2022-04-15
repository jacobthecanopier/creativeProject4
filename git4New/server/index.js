const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const morgan = require("morgan");

const reviews = require("./db/reviews.js");

const app = express();

//middleware

app.use(morgan("tiny"));
app.use(cors());
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.json({
    message: "Full Stack Message Board! 🎉",
  });
});

app.get("/reviews", (req, res) => {
  reviews.getAllReviews().then((reviews) => {
    res.json(reviews);
  });
});

app.post("/reviews", (req, res) => {
  console.log(req.body);
  reviews
    .createReview(req.body)
    .then((review) => {
      res.json(review);
    })
    .catch((error) => {
      res.status(500);
      res.json(error);
    });
});

const port = process.env.PORT || 1234;
app.listen(port, () => {
  console.log(`listening on ${port}`);
});
