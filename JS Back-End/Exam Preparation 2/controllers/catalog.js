const { postViewModel } = require("../util/mappers");
const { getPosts } = require("../services/post");

const router = require("express").Router();

router.get("/catalog", async (req, res) => {
  try {
    const posts = (await getPosts()).map(postViewModel);
    res.render("catalog", { title: "Catalog Page", data: posts });
  } catch (error) {
    res.render("404");
  }
});

module.exports = router;
