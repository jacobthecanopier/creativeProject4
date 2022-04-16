const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);

const mongoose = require("mongoose");

// connect to the database
mongoose.connect("mongodb://localhost:27017/reviews", {
  useNewUrlParser: true,
});

const reviewSchema = new mongoose.Schema({
  name: String,
  position: String,
  text: String,
  image: String,
});

const Review = mongoose.model("Review", reviewSchema);

app.post("/api/reviews", async (req, res) => {
  const review = new Review({
    name: req.body.name,
    position: req.body.position,
    text: req.body.text,
    image: req.body.image,
  });
  try {
    await review.save();
    res.send(review);
  } catch (error) {
    console.log("in post!");
    console.log(error);
    res.sendStatus(500);
  }
});

app.get("/api/reviews", async (req, res) => {
  try {
    let reviews = await Review.find();
    res.send(reviews);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

app.delete("/api/reviews/:id", async (req, res) => {
  console.log("deleting", req.params.id);
  try {
    await Review.deleteOne({
      _id: req.params.id,
    });
    res.sendStatus(200);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

// app.put("/api/items/:id", async (req, res) => {
//   console.log("editing", req.params.id);
//   const item = await Item.findOne({
//     _id: req.params.id,
//   });
//   try {
//     item.title = req.body.title;
//     item.description = req.body.description;
//     item.save();
//     res.sendStatus(200);
//   } catch (error) {
//     console.log(error);
//     res.sendStatus(500);
//   }
// });

app.listen(3003, () => console.log("Server listening on port 3003!"));

// const express = require("express");
// const cors = require("cors");
// const bodyParser = require("body-parser");
// const morgan = require("morgan");

// const reviews = require("./db/reviews.js");

// const app = express();
// const mongoose = require("mongoose");

// mongoose.connect("mongodb://localhost:1234/reviews", {
//   useNewUrlParser: true,
// });

// //middleware

// app.use(morgan("tiny"));
// app.use(cors());
// app.use(bodyParser.json());

// const reviewSchema = new mongoose.Schema({
//   name: String,
//   position: String,
//   text: String,
//   image: String,
// });

// const Review = mongoose.model("Review", reviewSchema);

// app.get("/", (req, res) => {
//   res.json({
//     message: "Full Stack Message Board! 🎉",
//   });
// });

// app.get("/reviews", (req, res) => {
//   reviews.getAllReviews().then((reviews) => {
//     res.json(reviews);
//   });
// });

// app.post("/reviews", (req, res) => {
//   console.log(req.body);
//   reviews
//     .createReview(req.body)
//     .then((review) => {
//       res.json(review);
//     })
//     .catch((error) => {
//       res.status(500);
//       res.json(error);
//     });
// });

// app.delete("/reviews/:id", async (req, res) => {
//   console.log("deleting" + req.params.id);
//   try {
//     await Review.deleteOne({
//       _id: req.params.id,
//     });
//     res.sendStatus(200);
//   } catch (error) {
//     console.log(error);
//     res.sendStatus(500);
//   }
// });

// const port = process.env.PORT || 1234;
// app.listen(port, () => {
//   console.log(`listening on ${port}`);
// });
