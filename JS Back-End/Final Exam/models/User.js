const { Schema, model } = require("mongoose");

// TO DO change user model according to exam description
// TO DO add validation
const userSchema = new Schema({
  username: {
    type: String,
    minlength: [2, "First name must be at least 2 characters long"],
  },
  email: {
    type: String,
    minlength: [10, "First name must be at least 2 characters long"],
  },
  hashedPassword: { type: String, required: true },
});

userSchema.index(
  { username: 1 },
  {
    unique: true,
    collation: {
      locale: "en",
      strength: 2,
    },
  }
);

const User = model("User", userSchema);

module.exports = User;
