const Post = require("../models/Post");

async function createPost(post) {
  const result = new Post(post);
  await result.save();
}

async function getPosts() {
  return Post.find({}).populate("owner");
}

async function getPostById(id) {
  console.log(
    await Post.findById(id).populate("owner").populate("commentList")
  );
  return Post.findById(id).populate("owner").populate("commentList");
}

async function deletePost(id) {
  return Post.findByIdAndDelete(id);
}

async function updatePost(id, post) {
  const existing = await Post.findById(id).populate("commentList");

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
};
