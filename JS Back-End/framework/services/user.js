const User = require("../models/User");
const { hash, compare } = require("bcrypt");

// TO DO add all filed required by the exam
async function register(username, password) {
  const existing = await getUserByUsername(username);

  if (existing) {
    throw new Error("Username is taken");
  }

  const hashedPassword = await hash(password, 10);

  const user = new User({
    username,
    hashedPassword,
  });
  
  await user.save();

  return user;
}

// TO DO change identifier
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

// TO DO identify user by given indentifier (email, password or ....)
async function getUserByUsername(username) {
  const user = await User.findOne({
    username: new RegExp(`^${username}$`, "i"),
  });

  return user;
}

module.exports = {
  login,
  register,
};
