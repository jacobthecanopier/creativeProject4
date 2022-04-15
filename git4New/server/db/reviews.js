const Joi = require("joi");
const db = require("./connection");

//name
//text
//image
//created when?

const schema = Joi.object().keys({
  name: Joi.string().required(),
  text: Joi.string().required(),
  position: Joi.string().required(),
  image: Joi.string(),
});

const reviews = db.get("reviews");

function getAllReviews() {
  return reviews.find();
}

function createReview(review) {
  const result = schema.validate(review);
  if (result.error == null) {
    review.created = new Date();
    return reviews.insert(review);
  } else {
    return Promise.reject(result.error);
  }
}

module.exports = {
  createReview,
  getAllReviews,
};
