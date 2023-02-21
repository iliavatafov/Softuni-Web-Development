const {
  Schema,
  model,
  Types: { ObjectId },
} = require("mongoose");

const URL_PATTERN = /^https?:\/\/.+$/;

const postSchema = new Schema({
  name: {
    type: String,
    minlength: [2, "Image should be at least 2 characters long"],
  },
  image: {
    type: String,
    validate: {
      validator(value) {
        return URL_PATTERN.test(value);
      },
      message: "Image must be valid URL",
    },
  },
  age: {
    type: Number,
    minlength: [1, "Min length 1"],
    maxlength: [100, "Max length 100"],
  },
  description: {
    type: String,
    minlength: [5, "Min length 5"],
    maxlength: [50, "Max length 50"],
  },
  location: {
    type: String,
    minlength: [5, "Min length 5"],
    maxlength: [50, "Max length 50"],
  },
  commentList: [
    {
      user: { type: ObjectId, ref: "User" },
      text: String,
    },
  ],
  owner: { type: ObjectId, ref: "User" },
});

const Post = model("Post", postSchema);

module.exports = Post;
