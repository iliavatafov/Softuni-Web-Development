const { isUser } = require("../middleware/guards");
const { getPosts, getPostById, getUserPosts } = require("../services/post");
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
  const existing = postViewModel(await getPostById(id));

  const post = JSON.parse(JSON.stringify(existing));

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
  const posts = (await getUserPosts(user._id)).map(postViewModel);

  user.postsCount = posts.length;

  res.render("profile", { posts, user });
});

module.exports = router;
