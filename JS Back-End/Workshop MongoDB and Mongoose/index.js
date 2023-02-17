const { about } = require("./controllers/about");
const { details } = require("./controllers/details");
const { home } = require("./controllers/home");
const { notFound } = require("./controllers/notFound");
const create = require("./controllers/create");
const deleteCar = require("./controllers/delete");
const editCar = require("./controllers/edit");

const express = require("express");
const hbs = require("express-handlebars");

const carsService = require("./services/cars");
const accessoryService = require("./services/accessory");

const initDb = require("./models/index");
const accessory = require("./controllers/accessory");
const attach = require("./controllers/attach");

start();

async function start() {
  await initDb();

  const app = express();

  app.engine(
    ".hbs",
    hbs.create({
      extname: ".hbs",
    }).engine
  );
  app.set("view engine", "hbs");

  app.use(express.urlencoded({ extended: true }));
  app.use("/static", express.static("static"));
  app.use(carsService());
  app.use(accessoryService());

  app.get("/", home);
  app.get("/about", about);
  app.get("/details/:id", details);
  app.route("/create").get(create.get).post(create.post);
  app.route("/delete/:id").get(deleteCar.get).post(deleteCar.post);
  app.route("/edit/:id").get(editCar.get).post(editCar.post);
  app.route("/accessory").get(accessory.get).post(accessory.post);
  app.route("/attach/:id").get(attach.get).post(attach.post);

  app.all("*", notFound);

  app.listen(5000, () => console.log("Server started on port 5000..."));
}
