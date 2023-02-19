const mongoose = require("mongoose");
// TO DO initialise all models
require("../models/User");

// TO DO change database name
const dbName = "wildelife";
const connectionString = `mongodb://127.0.0.1:27017/${dbName}`;

module.exports = async (app) => {
  try {
    mongoose.set("strictQuery", false);
    await mongoose.connect(connectionString, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log("Database connected");

    mongoose.connection.on("error", (err) => {
      console.error("Database error");
      console.error(err);
    });
  } catch (err) {
    console.error("Error connecting to database");
    process.exit(1);
  }
};
