const mongoose = require("mongoose");

require("./Car");
require("./Accessory");

const connectionString = "mongodb://127.0.0.1:27017/carbicle";

async function init() {
  try {
    mongoose.set("strictQuery", false);
    await mongoose.connect(connectionString);

    console.log("Database connected...");

    mongoose.connection.on("error", (err) => {
      console.log("Database error");
      console.log(err);
    });
  } catch (error) {
    console.error("Error connecting to database");
    process.exit(1);
  }
}

module.exports = init;
