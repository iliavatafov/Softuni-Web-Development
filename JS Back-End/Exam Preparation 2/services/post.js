const Post = require("../models/Post");

async function createPost(post) {
  const result = new Post(post);
  await result.save();
}

async function getPosts() {
  return Post.find({});
}

async function getPostById(postId) {
  return Post.findById(postId).populate("creator");
}

async function updatePost(id, post) {
  const existing = await Post.findById(id);

  existing._id = post._id;
  existing.startPoint = post.startPoint;
  existing.endPoint = post.endPoint;
  existing.date = post.date;
  existing.time = post.time;
  existing.carImage = post.carImage;
  existing.carBrand = post.carBrand;
  existing.seats = post.seats;
  existing.price = post.price;
  existing.description = post.description;
  existing.creator = post.creator;
  existing.buddies = post.buddies;

  await existing.save();
}

async function deletePostById(postId) {
  await Post.findByIdAndDelete(postId);
}

module.exports = {
  createPost,
  getPosts,
  getPostById,
  updatePost,
  deletePostById,
};
