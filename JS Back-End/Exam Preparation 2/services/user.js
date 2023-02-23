const User = require("../models/User");
const { hash, compare } = require("bcrypt");

// TO DO add all filed required by the exam
async function register(email, gender, password) {
  const existing = await getUserByEmail(email);

  if (existing) {
    throw new Error("Email is taken");
  }

  const hashedPassword = await hash(password, 10);

  const user = new User({
    email,
    gender,
    hashedPassword,
  });

  await user.save();

  return user;
}

// TO DO change identifier
async function login(email, password) {
  const user = await getUserByEmail(email);

  if (!user) {
    throw new Error("User doesent exist");
  }

  const hasMatch = await compare(password, user.hashedPassword);

  if (!hasMatch) {
    throw new Error("Incorrect email or password");
  }

  return user;
}

// TO DO identify user by given indentifier (email, password or ....)
async function getUserByEmail(email) {
  const user = await User.findOne({
    email: new RegExp(`^${email}$`, "i"),
  });

  return user;
}

module.exports = {
  login,
  register,
};
