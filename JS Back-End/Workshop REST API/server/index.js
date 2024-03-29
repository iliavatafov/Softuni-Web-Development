const express = require("express");
const mongoose = require("mongoose");
const cors = require("./middlewares/cors");
const catalogController = require("./controllers/catalog");
const usersController = require("./controllers/users");
const auth = require("./middlewares/auth");

start();

async function start() {
  try {
    mongoose.set("strictQuery", false);
    await mongoose.connect("mongodb://127.0.0.1:27017/furniture", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log("Database connected...");
  } catch (error) {
    console.error("Databae connection faild");
    process.exit(1);
  }

  const app = express();
  app.use(express.json());
  app.use(cors());
  app.use(auth());
  app.use("/data/catalog", catalogController);
  app.use("/users", usersController);

  app.listen(3030, () => console.log("REST service started on port 3030..."));
}
