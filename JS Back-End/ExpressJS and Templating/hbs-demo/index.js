const app = require("express")();
const handlebars = require("express-handlebars");

const hbs = handlebars.create({
  extname: ".hbs",
});

app.engine(".hbs", hbs.engine);
app.set("view engine", ".hbs");

let visitors = 0;

const products = [
  { name: "Widget", price: 37 },
  { name: "Gadget", price: 67 },
  { name: "Fluxor", price: 39, promoted: true },
];

app.get("/", (req, res) => {
  res.locals = {
    count: visitors++,
    user: {
      name: "peshko",
      email: "peshkoisthebest@abv.bg",
    },
  };
  res.render("home");
});

app.get("/catalog", (req, res) => {
  res.locals = {
    products,
  };
  res.render("catalog");
});

app.listen(5000);

console.log("Server listen on port 5000...");
