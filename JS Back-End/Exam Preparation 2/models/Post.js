const {
  Schema,
  model,
  Types: { ObjectId },
} = require("mongoose");

const URL_PATTERN = /^https?:\/\/.+$/;

const postSchema = new Schema({
  startPoint: {
    type: String,
    minLength: [4, "Start point should be at least 4 characters long"],
  },
  endPoint: {
    type: String,
    minLength: [4, "End point should be at least 4 characters long"],
  },
  date: { type: String, reqired: true },
  time: { type: String, required: true },
  carImage: {
    type: String,
    validate: {
      validator(value) {
        return URL_PATTERN.test(value);
      },
      message: "Image must be valid URL",
    },
  },
  carBrand: { type: String, required: true },
  seats: {
    type: Number,
    min: [0, "Seats should be positive number from 0 to 4"],
    max: [4, "Seats should be positive number from 0 to 4"],
  },
  price: {
    type: Number,
    min: [1, "Price should be positive number from 1 to 50"],
    max: [50, "Price should be positive number from 1 to 50"],
  },
  description: {
    type: String,
    minLength: [10, "Description should be at least 10 characters long"],
  },
  creator: { type: ObjectId, ref: "User" },
  buddies: [{ type: ObjectId, ref: "User" }],
});

const Post = model("Post", postSchema);

module.exports = Post;
