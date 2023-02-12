const express = require("express");
const catalogController = require("./catalog");

const app = express();
app.use("/content", express.static("public"));

app.use("/catalog", catalogController);

app.listen(5000);

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/");
});

app.get("/create", (req, res) => {
  res.send(
    '<form method="POST"><label>Name: <input name="name"></label><button>Send</button></form>'
  );
});

app.post("/create", (req, res) => {
  res.status(201).json({
    _id: "sdf132",
    name: "Product 1",
    price: 53,
  });
});

app.get("/contact", (req, res) => {
  res.redirect("/about");
});

app.get("/about", (req, res) => {
  res.send("Ábout page");
});

app.all("*", (req, res) => {
  res.send("404 - Custom not found page");
});

console.log("Server listen on port 5000...");
