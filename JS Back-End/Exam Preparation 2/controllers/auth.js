const router = require("express").Router();
const { isUser, isGuest } = require("../middleware/guards");
const { register, login } = require("../services/user");
const { body, validationResult } = require("express-validator");
const { mapErrors } = require("../util/mappers");

router.get("/register", isGuest(), (req, res) => {
  res.render("register", { title: "Register Page" });
});

// TO DO check form action, method, field names
router.post(
  "/register",
  body("email")
    .trim()
    .isEmail()
    .normalizeEmail()
    .withMessage("Invalid email address"),
  body("password")
    .isLength({ min: 4 })
    .withMessage("Password should be at least 4 characters long"),
  isGuest(),
  async (req, res) => {
    try {
      const errorMessages = validationResult(req);
      if (!errorMessages.isEmpty()) {
        throw errorMessages.errors;
      }

      if (req.body.password != req.body.repass) {
        throw new Error("Password don`t match");
      }

      const user = await register(
        req.body.email,
        req.body.gender,
        req.body.password
      );

      req.session.user = user;
      res.redirect("/"); // TO DO check redirect requirments
    } catch (error) {
      // TO DO send error messages
      const errors = mapErrors(error);
      res.render("register", {
        data: {
          email: req.body.email,
          male: req.body.gender == "male" ? true : false,
          female: req.body.gender == "female" ? true : false,
        },
        errors,
      });
    }
  }
);

router.get("/login", isGuest(), (req, res) => {
  res.render("login");
});

// TO DO check form action, method, field names
router.post(
  "/login",
  body("email")
    .trim()
    .isEmail()
    .normalizeEmail()
    .withMessage("Email or password don`t match"),
  body("password")
    .isLength({ min: 4 })
    .withMessage("Email or password don`t match"),
  async (req, res) => {
    try {
      const errorMessages = validationResult(req);
      if (!errorMessages.isEmpty()) {
        throw errorMessages.errors;
      }
      const user = await login(req.body.email, req.body.password);
      req.session.user = user;
      res.redirect("/"); // TO DO check redirect requirments
    } catch (error) {
      const errors = mapErrors(error);
      res.render("login", {
        data: { email: req.body.email },
        errors,
      });
    }
  }
);

router.get("/logout", isUser(), (req, res) => {
  delete req.session.user;
  res.redirect("/"); // TO DO check redirect requirments
});

module.exports = router;
