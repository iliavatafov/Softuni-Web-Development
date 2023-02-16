const { Schema, model } = require("mongoose");

const commentsSchema = new Schema({
  author: String,
  content: { type: String, required: true },
});

const Comment = model("Comment", commentsSchema);

module.exports = Comment;
