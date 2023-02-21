const Post = require("../models/Post");

async function createPost(post) {
  const result = new Post(post);
  await result.save();
}

async function getPosts() {
  return Post.find({}).populate("owner");
}

async function getPostById(id) {
  return Post.findById(id).populate("owner").populate("commentList.user");
}

async function getUserPosts(userId) {
  return Post.find({ owner: userId }).populate("owner");
}

async function deletePost(id) {
  return Post.findByIdAndDelete(id);
}

async function updatePost(id, post) {
  const existing = await Post.findById(id).populate("owner");

  existing.name = post.name;
  existing.image = post.image;
  existing.age = post.age;
  existing.description = post.description;
  existing.location = post.location;
  existing.commentList = post.commentList;
  existing.owner = post.owner;

  await existing.save();
}

module.exports = {
  createPost,
  getPosts,
  getPostById,
  deletePost,
  updatePost,
  getUserPosts,
};
