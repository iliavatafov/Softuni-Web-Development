const express = require("express");
// const cookieParser = require("cookie-parser");

const expressSession = require("express-session");
const auth = require("./auth");

const app = express();

// const sessions = {};

// function mySession(req, res, next) {
//   const cookies = (req.headers.cookie || "")
//     .split(";")
//     .map((t) => t.trim())
//     .map((t) => t.split("="))
//     .reduce((a, [k, v]) => Object.assign(a, { [k]: v }), {});

//   console.log(cookies);

//   let user = sessions[cookies.sessionId];

//   if (user == undefined) {
//     const newId = ("000000" + (Math.random() * 999999).toString(16)).slice(-6);
//     user = {
//       visited: 1,
//     };

//     sessions[newId] = user;

//     res.setHeader("Set-Cookie", `sessionId=${newId}; httpOnly`);
//   } else {
//     user.visited++;
//   }

//   req.session = user;

//   next();
// }

// app.use(mySession);
app.use(express.urlencoded({ extended: true }));
app.use(
  expressSession({
    secret: "super secret",
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false },
  })
);
app.use(auth());

app.get("/", (req, res) => {
  // console.log(req.cookies);
  // res.cookie("CookieParser_Cookie", "hello");

  // if (req.session.visited) {
  //   req.session.visited++;
  // } else {
  //   req.session.visited = 1;
  // }
  const user = req.session.user || {
    username: "Anonymus",
  };
  console.log(req.session.user);
  res.send(`
  <!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>

<body>
  <p>Hello, ${user.username}</p>
  <a href="/login">Login</a>
  <a href="/register">Register</a>
</body>

</html>
  `);
});

app.get("/login", (req, res) => {
  res.sendFile(__dirname + "/login.html");
});

app.post("/login", async (req, res) => {
  if (await req.auth.login(req.body.username, req.body.password)) {
    res.redirect("/");
  } else {
    res.status(401).send("Incorrect username or password");
  }
});

app.get("/register", (req, res) => {
  res.sendFile(__dirname + "/register.html");
});

app.post("/register", async (req, res) => {
  if (await req.auth.register(req.body.username, req.body.password)) {
    res.redirect("/");
  } else {
    res.status(409).send("Username already exists");
  }
});

app.listen(5000);
