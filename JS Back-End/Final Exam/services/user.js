const User = require("../models/User");
const Post = require("../models/Post");
const { hash, compare } = require("bcrypt");

async function register(username, email, password) {
  const existing = await getUserByUsername(username);

  if (existing) {
    throw new Error("Username is taken");
  }

  if (password.length < 4) {
    throw new Error("Password should be at least 4 characters long");
  }

  const hashedPassword = await hash(password, 10);

  const user = new User({
    username,
    email,
    hashedPassword,
  });

  await user.save();

  return user;
}

async function login(username, password) {
  const user = await getUserByUsername(username);

  if (!user) {
    throw new Error("User doesent exist");
  }

  const hasMatch = await compare(password, user.hashedPassword);

  if (!hasMatch) {
    throw new Error("Incorrect username or password");
  }

  return user;
}

async function getUserByUsername(username) {
  const user = await User.findOne({
    username: new RegExp(`^${username}$`, "i"),
  });

  return user;
}
async function getUserById(id) {
  const user = await User.findById(id);
  return user;
}

module.exports = {
  login,
  register,
  getUserById,
};
