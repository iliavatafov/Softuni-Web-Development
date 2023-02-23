const { postViewModel } = require("../util/mappers");
const { getPosts } = require("../services/post");

const router = require("express").Router();

router.get("/catalog", async (req, res) => {
  const posts = (await getPosts()).map(postViewModel);

  res.render("catalog", { title: "Catalog Page", data: posts });
});

module.exports = router;
