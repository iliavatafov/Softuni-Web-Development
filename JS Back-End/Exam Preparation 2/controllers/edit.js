const { isUser } = require("../middleware/guards");
const { getPostById, updatePost } = require("../services/post");
const { postViewModel, mapErrors } = require("../util/mappers");

const router = require("express").Router();

router.get("/edit/:id", isUser(), async (req, res) => {
  try {
    const post = postViewModel(await getPostById(req.params.id));
    res.render("edit", { title: "Edit Page", data: post });
  } catch (error) {
    res.status(404);
    res.render("404");
  }
});

router.post("/edit/:id", isUser(), async (req, res) => {
  const postId = req.params.id;
  const userId = req.session.user._id;
  const post = postViewModel({ ...req.body, creator: userId }, (create = true));
  delete post._id;
  delete post.buddies;
  try {
    await updatePost(postId, post);
    res.redirect("/details/" + postId);
  } catch (error) {
    const errors = mapErrors(error);
    res.render("edit", {
      data: {
        startPoint: req.body.startPoint,
        endPoint: req.body.endPoint,
        date: req.body.date,
        time: req.body.time,
        carImage: req.body.carImage,
        carBrand: req.body.carBrand,
        seats: req.body.seats,
        price: req.body.price,
        description: req.body.description,
      },
      errors,
    });
  }
});

module.exports = router;
