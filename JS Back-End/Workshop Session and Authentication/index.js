const { about } = require("./controllers/about");
const { details } = require("./controllers/details");
const { home } = require("./controllers/home");
const { notFound } = require("./controllers/notFound");
const create = require("./controllers/create");
const deleteCar = require("./controllers/delete");
const editCar = require("./controllers/edit");
const accessory = require("./controllers/accessory");
const attach = require("./controllers/attach");
const {
  registerGet,
  loginGet,
  registerPost,
  loginPost,
  logoutGet,
} = require("./controllers/auth");

const express = require("express");
const hbs = require("express-handlebars");
const session = require("express-session");

const carsService = require("./services/cars");
const accessoryService = require("./services/accessory");
const authService = require("./services/auth");
const { isLoggedIn } = require("./services/util");

const initDb = require("./models/index");

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

  app.use(
    session({
      secret: "my secret",
      resave: false,
      saveUninitialized: true,
      cookie: { secure: "auto" },
    })
  );
  app.use(express.urlencoded({ extended: true }));
  app.use("/static", express.static("static"));
  app.use(carsService());
  app.use(accessoryService());
  app.use(authService());

  app.get("/", home);
  app.get("/about", about);
  app.get("/details/:id", details);

  app
    .route("/create")
    .get(isLoggedIn(), create.get)
    .post(isLoggedIn(), create.post);

  app
    .route("/delete/:id")
    .get(isLoggedIn(), deleteCar.get)
    .post(isLoggedIn(), deleteCar.post);

  app
    .route("/edit/:id")
    .get(isLoggedIn(), editCar.get)
    .post(isLoggedIn(), editCar.post);

  app
    .route("/accessory")
    .get(isLoggedIn(), accessory.get)
    .post(isLoggedIn(), accessory.post);

  app
    .route("/attach/:id")
    .get(isLoggedIn(), attach.get)
    .post(isLoggedIn(), attach.post);

  app.route("/register").get(registerGet).post(registerPost);

  app.route("/login").get(loginGet).post(loginPost);

  app.get("/logout", logoutGet);

  app.all("*", notFound);

  app.listen(5000, () => console.log("Server started on port 5000..."));
}
