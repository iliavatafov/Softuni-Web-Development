const router = require("express").Router();
const { isGuest } = require("../middlewares/guards");
const { register, login, logout } = require("../services/user");
const mapErrors = require("../utils/mapper");

router.post("/register", isGuest(), async (req, res) => {
  try {
    if (req.body.password.trim() == "" || req.body.email.trim() == "") {
      throw new Error("Email and password are required");
    }
    const result = await register(
      req.body.email.trim().toLowerCase(),
      req.body.password.trim()
    );

    res.status(201).json(result);
  } catch (error) {
    const err = mapErrors(error);
    res.status(400).json({ message: err });
  }
});

router.post("/login", isGuest(), async (req, res) => {
  try {
    const result = await login(
      req.body.email.trim().toLowerCase(),
      req.body.password.trim()
    );

    res.json(result);
  } catch (error) {
    const err = mapErrors(error);
    res.status(400).json({ message: err });
  }
});

router.get("/logout", (req, res) => {
  logout(req.user?.token);
  res.status(204).end();
});

module.exports = router;
