const { Schema, model } = require("mongoose");

// TO DO change user model according to exam description
// TO DO add validation
const userSchema = new Schema({
  email: { type: String, required: true },
  gender: { type: String, require: true },
  hashedPassword: { type: String, required: true },
});

userSchema.index(
  { email: 1 },
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
