const { isUser } = require("../middleware/guards");
const { getPosts } = require("../services/post");
const { postViewModel } = require("../util/mappers");

const router = require("express").Router();

router.get("/profile", isUser(), async (req, res) => {
  const userId = req.session.user._id;
  const posts = (await getPosts()).map(postViewModel);

  const data = posts.filter((p) => p.creator._id == userId);

  res.render("profile", {
    title: "Profile Page",
    data,
    user: req.session.user,
    count: data.length,
    isMale: req.session.user.gender == "male" ? true : false,
  });
});

module.exports = router;
