const router = require("express").Router();

const { isUser } = require("../middleware/guards");

const {
  createPost,
  getPostById,
  deletePost,
  updatePost,
} = require("../services/post");
const { mapErrors, postViewModel } = require("../util/mappers");

router.get("/create", isUser(), (req, res) => {
  res.render("create");
});

router.post("/create", isUser(), async (req, res) => {
  const userId = req.session.user._id;

  const post = {
    name: req.body.name,
    image: req.body.image,
    age: req.body.age,
    description: req.body.description,
    location: req.body.location,
    commentList: req.body.commentList,
    owner: userId,
  };

  try {
    await createPost(post);
    res.redirect("/catalog");
  } catch (error) {
    console.error(error);
    const errors = mapErrors(error);
    res.render("create", { errors, data: post });
  }
});

router.get("/delete/:id", isUser(), async (req, res) => {
  const id = req.params.id;
  const existing = postViewModel(await getPostById(id));

  if (req.session.user._id != existing.owner._id) {
    return res.redirect("/login");
  }

  try {
    await deletePost(id);
    res.redirect("/catalog");
  } catch (error) {
    console.error(error);
    const errors = mapErrors(error);
    res.render("details", { errors });
  }
});

router.get("/edit/:id", isUser(), async (req, res) => {
  const id = req.params.id;
  const post = postViewModel(await getPostById(id));

  if (req.session.user._id != post.owner._id) {
    return res.redirect("/login");
  }

  res.render("edit", { post });
});

router.post("/edit/:id", isUser(), async (req, res) => {
  const id = req.params.id;
  const existing = postViewModel(await getPostById(id));

  if (req.session.user._id != existing.owner._id) {
    return res.redirect("/login");
  }

  const post = {
    name: req.body.name,
    image: req.body.image,
    age: req.body.age,
    description: req.body.description,
    location: req.body.location,
    commentList: req.body.commentList,
    owner: existing.owner,
  };

  try {
    await updatePost(id, post);
    res.redirect("/details/" + id);
  } catch (error) {
    console.error(error);
    const errors = mapErrors(error);

    res.render("edit", { title: "Edit Post", post, errors });
  }
});

router.post("/comment/:id", isUser(), async (req, res) => {
  const id = req.params.id;
  const existing = postViewModel(await getPostById(id));

  existing.commentList.push({
    user: req.session.user._id,
    text: req.body.comment,
  });

  try {
    await updatePost(id, existing);
    res.redirect("/details/" + id);
  } catch (error) {
    console.error(error);
    const errors = mapErrors(error);

    res.render("edit", { existing, errors });
  }
});

module.exports = router;
