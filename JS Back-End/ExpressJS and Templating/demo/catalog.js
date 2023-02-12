const { Router } = require("express");

const router = Router();

router.get("/", (req, res) => {
  res.send("Catalog Page");
});

router.get("/:productId", (req, res) => {
  console.log(req.params);
  res.send("Product page");
});

module.exports = router;
