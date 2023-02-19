const { isUser } = require("../middleware/guards");
const { getPosts, getPostById } = require("../services/post");
const { postViewModel } = require("../util/mappers");

const router = require("express").Router();

router.get("/", isUser(), (req, res) => {
  res.render("home");
});

router.get("/catalog", async (req, res) => {
  const posts = (await getPosts()).map(postViewModel);
  res.render("catalog", { posts });
});

router.get("/details/:id", async (req, res) => {
  const id = req.params.id;
  const post = postViewModel(await getPostById(id));

  if (req.session.user) {
    post.hasUser = true;
    if (req.session.user._id == post.owner._id) {
      post.isAuthor = true;
    }
  }
  res.render("details", { post });
});

router.get("/profile", isUser(), async (req, res) => {
  const user = req.session.user;
  const posts = (await getPosts()).map(postViewModel);

  const userPosts = posts.filter((p) => p._id == user._id);

  const data = {
    ...user,
  };

  res.render("profile");
});

module.exports = router;
