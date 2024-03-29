const router = require("express").Router();
const { isUser, isGuest } = require("../middleware/guards");
const { register, login } = require("../services/user");
const mapErrors = require("../util/mappers");

router.get("/register", isGuest(), (req, res) => {
  res.render("register");
});

// TO DO check form action, method, field names
router.post("/register", isGuest(), async (req, res) => {
  try {
    if (req.body.password != req.body.repass) {
      throw new Error("Password don`t match");
    }

    const user = await register(req.body.username, req.body.password);

    req.session.user = user;
    res.redirect("/"); // TO DO check redirect requirments
  } catch (error) {
    // TO DO send error messages
    const errors = mapErrors(error);
    res.render("register", {
      data: { username: req.body.username },
      errors,
    });
  }
});

router.get("/login", isGuest(), (req, res) => {
  res.render("login");
});

// TO DO check form action, method, field names
router.post("/login", async (req, res) => {
  try {
    const user = await login(req.body.username, req.body.password);
    req.session.user = user;
    res.redirect("/"); // TO DO check redirect requirments
  } catch (error) {
    const errors = mapErrors(error);
    res.render("login", {
      data: { username: req.body.username },
      errors,
    });
  }
});

router.get("/logout", isUser(), (req, res) => {
  delete req.session.user;
  res.redirect("/"); // TO DO check redirect requirments
});

module.exports = router;
